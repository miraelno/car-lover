from django.contrib import admin

from apps.images.models import Image


class ImageAdmin(admin.ModelAdmin):
    list_display = ["name", "car", "stage"]
    list_filter = ["car"]


admin.site.register(Image, ImageAdmin)
