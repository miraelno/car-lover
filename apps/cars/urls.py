from django.urls import path

from apps.cars.views.create_car import CreateCarAPIView
from apps.cars.views.car_info import CarInfoRetrieveUpdateAPIView
from apps.cars.views.car_info import CarInfoListAPIView
from apps.cars.views.change_car_owner import CarOwnerUpdateAPIView
from apps.cars.views.stage_change import StageChangeUpdateAPIView

app_name = "cars"

urlpatterns = [
    path("create/", CreateCarAPIView.as_view(), name="create-car"),
    path("list/", CarInfoListAPIView.as_view(), name="car-list"),
    path("info/<slug:pk>", CarInfoRetrieveUpdateAPIView.as_view(), name="car-info"),
    path(
        "change-owner/<slug:pk>",
        CarOwnerUpdateAPIView.as_view(),
        name="change-car-owner",
    ),
    path(
        "change-stage/<slug:pk>",
        StageChangeUpdateAPIView.as_view(),
        name="change-stage",
    ),
]
