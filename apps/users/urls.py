from django.urls import path

from apps.users.views.signup import SignUpView
from apps.users.views.login import LoginAPIView
from apps.users.views.logout import LogoutAPIView
from apps.users.views.update_password import UpdatePasswordView
from apps.users.views.user_info import UserInfoRetrieveUpdateAPIView



app_name = 'users'

urlpatterns = [
    path('sign-up/', SignUpView.as_view(), name='signup'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('logout/', LogoutAPIView.as_view(), name='logout'),
    path('update_password/', UpdatePasswordView.as_view(), name='update-password'),
    path('user/profile/', UserInfoRetrieveUpdateAPIView.as_view(), name='user-info'),
]