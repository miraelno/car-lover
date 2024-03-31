from drf_spectacular.utils import extend_schema
from rest_framework import generics
from apps.users.serializers.signup import SignUpSerializer
from rest_framework.permissions import AllowAny
from apps.users.models import User
from apps.users.tasks import task_exec

@extend_schema(tags=['Users'])
class SignUpView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignUpSerializer
    permission_classes = [AllowAny]
    
    
    def create(self, request, *args, **kwargs):
        # task_exec.delay('hello')
        return super().create(request, *args, **kwargs)
