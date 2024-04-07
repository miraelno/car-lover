FROM python:3.10

WORKDIR /code

COPY requirements /code/requirements

RUN pip install -r requirements/requirements.txt

EXPOSE 8000
