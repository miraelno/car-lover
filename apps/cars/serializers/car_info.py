from rest_framework import serializers

from apps.cars.models import Car


class CarInformationSerializer(serializers.ModelSerializer):
    # TODO: add a Stage field and it's string representation (read only)
    class Meta:
        model = Car
        fields = ["model", "vin_code", "number", "mileage"]
        extra_kwargs = {
            "vin_code": {"required": False},
            "mileage": {"required": False},
        }
