# Generated by Django 5.0.3 on 2024-04-13 19:48

import django.db.models.deletion
from django.conf import settings
from django.db import migrations
from django.db import models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0005_alter_notificationsettings_user"),
    ]

    operations = [
        migrations.AlterField(
            model_name="notificationsettings",
            name="user",
            field=models.ForeignKey(
                blank=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="notification_settings",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
    ]
