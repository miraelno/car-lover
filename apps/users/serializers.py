from rest_framework import serializers
from apps.users.models import User


class SignUpSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True)
    
    class Meta:
        model = User
        fields = [
            'email',
            'password',
            'first_name',
            'last_name',
        ]
        
    def validate_email(self, email):
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError("User with such email is already exists.")
        return email
    
    
    def create(self, validated_data):
        password = validated_data.pop('password')
        new_user = User.objects.create(**validated_data)
        new_user.set_password(password)
        new_user.save(update_fields=['password'])
        return new_user