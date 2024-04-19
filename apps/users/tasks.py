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
def send_reset_password_email(email, user_id, token_id):
    data = {"user_id": str(user_id), "token_id": str(token_id)}
    message = get_template("emails/reset_password_email.txt").render(data)
    send_mail(
        subject="Reset password",
        message=message,
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[email],
    )
