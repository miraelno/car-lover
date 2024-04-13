from typing import Any, Iterable
import uuid

from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from apps.users.managers import CustomUserManager


class User(AbstractBaseUser, PermissionsMixin):

    id = models.UUIDField(_("id"), primary_key=True, default=uuid.uuid4)
    email = models.EmailField(_("email address"), unique=True)
    first_name = models.CharField(
        _("first name"), max_length=150, blank=True, default=""
    )
    last_name = models.CharField(_("last name"), max_length=150, blank=True, default="")
    phone = models.CharField(_("phone number"), max_length=15, blank=True, default="")
    is_staff = models.BooleanField(
        _("staff status"),
        default=False,
        help_text=_("Designates whether the user can log into this admin site."),
    )
    is_active = models.BooleanField(
        _("active"),
        default=True,
        help_text=_(
            "Designates whether this user should be treated as active. "
            "Unselect this instead of deleting accounts."
        ),
    )
    date_joined = models.DateTimeField(_("date joined"), default=timezone.now)
    updated_at = models.DateTimeField(_("updated"), auto_now=True)
    is_email_verified = models.BooleanField(_("email verified"), default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    EMAIL_FIELD = "email"

    def save(self, *args, **kwargs) -> None:
        is_new = False
        if self.updated_at is None:
            is_new = True

        super().save(*args, **kwargs)

        if is_new:
            NotificationSettings.objects.create(user=self)

    class Meta:
        verbose_name = _("user")
        verbose_name_plural = _("users")
        db_table = "user"


class NotificationSettings(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notification_settings')
    on_stage_change = models.BooleanField(default=True)
    on_document_adding = models.BooleanField(default=True)
    on_image_adding = models.BooleanField(default=True)

    class Meta:
        verbose_name = _("notification_settings")
        verbose_name_plural = _("notification_settings")
        db_table = "notification_settings"
