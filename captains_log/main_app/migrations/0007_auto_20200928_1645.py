# Generated by Django 3.1.1 on 2020-09-28 16:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0006_playerinfo_squadinfo_teaminfo_teamplayers'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='playerinfo',
            name='captain_id',
        ),
        migrations.AddField(
            model_name='playerinfo',
            name='squad_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='main_app.squadinfo'),
        ),
    ]
