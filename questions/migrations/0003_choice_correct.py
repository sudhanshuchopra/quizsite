# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-06-20 12:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0002_choice'),
    ]

    operations = [
        migrations.AddField(
            model_name='choice',
            name='correct',
            field=models.BooleanField(default=True),
            preserve_default=False,
        ),
    ]
