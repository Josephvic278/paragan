from django.shortcuts import render
from users.models import *
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required

# Create your views here.


def home(request):
    return render(request, 'home.html')

@login_required
def dashboard(request):
    user_id = request.user.id
    user_info = request.user
    user_data = get_object_or_404(UserData, id=user_id) 

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

def base(request):
    user_id = request.user.id

    user_data = UserData.objects.get(id=user_id)
    return render(request, 'base.html', {'user_data':user_data})

@login_required
def admin_panel(request):
    users_info = User.objects.all()
    users_data = UserData.objects.all()

    if request.method == 'POST':
        data = request.POST
        action = data.get('action')
        user_id = data.get('user_id')
        amount = data.get('amount')

        get_user = User.objects.get(id=user_id)
        get_user_data = UserData.objects.get(id=user_id)

        if action == 'add_fund':
            get_user_data.user_balance+=int(amount)
            get_user_data.save()

            return JsonResponse({'message':f'{get_user.username} account has been credited succesfully'})
        if action == 'remove':
            get_user.delete()
            return JsonResponse({'message':f'{get_user.username} has been removed successfully'})
        if action == 'add_admin':
            get_user_data.admin = True
            get_user_data.save()
            return JsonResponse({'message':f'{get_user.username} has been added as an admin successfully!!!'})

    return render(request, 'admin_panel.html',{'users_data':users_data, 'users_info':users_info})