from rest_framework import serializers
from .models import Notes
from django.utils.timesince import timesince

class NotesSerializer(serializers.ModelSerializer):
    created_at=serializers.SerializerMethodField(source='get_created_at')
    class Meta:
        model = Notes
        fields = ['id', 'title', 'body','created_at']
    def get_created_at(self,obj):
        time=timesince(obj.created_at)
        time=time.split(',')[0]
        return time
