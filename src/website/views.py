from django.shortcuts import render
from django.views.generic import TemplateView, DetailView


class HomeView(TemplateView):
    template_name = 'website/home.html'


def handler404View(request, exception, template_name='404.html'):
    return render(request, template_name)