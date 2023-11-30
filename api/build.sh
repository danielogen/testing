#!/bin/bash

echo "Installing dependencies..."
python3.9 -m pip install --upgrade pip
python3.9 -m pip install -r requirements.txt

echo "Migrating database..."

python3.9 manage.py makemigrations --noinput
python3.9 manage.py migrate --noinput

echo "Creating superuser..."

DJANGO_SUPERUSER_EMAIL=${EMAIL_HOST_USER}
DJANGO_SUPERUSER_USERNAME=${SUPERUSER_USERNAME}
DJANGO_SUPERUSER_PASSWORD=${EMAIL_HOST_PASSWORD}

python3.9 manage.py createsuperuser \
    --email $DJANGO_SUPERUSER_EMAIL \
    --username $DJANGO_SUPERUSER_USERNAME \
    --password $DJANGO_SUPERUSER_PASSWORD \
    --noinput || true

echo "Collecting static files..."

python3.9 manage.py collectstatic --noinput
