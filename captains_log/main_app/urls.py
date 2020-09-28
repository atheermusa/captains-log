from rest_framework import routers
from .api import CaptainsViewSet, MatchReportViewSet

router = routers.DefaultRouter()
router.register('api/captains', CaptainsViewSet, 'captains')
router.register('api/reports', MatchReportViewSet, 'reports')

urlpatterns = router.urls
