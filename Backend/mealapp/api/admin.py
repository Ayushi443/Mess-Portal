from django.contrib import admin
from .models import MessOption,Booking

@admin.register(MessOption)
class MessOptionAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'address', 'menu_image')  # Display fields in the admin list view
    search_fields = ('name', 'address')  # Add fields to enable searching
    list_filter = ('name', 'address')  # Add filters for these fields
    
    fieldsets = (
        (None, {
            'fields': ('name', 'address', 'menu_image')  # Customize fields display in edit view
        }),
    )

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'mess_option', 'date')  # Display fields in the admin list view
    search_fields = ('user__username', 'mess_option__name', 'date')  # Add fields to enable searching
    list_filter = ('user', 'mess_option', 'date')  # Add filters for these fields
    
    fieldsets = (
        (None, {
            'fields': ('user', 'mess_option', 'date')  # Customize fields display in edit view
        }),
    )