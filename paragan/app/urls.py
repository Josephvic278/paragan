from django.urls import path
from .views import *

app_name = 'app'

urlpatterns = [
    path('', home, name='home'),
    path('about/', about, name='about'),
    path('dashboard/', dashboard, name='dashbaord'),
    path('investment/', investment, name='investment'),
    path('paystack/', paystack, name='paystack'),
    path('sendinfo/', sendinfo, name='sendinfo'),
    path('toHome/', toHome, name='tohome'),
]
