# Generated by Django 4.2.5 on 2023-11-03 23:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('requestschool', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='requestschool',
            name='school_name',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]
