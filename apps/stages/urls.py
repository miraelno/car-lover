from django.urls import include
from django.urls import path
from rest_framework import routers

from apps.stages.views.stage_viewset import StageViewSet

app_name = "stages"


router = routers.SimpleRouter()
router.register(r"stage", StageViewSet, basename="stage")

urlpatterns = [path("", include(router.urls))]
