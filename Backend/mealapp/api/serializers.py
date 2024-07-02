# api/serializers.py
from rest_framework import serializers
from authentication.models import CustomUser
from .models import MessOption,Booking

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'rollno']




class MessOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = MessOption
        fields = '__all__'

        
class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['user', 'mess_option', 'date']
        read_only_fields = ['user']