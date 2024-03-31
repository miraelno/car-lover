from rest_framework import serializers
from apps.cars.models import Car
from apps.users.models import User
from apps.stages.models import Stage

class CreateCarSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(queryset = User.objects.all())
    
    class Meta:
        model = Car
        fields = ['model', 'vin_code', 'number', 'mileage', 'user_id']
        extra_kwargs = {
            'vin_code': {'required': False},
            'mileage': {'required': False},
        }

    def create(self, validated_data):
        user_id = validated_data['user_id'].id.hex
        try:
            stage_id = Stage.objects.get(name='Initial').id
        except Exception:
            return serializers.ValidationError('No Initial stage is added. Create Initial stage before adding a car.')
        
        Car.objects.create(model=validated_data['model'],
                                 number=validated_data['number'],
                                 user_id=user_id,
                                 stage_id=stage_id)
        return validated_data