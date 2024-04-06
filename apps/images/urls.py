from django.urls import path
from django.urls import include

from rest_framework import routers
from apps.images.views import ImageViewSet

app_name = 'images'


router = routers.SimpleRouter()
router.register(r'image', ImageViewSet, basename='Image')

urlpatterns = [
    path('', include(router.urls))
]

