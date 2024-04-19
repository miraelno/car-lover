from typing import Any

from django.contrib import admin

from apps.cars.models import Car
from apps.cars.tasks import send_new_stage_notification_email


class CarAdmin(admin.ModelAdmin):
    list_display = ["id", "number", "user", "stage"]
    list_filter = ["user", "stage"]
    list_editable = ["stage"]
    readonly_fields = ["id"]

    def save_model(self, request: Any, obj: Any, form: Any, change: Any) -> None:
        if not change:
            return super().save_model(request, obj, form, change)

        if (
            "stage" in form.changed_data
            and obj.user.notification_settings.get().on_stage_change
        ):
            send_new_stage_notification_email(obj.user.email, obj.stage.name, obj)
        return super().save_model(request, obj, form, change)


admin.site.register(Car, CarAdmin)
