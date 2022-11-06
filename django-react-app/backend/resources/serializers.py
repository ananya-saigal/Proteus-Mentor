from rest_framework import serializers
from .models import Subject, Profile, Resource, Comment
from django.core.exceptions import ObjectDoesNotExist


class SubjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subject
        fields = ('pk', 'name')


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ('pk', 'username', 'subjects')


class ResourceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Resource
        fields = ('pk', 'title', 'content_type', 'text_content', 'image_content', 'author_username', 'score', 'subject', 'date_created')

class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ('pk', 'resource_id', 'author_id', 'content', 'score')

class GetAuthorPointsSerializer(serializers.ModelSerializer):
    total_points = serializers.SerializerMethodField()

    class Meta:
        model = Profile
        fields = ('pk', 'username', 'subjects', 'total_points')

    def get_total_points(data, profile):
        print(profile.username)
        try:
            return Resource.objects.get(author_username=profile.username)
        except ObjectDoesNotExist:
            return 0
