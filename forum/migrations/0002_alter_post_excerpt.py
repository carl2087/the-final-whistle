# Generated by Django 3.2.18 on 2023-03-03 13:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='excerpt',
            field=models.TextField(blank=True, max_length=300),
        ),
    ]