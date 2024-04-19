from typing import Any

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group

from apps.users.models import NotificationSettings
from apps.users.models import User

admin.site.unregister(Group)


class NotificationsSettingsInline(admin.TabularInline):
    model = NotificationSettings
    fields = ["on_stage_change", "on_document_adding", "on_image_adding"]
    verbose_name = "Notification settings"
    verbose_name_plural = "Notification settings"
    can_delete = False
    extra = 0

    def has_add_permission(self, request, obj) -> bool:
        return False

    def has_change_permission(self, request, obj=None) -> bool:
        return False


class CustomUserAdmin(UserAdmin):
    list_display = ["email"]
    ordering = ["email"]

    # taken from super
    fieldsets = (
        (None, {"fields": ["password"]}),
        # (("User info"), {"fields": ("first_name","last_name")})
        (
            ("Permissions"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "is_email_verified",
                    "user_permissions",
                )
            },
        ),
        (
            ("Important dates"),
            {
                "fields": (
                    "last_login",
                    "date_joined",
                )
            },
        ),
    )
    # taken from super
    add_fieldsets = (
        (None, {"classes": ("wide",), "fields": ("email", "password1", "password2")}),
    )
    inlines = [NotificationsSettingsInline]


admin.site.register(User, CustomUserAdmin)
