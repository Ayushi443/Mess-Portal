
from django.db import models
from authentication.models import CustomUser

class MessOption(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()
    menu_image = models.ImageField(upload_to='menu_images/')
    # Add more fields as per your requirements

    def __str__(self):
        return self.name



class Booking(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    mess_option = models.ForeignKey(MessOption, on_delete=models.CASCADE)
    date = models.DateField()

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['user', 'mess_option', 'date'], name='unique_booking_per_user_per_mess_per_date')
        ]

    def __str__(self):
        return f"{self.user.username} booked {self.mess_option.name} on {self.date}"