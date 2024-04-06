from django.contrib.auth.tokens import default_token_generator
from rest_framework import serializers

from apps.users.models import User


class ConfirmEmailSerializer(serializers.Serializer):
    user_id = serializers.CharField(required=True)
    token_id = serializers.CharField(required=True)

    def validate(self, attrs):
        try:
            user = User.objects.get(id=attrs["user_id"])
        except Exception:
            raise serializers.ValidationError("No such user.")

        if not default_token_generator.check_token(user, attrs["token_id"]):
            raise serializers.ValidationError("Invalid or expired token.")

        if user.is_email_verified:
            raise serializers.ValidationError("Email is already verified.")

        attrs["user"] = user
        return attrs

    def create(self, validated_data):
        user = validated_data["user"]
        user.is_email_verified = True
        user.save(update_fields=("is_email_verified", "updated_at"))
        return user
