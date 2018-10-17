from django.db import models
from django.contrib.auth.models import User

from uuid import uuid4

# Create your models here.

class Recipe(models.Model):
    RecipeID = models.UUIDField(
        primary_key=True, default=uuid4, editable=False)
    CookTime = models.DurationField()
    CookingMethod = models.CharField(max_length=50)
    Nutrition = models.ForeignKey('NutritionInfo', on_delete=models.CASCADE)
    Allergies = models.BooleanField()
    RecipeCategory = models.CharField(max_length=50)
    RecipeCuisine = models.CharField(max_length=50)
    RecipeIngredient = models.ForeignKey(
        'Ingredients', on_delete=models.CASCADE)
    RecipeInstructions = models.TextField()
    RecipeYield = models.IntegerField()
    SuitableForDiet = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'Recipe'
        verbose_name_plural = 'recipe'

class NutritionInfo(models.Model):
    Calories = models.IntegerField()
    CarbohydrateContent = models.IntegerField()
    CholesterolContent = models.IntegerField()
    FatContent = models.IntegerField()
    FiberContent = models.IntegerField()
    ProteinContent = models.IntegerField()
    SaturatedFatContent = models.IntegerField()
    SodiumContent = models.IntegerField()
    SugarContent = models.IntegerField()
    TransFatContent = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'NutritionInfo'
        verbose_name_plural = 'nutritionInfo'

class Ingredients(models.Model):
    Quantity = models.IntegerField()
    Measurement = models.CharField(max_length=25)
    Ingredient = models.CharField(max_length=25)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'Ingredients'
        verbose_name_plural = 'ingredients'

class UserRecipe(Recipe):
    User = models.ForeignKey(User, on_delete=models.CASCADE)

# editable when we discuss how the user accounts will look. For now it gives recipe's for each user

