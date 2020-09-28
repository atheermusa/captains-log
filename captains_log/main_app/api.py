from .models import Captains
from rest_framework import viewsets, permissions
from .serializers import CaptainsSerializer

class CaptainsViewSet(viewsets.ModelViewSet):
    queryset = Captains.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CaptainsSerializer

