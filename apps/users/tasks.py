from celery import shared_task
from django.core.mail import send_mail
from django.template.loader import get_template

from apps import settings


@shared_task()
def send_confirmation_email(email, user_id, token_id):
    data = {"user_id": str(user_id), "token_id": str(token_id)}
    message = get_template("emails/confirmation_email.txt").render(data)
    send_mail(
        subject="Email confirmation",
        message=message,
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[email],
    )

@shared_task()
def send_schedule_added_email(email, stage, date, car):
    data = {"stage": str(stage), "date": str(date), "car": str(car)}
    message = get_template("emails/added_schedule.txt").render(data)
    send_mail(
        subject="New schedule",
        message=message,
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[email],
    )