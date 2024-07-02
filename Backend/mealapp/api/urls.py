# api/urls.py
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import CustomUserListView, CustomUserDetailView,MessOptionListAPIView,UserBookingsListView,BookMessOptionView,MessOptionDetailAPIView

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('users/', CustomUserListView.as_view(), name='customuser-list'),
    path('users/<int:pk>/', CustomUserDetailView.as_view(), name='customuser-detail'),
    path('mess-options/', MessOptionListAPIView.as_view(), name='mess-options-list'),
    path('mess-options/<int:pk>/', MessOptionDetailAPIView.as_view(), name='mess-option-detail'),
    path('bookings/', UserBookingsListView.as_view(), name='user-bookings'),
    path('book-mess/', BookMessOptionView.as_view(), name='book-mess'),
]
