from rest_framework import serializers
from apps.cars.models import Car
from apps.stages.models import Stage

# TODO: add email trigger


class StageChangeSerializer(serializers.ModelSerializer):
    stage_id = serializers.PrimaryKeyRelatedField(queryset=Stage.objects.all())

    class Meta:
        model = Car
        fields = ["id", "stage_id"]
        extra_kwargs = {
            "id": {"read_only": True},
        }
