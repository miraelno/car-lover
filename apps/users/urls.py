from django.urls import path

from apps.users.views.confirm_email import EmailConfirmationView
from apps.users.views.login import LoginAPIView
from apps.users.views.logout import LogoutAPIView
from apps.users.views.notification_settings import NotificationSettingsAPIView
from apps.users.views.reset_password import ConfirmPasswordResetView
from apps.users.views.reset_password import ResetPasswordView
from apps.users.views.signup import SignUpView
from apps.users.views.update_password import UpdatePasswordView
from apps.users.views.user_info import UserInfoRetrieveUpdateAPIView

app_name = "users"

urlpatterns = [
    path("sign-up/", SignUpView.as_view(), name="signup"),
    path("login/", LoginAPIView.as_view(), name="login"),
    path("logout/", LogoutAPIView.as_view(), name="logout"),
    path("confirm-email/", EmailConfirmationView.as_view(), name="confirm-email"),
    path("update-password/", UpdatePasswordView.as_view(), name="update-password"),
    path("reset-password/", ResetPasswordView.as_view(), name="reset-password"),
    path(
        "confirm-reset-password/",
        ConfirmPasswordResetView.as_view(),
        name="confirm-reset-password",
    ),
    path("user/profile/", UserInfoRetrieveUpdateAPIView.as_view(), name="user-info"),
    path(
        "user/notification-settings/",
        NotificationSettingsAPIView.as_view(),
        name="notification_settings",
    ),
]
