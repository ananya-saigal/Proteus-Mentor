# Generated by Django 4.1.3 on 2022-11-06 04:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resources', '0002_comment'),
    ]

    operations = [
        migrations.AddField(
            model_name='resource',
            name='date_created',
            field=models.DateField(default="2001-01-01"),
            preserve_default=False,
        ),
    ]