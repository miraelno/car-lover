from rest_framework import serializers

from apps.users.models import User


class UserInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["first_name", "last_name", "phone", "is_email_verified", "email"]
        read_only_fields = ["is_email_verified", "email"]
