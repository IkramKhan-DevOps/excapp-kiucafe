import django_filters
from django.forms import TextInput

from src.accounts.models import User
from .models import Order


class OrderFilter(django_filters.FilterSet):
    id = django_filters.CharFilter(widget=TextInput(attrs={'placeholder': 'Order ID'}), lookup_expr='icontains')
    customer_name = django_filters.CharFilter(widget=TextInput(attrs={'placeholder': 'customer Name'}), lookup_expr='icontains')

    class Meta:
        model = User
        fields = {}