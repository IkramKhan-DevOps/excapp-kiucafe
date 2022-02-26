from django.views.generic import DetailView, ListView, UpdateView, CreateView
from .models import Product, Order, Cart
from .forms import ProductForm, OrderForm, CartForm


class ProductListView(ListView):
    model = Product


class ProductCreateView(CreateView):
    model = Product
    form_class = ProductForm


class ProductDetailView(DetailView):
    model = Product


class ProductUpdateView(UpdateView):
    model = Product
    form_class = ProductForm


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