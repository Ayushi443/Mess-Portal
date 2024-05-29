# views.py

from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.http import JsonResponse

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)

def signup_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        email = request.POST.get('email')
        first_name = request.POST.get('first_name', '')
        last_name = request.POST.get('last_name', '')
        if not User.objects.filter(username=username).exists():
            user = User.objects.create_user(username=username, password=password, email=email, first_name=first_name, last_name=last_name)
            return JsonResponse({'message': 'User created successfully'})
        else:
            return JsonResponse({'error': 'Username already exists'}, status=400)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)
