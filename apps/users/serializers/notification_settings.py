from rest_framework import serializers

from apps.users.models import NotificationSettings

class NotificationSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = NotificationSettings
        fields = [
            'on_stage_change',
            'on_document_adding',
            'on_image_adding'
        ]
        