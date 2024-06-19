from django.contrib.auth.models import User
from django.db import models

class Meal(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=5, decimal_places=2)
    available = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    rollno = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return f'{self.user.username} - {self.rollno}'
