from django.contrib import admin
from django import forms
from .models import Product, Order, Cart


class ProductAdminForm(forms.ModelForm):

    class Meta:
        model = Product
        fields = '__all__'


class ProductAdmin(admin.ModelAdmin):
    form = ProductAdminForm
    list_display = ['name', 'desc', 'image', 'price_out', 'total_quantity_sold', 'total_sales_amount', 'is_active', 'created_on']
    readonly_fields = ['total_quantity_sold', 'total_sales_amount', 'created_on']


admin.site.register(Product, ProductAdmin)


class OrderAdminForm(forms.ModelForm):

    class Meta:
        model = Order
        fields = '__all__'


class OrderAdmin(admin.ModelAdmin):
    form = OrderAdminForm
    list_display = ['customer_name', 'total', 'paid', 'remaining', 'is_active', 'created_on']
    readonly_fields = ['created_on']


admin.site.register(Order, OrderAdmin)


class CartAdminForm(forms.ModelForm):

    class Meta:
        model = Cart
        fields = '__all__'


class CartAdmin(admin.ModelAdmin):
    form = CartAdminForm
    list_display = ['quantity']


admin.site.register(Cart, CartAdmin)
