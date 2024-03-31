from celery import shared_task


@shared_task()
def task_exec(job_params):
    print(f"Hello from celery {job_params}")