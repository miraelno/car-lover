from django.urls import path

from apps.cars.views.create_car import CreateCar
from apps.cars.views.car_info import CarInfoRetrieveUpdateAPIView
from apps.cars.views.car_info import CarInfoListAPIView
from apps.cars.views.change_car_owner import CarOwnerUpdateAPIView


app_name = 'cars'

urlpatterns = [
    path('create/', CreateCar.as_view(), name='create-car'),
    path('info/<slug:pk>', CarInfoRetrieveUpdateAPIView.as_view(), name='car-info'),
    path('list/', CarInfoListAPIView.as_view(), name='car-list'),
    path('change-owner/<slug:pk>', CarOwnerUpdateAPIView.as_view(), name='change-car-owner'),
]