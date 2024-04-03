from celery import shared_task
from django.core.mail import send_mail
from django.conf import settings

@shared_task()
def task_exec(job_params):
    send_mail(
        subject='Add an eye-catching subject',
        message='Write an amazing message',
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=['konekonani2299@gmail.com',])