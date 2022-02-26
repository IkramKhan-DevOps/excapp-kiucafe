from django.db import models
from django.urls import reverse
from django_resized import ResizedImageField


class Product(models.Model):
    name = models.CharField(max_length=255)
    desc = models.TextField(null=True, blank=True, default='Description not provided yet')
    image = ResizedImageField(
        upload_to='accounts/images/profiles/', null=True, blank=True, size=[400, 400], quality=75, force_format='PNG',
        help_text='size of logo must be 400*400 and format must be png image file', crop=['middle', 'center']
    )
    price_in = models.FloatField(default=1, help_text="Retail price")
    price_out = models.FloatField(default=1, help_text="Sale Price")
    total_quantity_sold = models.PositiveIntegerField()
    total_sales_amount = models.PositiveIntegerField()

    is_active = models.BooleanField(default=True)
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('-pk',)

    def __unicode__(self):
        return u'%s' % self.pk

    def get_absolute_url(self):
        return reverse('admins_product_detail', args=(self.pk,))

    def get_update_url(self):
        return reverse('admins_product_update', args=(self.pk,))


class Order(models.Model):
    customer_name = models.CharField(max_length=255, default='Anonymous', blank=True)
    cart = models.ManyToManyField(Product, through='Cart', related_name='cart')
    total = models.FloatField()
    paid = models.FloatField()
    remaining = models.FloatField()

    is_active = models.BooleanField(default=True)
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.customer_name

    class Meta:
        ordering = ('-pk',)

    def __unicode__(self):
        return u'%s' % self.pk

    def get_absolute_url(self):
        return reverse('admins_order_detail', args=(self.pk,))

    def get_update_url(self):
        return reverse('admins_order_update', args=(self.pk,))


class Cart(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE,  related_name='orders')
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='products')
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return self.product.name

    class Meta:
        ordering = ('-pk',)

    def __unicode__(self):
        return u'%s' % self.pk

    def get_absolute_url(self):
        return reverse('admins_cart_detail', args=(self.pk,))

    def get_update_url(self):
        return reverse('admins_cart_update', args=(self.pk,))
