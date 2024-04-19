from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.tokens import default_token_generator
from rest_framework import serializers

from apps.users.models import User
from apps.users.tasks import send_reset_password_email


class ResetPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate(self, attrs):
        try:
            user = User.objects.get(email=attrs["email"])
        except User.DoesNotExist:
            raise serializers.ValidationError("No such user.")

        confirmation_token = default_token_generator.make_token(user)
        send_reset_password_email(user.email, user.id, confirmation_token)
        return attrs


class ConfirmPasswordResetSerializer(serializers.Serializer):
    user_id = serializers.CharField(write_only=True)
    token_id = serializers.CharField(write_only=True)
    new_password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        try:
            user = User.objects.get(id=attrs["user_id"])
        except Exception:
            raise serializers.ValidationError("No such user.")

        if not default_token_generator.check_token(user, attrs["token_id"]):
            raise serializers.ValidationError("Invalid or expired token.")

        try:
            validate_password(attrs["new_password"], user)
        except Exception:
            serializers.ValidationError("Invalid password.")

        attrs["user"] = user
        return attrs

    def create(self, validated_data):
        user = validated_data["user"]
        user.set_password(validated_data["new_password"])
        user.save(update_fields=("password", "updated_at"))
        return user
