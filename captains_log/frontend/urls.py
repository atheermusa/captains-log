from django.urls import path
from . import views
from django.conf.urls import url

urlpatterns = [
    path('', views.index),
    path('pdf/<str:content>', views.pdf_view),
    ]
