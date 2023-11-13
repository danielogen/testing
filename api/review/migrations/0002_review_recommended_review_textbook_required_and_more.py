# Generated by Django 4.2.5 on 2023-11-06 05:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("review", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="review",
            name="recommended",
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name="review",
            name="textbook_required",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="review",
            name="year_taken",
            field=models.IntegerField(default=2023),
        ),
    ]