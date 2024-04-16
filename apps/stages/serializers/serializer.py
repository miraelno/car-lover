from rest_framework import serializers

from apps.stages.models import Stage


class StageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stage
        fields = ['id', 'name']