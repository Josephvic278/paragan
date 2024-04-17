from django.shortcuts import render
from users.models import *
from django.shortcuts import get_object_or_404
from django.contrib.auth.decorators import login_required

# Create your views here.


def home(request):
    return render(request, 'home.html')

@login_required
def dashboard(request):
    user_id = request.user.id
    user_data = None
    if User.is_authenticated:
        user_data = get_object_or_404(User, id=user_id)
        user_info = get_object_or_404(UserData, id=user_id)

    return render(request, 'dashboard.html', {'user_data': user_data, 'user_info': user_info})

@login_required
def investment(request):
    return render(request, 'investment.html')


def about(request):
    return render(request, 'about.html')


def paystack(request):
    return render(request, 'payStack.html')


def toHome(request):
    return render(request, 'toHome.html')

@login_required
def admin_panel(request):
    return render(request, 'admin_panel.html',)