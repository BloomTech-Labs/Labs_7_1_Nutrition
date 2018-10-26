from rest_framework import serializers, viewsets
from .models import Recipe, Ingredients, NutritionInfo, User
from rest_framework import permissions

'''
Serializer -> Sets up what you see
ViewSets -> Sets up how it behaves
'''

'''
Start Recipe 
'''


class RecipeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = (permissions.IsAuthenticated,)


'''
End Recipe
'''

'''
Start Ingredient 
'''


class IngredientsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ingredients
        fields = '__all__'


class IngredientsViewSet(viewsets.ModelViewSet):
    queryset = Ingredients.objects.all()
    serializer_class = IngredientsSerializer


'''
End Ingredients
'''

'''
NutritionInfo
'''


class NutritionInfoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = NutritionInfo
        fields = '__all__'


class NutritionInfoViewSet(viewsets.ModelViewSet):
    queryset = NutritionInfo.objects.all()
    serializer_class = NutritionInfoSerializer


'''
End NutritionalInfo
'''

'''
Start Token
'''


class TokenSerializer(serializers.Serializer):
    token = serializers.CharField(max_length=255)


'''
End Token
'''

'''
Start User
'''


class UserSerializer(serializers.Serializer):
    class Meta:
        model = NutritionInfo
        fields = '__all__'


'''
End User
'''
