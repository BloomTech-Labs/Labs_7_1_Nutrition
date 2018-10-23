from django.shortcuts import render
from rest_framework import generics

from .models import Recipe
from .serializers import RecipeListSerializer

# Create your views here.

class RecipeListCreate(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeListSerializer
