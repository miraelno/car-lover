# Generated by Django 5.0.3 on 2024-03-30 20:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='car',
            name='mileage',
            field=models.CharField(blank=True, default='', max_length=20, verbose_name='mileage'),
        ),
        migrations.AlterField(
            model_name='car',
            name='registration_date',
            field=models.DateField(blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='car',
            name='vin_code',
            field=models.CharField(blank=True, default='', max_length=150, verbose_name='vin code'),
        ),
    ]