# Generated by Django 5.0.4 on 2024-04-17 16:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_alter_userdata_dedicated_virtual_account'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='phone_number',
            field=models.BigIntegerField(unique=True),
        ),
    ]