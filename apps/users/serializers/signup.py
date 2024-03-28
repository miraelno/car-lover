from rest_framework import serializers
from apps.users.models import User
from django.contrib.auth.password_validation import validate_password
from django.utils.translation import gettext_lazy as _


class SignUpSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True,max_length=255)
    password = serializers.CharField(label=_("Password"),
        style={'input_type': 'password'},trim_whitespace=True,write_only=True)
    
    # TODO add 'repeat password' field
    
    class Meta:
        model = User
        fields = [
            'email',
            'password',
            'first_name',
            'last_name',
        ]
        
    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("User with such email is already exists.")
        return value
    
    def validate_password(self, value):
        validate_password(password=value)
        return value
        
    def create(self, validated_data):
        password = validated_data.pop('password')
        new_user = User.objects.create(**validated_data)
        new_user.set_password(password)
        new_user.save(update_fields=['password'])
        return new_user