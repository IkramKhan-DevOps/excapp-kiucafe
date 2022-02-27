from django.urls import path, include
from . import views

urlpatterns = (

    path('admins/', views.DashboardView.as_view(), name='admins_dashboard'),

    # urls for Product
    path('admins/product/', views.ProductListView.as_view(), name='admins_product_list'),
    path('admins/product/create/', views.ProductCreateView.as_view(), name='admins_product_create'),
    path('admins/product/detail/<int:pk>/', views.ProductDetailView.as_view(), name='admins_product_detail'),
    path('admins/product/update/<int:pk>/', views.ProductUpdateView.as_view(), name='admins_product_update'),
)

urlpatterns += (
    # urls for Order
    path('admins/order/', views.OrderListView.as_view(), name='admins_order_list'),
    path('admins/order/create/', views.OrderCreateView.as_view(), name='admins_order_create'),
    path('admins/order/detail/<int:pk>/', views.OrderDetailView.as_view(), name='admins_order_detail'),
    path('admins/order/update/<int:pk>/', views.OrderUpdateView.as_view(), name='admins_order_update'),
)

urlpatterns += (
    # urls for Cart
    path('admins/cart/', views.CartListView.as_view(), name='admins_cart_list'),
    path('admins/cart/create/', views.CartCreateView.as_view(), name='admins_cart_create'),
    path('admins/cart/detail/<int:pk>/', views.CartDetailView.as_view(), name='admins_cart_detail'),
    path('admins/cart/update/<int:pk>/', views.CartUpdateView.as_view(), name='admins_cart_update'),
)

urlpatterns += (
    path('api/product/', views.ProductListAPI.as_view(), name='product_list'),
    path('api/order/', views.ProcessOrderAPI.as_view(), name='process_order'),
)
