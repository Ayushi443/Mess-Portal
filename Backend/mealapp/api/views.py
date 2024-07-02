# api/views.py
from rest_framework import generics,status
from authentication.models import CustomUser
from .models import MessOption,Booking
from .serializers import CustomUserSerializer,MessOptionSerializer,BookingSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from django.shortcuts import get_object_or_404

class CustomUserListView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

class CustomUserDetailView(generics.RetrieveAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer


class MessOptionListAPIView(generics.ListAPIView):
    queryset = MessOption.objects.all()
    serializer_class = MessOptionSerializer

class MessOptionDetailAPIView(generics.RetrieveAPIView):
    queryset = MessOption.objects.all()
    serializer_class = MessOptionSerializer
    lookup_field = 'id'  # Use 'id' as the lookup field

    def retrieve(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
            return Response(serializer.data)
        except MessOption.DoesNotExist:
            raise NotFound('Mess option not found')

class UserBookingsListView(generics.ListAPIView):
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Booking.objects.filter(user=user)




class BookMessOptionView(generics.CreateAPIView):
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        mess_option_id = self.request.data.get('mess_option')
        date = self.request.data.get('date')

        if not mess_option_id or not date:
            raise ValidationError('Mess option and date are required')

        # Ensure the mess option exists
        mess_option = get_object_or_404(MessOption, id=mess_option_id)

        # Check if the mess option is already booked by the user on the given date
        existing_booking = Booking.objects.filter(user=self.request.user, mess_option=mess_option, date=date).first()
        if existing_booking:
            raise ValidationError('You have already booked this mess option on this date.')

        # Save the booking with the user, mess option, and date
        serializer.save(user=self.request.user, mess_option=mess_option, date=date)

    def create(self, request, *args, **kwargs):
        try:
            response = super().create(request, *args, **kwargs)
            return Response({'message': 'Mess option booked successfully.'}, status=status.HTTP_201_CREATED)
        except ValidationError as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)