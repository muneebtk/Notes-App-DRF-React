from django.contrib import admin
from . models import Notes

class NotesAdmin(admin.ModelAdmin):
    list_diplay=('id','title','content','created_at')
    verbose_name_plural = "notes"
admin.site.register(Notes)
