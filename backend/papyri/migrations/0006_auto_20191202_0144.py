# Generated by Django 2.2.7 on 2019-12-02 01:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('papyri', '0005_auto_20191130_0904'),
    ]

    operations = [
        migrations.AddField(
            model_name='lecture',
            name='latitude',
            field=models.CharField(default=0, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='lecture',
            name='longitude',
            field=models.CharField(default=0, max_length=200),
            preserve_default=False,
        ),
    ]