from django.urls import path
from .views import HomeView, ProjectView


app_name = 'website'
urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('project/<int:pk>/', ProjectView.as_view(), name='project-detail'),
]
