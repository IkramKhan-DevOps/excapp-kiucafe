from django import forms
from .models import Product, Order, Cart


class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'desc', 'image', 'price_out', 'total_quantity_sold', 'total_sales_amount', 'is_active']


class OrderForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = ['customer_name', 'total', 'paid', 'remaining', 'is_active', 'cart']


class CartForm(forms.ModelForm):
    class Meta:
        model = Cart
        fields = ['quantity', 'product', 'order']
