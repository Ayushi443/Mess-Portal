from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods


@csrf_exempt
@require_http_methods(["POST"])
def login_view(request):
    username = request.POST.get('username')
    rollno = request.POST.get('rollno')
    password = request.POST.get('password')

    if not username or not password or not rollno:
        return JsonResponse({'error': 'Username, roll number, and password are required'}, status=400)

    user = authenticate(request, username=username, password=password)
    if user:
        if user.profile.rollno == rollno:
            login(request, user)
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'error': 'Invalid roll number'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid credentials'}, status=400)

@csrf_exempt
@require_http_methods(["POST"])
def signup_view(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    email = request.POST.get('email')
    rollno = request.POST.get('rollno')
    first_name = request.POST.get('first_name', '')
    last_name = request.POST.get('last_name', '')

    if not username or not password or not email or not rollno:
        return JsonResponse({'error': 'Username, password, email, and roll number are required'}, status=400)

    if User.objects.filter(username=username).exists():
        return JsonResponse({'error': 'Username already exists'}, status=400)

    if Profile.objects.filter(rollno=rollno).exists():
        return JsonResponse({'error': 'Roll number already exists'}, status=400)

    user = User.objects.create_user(
        username=username,
        password=password,
        email=email,
        first_name=first_name,
        last_name=last_name
    )
    Profile.objects.create(user=user, rollno=rollno)

    return JsonResponse({'message': 'User created successfully'})
