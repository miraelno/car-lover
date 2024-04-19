from drf_spectacular.utils import extend_schema
from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response

from apps.schedule.models import Schedule
from apps.schedule.serializers.schedule import ScheduleInformationSerializer


@extend_schema(tags=["Schedule"])
class ScheduleViewSet(viewsets.ModelViewSet):
    serializer_class = ScheduleInformationSerializer
    queryset = Schedule.objects.all()

    def get_permissions(self):
        match self.action:
            case "destroy" | "update" | "partial_update" | "create":
                return [IsAdminUser()]
            case _:
                return super().get_permissions()

    def get_queryset(self):
        match self.action:
            case "retrieve":
                return Schedule.objects.filter(car=self.kwargs["pk"])
            case _:
                return Schedule.objects.filter(car__user__id=self.request.user.id)

    def retrieve(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        stage = self.request.query_params.get("stage")

        if stage is not None:
            queryset = queryset.filter(stage=stage)

        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
