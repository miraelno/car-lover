from rest_framework import serializers
from django.utils import timezone
from apps.users.models import User
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import authenticate
from django.contrib.auth.models import update_last_login


class LoginSerializer(serializers.Serializer):
    http_method_names = ['post']
    email = serializers.EmailField(required=True, max_length=255)
    password = serializers.CharField(label=_("Password"),
        style={'input_type': 'password'},trim_whitespace=True,write_only=True)
    
    
    def validate(self, data):
        email = data.get('email')
        password = data.get('password')
        
        if email and password:
            user = authenticate(request=self.context.get('request'),
                                email=email, password=password)
            
            if not user:
                raise serializers.ValidationError('Unable to log in with provided credentials.')
        
        else:
                raise serializers.ValidationError('Must include "username" and "password".')

        data['user'] = user
        update_last_login(None, user)
        return data
    