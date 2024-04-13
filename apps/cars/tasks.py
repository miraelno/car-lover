from celery import shared_task
from django.core.mail import send_mail
from django.template.loader import get_template

from apps import settings


@shared_task()
def send_new_stage_notification_email(email, stage, car):
    data = {"stage": str(stage), "car": str(car)}
    message = get_template("emails/new_stage.txt").render(data)
    send_mail(
        subject="New stage",
        message=message,
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[email],
    )