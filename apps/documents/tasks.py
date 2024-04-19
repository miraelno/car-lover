from celery import shared_task
from django.core.mail import send_mail
from django.template.loader import get_template

from apps import settings


@shared_task()
def send_new_document_notification_email(email, car):
    data = {"car": str(car)}
    message = get_template("emails/new_document_email.txt").render(data)
    send_mail(
        subject="New document",
        message=message,
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[email],
    )
