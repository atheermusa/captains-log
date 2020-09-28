from .models import Captains, MatchReport
from rest_framework import viewsets, permissions
from .serializers import CaptainsSerializer, MatchReportSerializer

class CaptainsViewSet(viewsets.ModelViewSet):
    queryset = Captains.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CaptainsSerializer

class MatchReportViewSet(viewsets.ModelViewSet):
    queryset = MatchReport.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MatchReportSerializer
