from django.contrib import admin
from .models import Product, Cart, Order


class ProductAdmin(admin.ModelAdmin):
    list_display = ['pk', 'name', 'price_in', 'price_out', 'created_on']


class OrderAdmin(admin.ModelAdmin):
    list_display = ['pk', 'customer_name', 'cart', 'total', 'paid', 'remaining', 'is_active', 'created_on']


class CartAdmin(admin.ModelAdmin):
    list_display = ['pk', 'product', 'order', 'quantity']


admin.site.register(Product)
admin.site.register(Cart)
admin.site.register(Order)
