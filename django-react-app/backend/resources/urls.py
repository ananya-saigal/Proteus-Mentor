from django.urls import path
from .views import SubjectListView, SubjectDetailView, ProfileListView, ProfileDetailView, ResourceListView, ResourceDetailView, CommentListView, CommentDetailView, AuthorPointsView

urlpatterns = [  
    path('subjects', SubjectListView.as_view()),                
    path('subject/<int:pk>', SubjectDetailView.as_view()),
    path('profiles', ProfileListView.as_view()),
    path('profile/<int:pk>', ProfileDetailView.as_view()),
    path('resources', ResourceListView.as_view()),
    path('resource/<int:pk>', ResourceDetailView.as_view()),
    path('comments', CommentListView.as_view()),
    path('comment/<int:pk>', CommentDetailView.as_view()),
    path('authorpoints/<int:pk>/', AuthorPointsView.as_view()),
]
