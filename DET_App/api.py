from rest_framework import serializers, viewsets
from .models import Recipe, Ingredients, NutritionInfo, UserRecipe

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
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

## end NutritionalInfo ##

class UserRecipeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserRecipe
        fields = '__all__'
        
    def create(self, validated_data):
        user = self.context['request'].User
        Recipe = UserRecipe.objects.create(user=user, **validated_data)
        return Recipe
        
class UserRecipeViewSet(viewsets.ModelViewSet):
    queryset = UserRecipe.objects.none()
    serializer_class = UserRecipeSerializer
    def get_queryset(self):
        user = self.request.user
        
        if user.is_anonymous:
            return UserRecipe.objects.none()
        else:
            return UserRecipe.objects.filter(user=user)

## end UserRecipes ##