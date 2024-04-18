from django.urls import path
from .views import *

app_name = 'app'

urlpatterns = [
    path('', home, name='home'),
    path('about/', about, name='about'),
    path('dashboard/', dashboard, name='dashboard'),
    path('investment/', investment, name='investment'),
    path('paystack/', paystack, name='paystack'),
    path('toHome/', toHome, name='tohome'),
    path('admin_panel/', admin_panel, name='admin'),
    path('base/', base, name='base')
]