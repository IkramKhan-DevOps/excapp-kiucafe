import calendar
import datetime
import json
from builtins import super
from datetime import date

from django.core import serializers
from django.db.models import Sum, Count
from django.http import JsonResponse, HttpResponse
from django.views import View
from django.views.generic import DetailView, ListView, UpdateView, CreateView, TemplateView, DeleteView
from django_filters.rest_framework import DjangoFilterBackend, FilterSet, filters
from json_views.views import JSONListView
from rest_framework import generics, status
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.serializers import ModelSerializer
from rest_framework.views import APIView

from .models import Product, Order, Cart
from .forms import ProductForm, OrderForm, CartForm


def get_month_days():
    now = datetime.datetime.now()
    days = calendar.monthrange(now.year, now.month)[1]
    return days


class DashboardView(TemplateView):
    template_name = 'admins/dashboard.html'

    def get_context_data(self, **kwargs):
        context = super(DashboardView, self).get_context_data(**kwargs)
        context['orders_recent'] = Order.objects.all()[:10]

        # TODAY MONTH YEAR ---------------------------------------------------------------------------------------------
        total_calculations = Order.objects.aggregate(
            Sum('paid'), Count('pk')
        )
        today_calculations = Order.objects.filter(
            created_on__day=date.today().day, created_on__month=date.today().month, created_on__year=date.today().year
        ).aggregate(Sum('paid'), Count('pk'))

        month_calculations = Order.objects.filter(
            created_on__day=date.today().day, created_on__month=date.today().month, created_on__year=date.today().year
        ).aggregate(Sum('paid'), Count('pk'))

        context['total_amount'] = total_calculations['paid__sum']
        context['total_sales'] = total_calculations['pk__count']

        context['month_amount'] = month_calculations['paid__sum']
        context['month_sales'] = month_calculations['pk__count']

        context['today_amount'] = today_calculations['paid__sum']
        context['today_sales'] = today_calculations['pk__count']

        # GRAPH CALCULATIONS -------------------------------------------------------------------------------------------
        days_in_month = get_month_days()
        days = []
        chart_sales = []
        chart_income = []
        [days.append(x) for x in range(1, days_in_month + 1)]
        [chart_sales.append(0) for x in range(1, days_in_month + 1)]
        [chart_income.append(0) for x in range(1, days_in_month + 1)]

        for count in range(len(days)):
            today_sales = Order.objects.filter(
                created_on__day=days[count], created_on__month=date.today().month,
                created_on__year=date.today().year
            )
            if today_sales:
                _aggregate = today_sales.aggregate(Sum('paid'), Count('pk'))
                chart_income[count] = int(_aggregate['paid__sum'])
                chart_sales[count] = int(_aggregate['pk__count'])

        context['days'] = days
        context['chart_sales'] = chart_sales
        context['chart_income'] = chart_income

        from django.template.defaultfilters import date as dff
        context['month_name'] = dff(date.today(), 'F')

        return context


class ProductListView(ListView):
    model = Product
    paginate_by = 50


class ProductCreateView(CreateView):
    model = Product
    fields = ['image', 'name', 'desc', 'price_in', 'price_out', 'is_active']


class ProductDetailView(DetailView):
    model = Product


class ProductUpdateView(UpdateView):
    model = Product
    fields = ['image', 'name', 'desc', 'price_in', 'price_out', 'is_active']


class OrderListView(ListView):
    model = Order


class OrderCreateView(CreateView):
    model = Order
    form_class = OrderForm


class OrderDetailView(DetailView):
    model = Order


class OrderUpdateView(UpdateView):
    model = Order
    form_class = OrderForm
    template_name = 'admins/order_form_update.html'

    def get_context_data(self, **kwargs):
        context = super(OrderUpdateView, self).get_context_data(**kwargs)
        context['carts'] = Cart.objects.filter(order=self.object)
        print(context['carts'])
        return context


class CartListView(ListView):
    model = Cart


class CartCreateView(CreateView):
    model = Cart
    form_class = CartForm


class CartDetailView(DetailView):
    model = Cart


class CartUpdateView(UpdateView):
    model = Cart
    form_class = CartForm


""" API HERE -------------------------------------------------------------------------- """


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class ProductFilter(FilterSet):
    name = filters.CharFilter(field_name='name', lookup_expr='contains')

    class Meta:
        model = Product
        fields = ['name']


class ProductListAPI(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend]
    filter_class = ProductFilter


class ProcessOrderAPI(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        data = self.request.data

        customer = data['customer']
        total = data['total']
        products = data['products']

        order = Order.objects.create(
            customer_name=customer, total=total, paid=total, remaining=0
        )

        for product in products:
            product_ = Product.objects.get(pk=product['id'])
            quantity_ = product['quantity']

            # SAVE PRODUCT
            product_.total_quantity_sold += quantity_
            product_.total_sales_amount += (quantity_ * product_.price_out)
            product_.save()

            # SAVE CART
            Cart(
                order=order,
                product=product_,
                quantity=product['quantity']
            ).save()

        return Response(status=status.HTTP_201_CREATED)


class DeleteOrderAPI(APIView):

    def get(self, request, pk):
        order = Order.objects.get(pk=pk)
        for cart in Cart.objects.filter(order=order):
            product_ = cart.product
            quantity_ = cart.quantity

            # SAVE PRODUCT
            product_.total_quantity_sold -= quantity_
            product_.total_sales_amount -= (quantity_ * product_.price_out)
            product_.save()

        order.delete()
        return Response(status=status.HTTP_200_OK)


class ReturnAPI(APIView):
    permission_classes = [AllowAny]

    def post(self, request, pk):

        data = self.request.data

        customer = data['customer']
        total = data['total']
        products = data['products']
        order = Order.objects.create(
            customer_name=customer, total=total, paid=total, remaining=0
        )

        for product in products:
            product_ = Product.objects.get(pk=product['id'])
            quantity_ = product['quantity']

            # SAVE PRODUCT
            product_.total_quantity_sold += quantity_
            product_.total_sales_amount += (quantity_*product_.price_out)
            product_.save()

            # SAVE CART
            Cart.objects.create(
                order=order,
                product=product_,
                quantity=product['quantity']
            )

        # DELETE PREVIOUS
        _order = Order.objects.get(pk=pk)
        for cart in Cart.objects.filter(order=_order):
            product_ = cart.product
            quantity_ = cart.quantity

            # SAVE PRODUCT
            product_.total_quantity_sold -= quantity_
            product_.total_sales_amount -= (quantity_ * product_.price_out)
            product_.save()

        _order.delete()

        return Response(status=status.HTTP_201_CREATED, data={'id': order.pk})


