from rest_framework import serializers

from apps.cars.models import Car
from apps.schedule.models import Schedule


class ScheduleInformationSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Schedule
        fields = ["start_date", "stage", "car"]
        extra_kwargs = {
            "stage": {"required": False},
        }