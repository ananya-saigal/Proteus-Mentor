# from django.shortcuts import render

from .models import Subject, Profile, Resource, Comment
from .serializers import SubjectSerializer, ProfileSerializer, ResourceSerializer, CommentSerializer, GetAuthorPointsSerializer
from rest_framework.generics import ListCreateAPIView,  RetrieveUpdateDestroyAPIView, GenericAPIView, get_object_or_404
from rest_framework.mixins import RetrieveModelMixin
from rest_framework.permissions import IsAuthenticated


class SubjectListView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer


class SubjectDetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer


class ProfileListView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileDetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ResourceListView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer


class ResourceDetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer


class CommentListView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class CommentDetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class AuthorPointsView(GenericAPIView, RetrieveModelMixin):
    permission_classes = [IsAuthenticated]
    queryset = Profile.objects.all()
    serializer_class = GetAuthorPointsSerializer

    def get_object(self):
        queryset = self.get_queryset()
        return get_object_or_404(queryset, id=self.request.user.id)

    def get(self, request, *args, **kwargs):
        """
        Get the current user's review status and user details
        Reads the review status status of the current logged in user.
        """
        return self.retrieve(request, *args, **kwargs)
