from django.urls import include
from django.urls import path
from rest_framework import routers

from apps.images.views.image_viewset import ImageViewSet

app_name = "images"


router = routers.SimpleRouter()
router.register(r"image", ImageViewSet, basename="Image")

urlpatterns = [path("", include(router.urls))]
