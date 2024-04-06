from rest_framework import serializers
import uuid

from apps.cars.models import Car
from apps.users.models import User


class ChangeCarOwnerSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Car
        fields = ["user_id"]
