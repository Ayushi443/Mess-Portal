# authentication/views.py
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomUser
import json

@csrf_exempt
@require_http_methods(["POST"])
def login_view(request):
    username = request.POST.get('username')
    password = request.POST.get('password')

    if not username or not password:
        return JsonResponse({'error': 'Username and password are required'}, status=400)

    user = authenticate(request, username=username, password=password)
    if user:
        login(request, user)
        refresh = RefreshToken.for_user(user)
        return JsonResponse({
            'message': 'Login successful',
            'access': str(refresh.access_token),
            'refresh': str(refresh)
        })
    else:
        return JsonResponse({'error': 'Invalid credentials'}, status=400)

@csrf_exempt
@require_http_methods(["POST"])
def signup_view(request):
    data = json.loads(request.body.decode('utf-8'))
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')
    rollno = data.get('rollno')
    first_name = data.get('first_name', '')
    last_name = data.get('last_name', '')

    print(username)

    if not username or not password or not email or not rollno:
        return JsonResponse({'error': 'Username, password, email, and roll number are required'}, status=400)

    if CustomUser.objects.filter(username=username).exists():
        return JsonResponse({'error': 'Username already exists'}, status=400)

    if CustomUser.objects.filter(rollno=rollno).exists():
        return JsonResponse({'error': 'Roll number already exists'}, status=400)

    user = CustomUser.objects.create_user(
        username=username,
        password=password,
        email=email,
        first_name=first_name,
        last_name=last_name,
        rollno=rollno
    )

    refresh = RefreshToken.for_user(user)
    return JsonResponse({
        'message': 'User created successfully',
        'access': str(refresh.access_token),
        'refresh': str(refresh)
    })
