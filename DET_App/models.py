from django.db import models
from django.contrib.auth.models import User

from uuid import uuid4

# Create your models here.


class User(models.Model):
    UserID = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    UserEmail = models.CharField(max_length=256, unique=True, blank=False)
    Username   = models.CharField(max_length=50, blank=False)
    UserFirstName = models.CharField(max_length=50, blank=True)
    UserLastName = models.CharField(max_length=50, blank=True)
    UserPW = models.CharField(max_length=256, blank=False)
    CustomerID = models.CharField(max_length=256, blank=True)
    Subscription = models.CharField(max_length=256, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'User'
        verbose_name_plural = 'user'


class Recipe(models.Model):
    RecipeID = models.UUIDField(
        primary_key=True, default=uuid4, editable=False)
    CookTime = models.CharField(max_length=50)
    CookingMethod = models.CharField(max_length=50)
    # Nutrition = models.CharField(max_length=100)
    RecipeTitle = models.CharField(max_length=50, blank=True)
    RecipeCategory = models.CharField(max_length=50)
    RecipeCuisine = models.CharField(max_length=50)
    # RecipeIngredients = models.ForeignKey(
    #     'Ingredients', on_delete=models.CASCADE)
    RecipeIngredients = models.CharField(max_length=100)
    RecipeInstructions = models.TextField()
    RecipeYield = models.IntegerField()
    SuitableForDiet = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'Recipe'
        verbose_name_plural = 'recipes'


# class RecipeIngredients_id(models.Model):
#     Recipe_id = models.ForeignKey('Recipe', on_delete=models.CASCADE)
#     Ingredients_id = models.ForeignKey('Ingredient', on_delete=models.CASCADE)

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
    IngredientID: models.UUIDField(
        primary_key=True, default=uuid4, editable=False)
    Quantity = models.IntegerField()
    Measurement = models.CharField(max_length=25)
    Item = models.CharField(max_length=25)
    NutritionInfo = models.ForeignKey(
        'NutritionInfo', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'Ingredients'
        verbose_name_plural = 'ingredients'

# editable when we discuss how the user accounts will look. For now it gives recipe's for each user
