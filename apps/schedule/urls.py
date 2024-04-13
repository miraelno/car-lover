from django.urls import include
from django.urls import path
from rest_framework import routers

from apps.schedule.views.views import ScheduleViewSet

app_name = "schedule"


router = routers.SimpleRouter()
router.register(r"schedule", ScheduleViewSet, basename="schedule")

urlpatterns = [path("", include(router.urls))]
