# Generated by Django 3.1.3 on 2020-12-03 13:11

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('transfer', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='history',
            name='time',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 12, 3, 13, 11, 21, 956581, tzinfo=utc)),
        ),
    ]
