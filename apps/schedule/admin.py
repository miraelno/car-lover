from django.contrib import admin

from apps.schedule.models import Schedule


class ScheduleAdmin(admin.ModelAdmin):
    list_display = ["start_date", "stage", "car"]
    list_filter = ["car"]

    
admin.site.register(Schedule, ScheduleAdmin)