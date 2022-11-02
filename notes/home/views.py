from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import NotesSerializer
from rest_framework import viewsets

from home.models import Notes

# Get all notes and create a new note

@api_view(['GET', 'POST'])
def AllNotes(request):
    if request.method == 'GET':
        all_notes = Notes.objects.all()
        serializer = NotesSerializer(all_notes, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        Notes.objects.create(
            title=request.data['title'],
            body=request.data['body']
        )
        return Response('Note created successfully')
# Get, update, delete a node


class NotesViewSet(viewsets.ModelViewSet):
    queryset = Notes.objects.all()
    serializer_class = NotesSerializer
