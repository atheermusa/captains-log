from rest_framework import routers
from .api import CaptainsViewSet

router = routers.DefaultRouter()
router.register('api/captains', CaptainsViewSet, 'captains')

urlpatterns = router.urls