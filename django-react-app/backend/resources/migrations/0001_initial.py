# Generated by Django 4.1.3 on 2022-11-06 00:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='name')),
            ],
        ),
        migrations.CreateModel(
            name='Resource',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='title')),
                ('content_type', models.CharField(max_length=5, verbose_name='type')),
                ('text_content', models.CharField(max_length=10000, null=True, verbose_name='text content')),
                ('image_content', models.ImageField(null=True, upload_to='', verbose_name='image content')),
                ('author_username', models.CharField(max_length=20, unique=True, verbose_name='title')),
                ('score', models.IntegerField()),
                ('subject', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='resources.subject')),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=20, unique=True, verbose_name='username')),
                ('subjects', models.ManyToManyField(to='resources.subject')),
            ],
        ),
    ]
