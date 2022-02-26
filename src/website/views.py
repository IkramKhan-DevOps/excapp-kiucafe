from django.views.generic import TemplateView, DetailView


class HomeView(TemplateView):
    template_name = 'website/home.html'


class ProjectView(DetailView):
    template_name = 'website/project_detail.html'
