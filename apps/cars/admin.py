from django.contrib import admin

from apps.cars.models import Car


class CarAdmin(admin.ModelAdmin):
    pass
    
admin.site.register(Car, CarAdmin)
