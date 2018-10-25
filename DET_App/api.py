from rest_framework import serializers, viewsets
from .models import Recipe, Ingredients, NutritionInfo, User

class RecipeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'
        
class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    
## end Recipe ##

class IngredientsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ingredients
        fields = '__all__'
        
class IngredientsViewSet(viewsets.ModelViewSet):
    queryset = Ingredients.objects.all()
    serializer_class = IngredientsSerializer
    
## end Ingredients ##

class NutritionInfoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = NutritionInfo
        fields = '__all__'
        
class NutritionInfoViewSet(viewsets.ModelViewSet):
    queryset = NutritionInfo.objects.all()
    serializer_class = NutritionInfoSerializer

## end NutritionalInfo ##

## end UserRecipes ##