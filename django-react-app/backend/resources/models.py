from django.db import models


class Subject(models.Model):
    name = models.CharField('name', max_length=100)


class Profile(models.Model):
    username = models.CharField('username', max_length=20, unique=True)
    subjects = models.ManyToManyField(Subject)


class Resource(models.Model):
    title = models.CharField('title', max_length=100)
    text_content = models.CharField('text content', max_length=10000, null=True)
    image_content = models.ImageField('image content', null=True)
    author_username = models.CharField('author username', max_length=20, unique=False)
    score = models.IntegerField()
    subject = models.OneToOneField(Subject, on_delete=models.CASCADE)
    date_created = models.DateField()


class Comment(models.Model):
    resource_id = models.IntegerField()
    author_username = models.CharField('title', max_length=20, unique=False)
    content = models.CharField('text content', max_length=10000, null=True)
    score = models.IntegerField()