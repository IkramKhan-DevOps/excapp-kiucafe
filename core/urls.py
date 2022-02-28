from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from src.website.views import handler404View
from . import settings


handler404 = handler404View


urlpatterns = [
    # REQUIRED --------------------------------------------------------- #
    path('admin/', admin.site.urls),
    path('accounts/', include('src.accounts.urls', namespace='accounts')),
    path('accounts/', include('allauth.urls')),
    path('', include('src.admins.urls')),

    # PORTALS ---------------------------------------------------------- #
    path('', include('src.website.urls', namespace='website')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
