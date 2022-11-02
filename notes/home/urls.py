from django.urls import path,include
from . import views
from rest_framework import routers


router=routers.DefaultRouter()
router.register('api/v1/notes',views.NotesViewSet)
urlpatterns=[
    path('api/v1/notes/',views.AllNotes)
]+router.urls