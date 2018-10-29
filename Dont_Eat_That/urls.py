"""Dont_Eat_That URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework.authtoken import views
from django.views.decorators.csrf import csrf_exempt
from rest_framework_jwt.views import obtain_jwt_token
from django.views.generic import TemplateView


from rest_framework import routers
from DET_App.api import RecipeViewSet, IngredientsViewSet, NutritionInfoViewSet, TokenSerializer
from DET_App.views import LoginView, RegisterUsers

# Routers provide a way to set up URL conf.
# To add route, We register it here with the 'r' <- regex and we will not need to add them to urlpatterns
router = routers.DefaultRouter()
router.register(r'recipe', RecipeViewSet)
router.register(r'ingredients', IngredientsViewSet)
router.register(r'nutritionInfo', NutritionInfoViewSet)

'''
TODO: Routes will need to be edited to show the proper names for pages, but for now, it renders each schema
'''

admin.autodiscover()
'''
TODO: Debug... The Django backend may be rendering faster than the React app? 
'''
urlpatterns = [
    # ADMIN Routes
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('auth/login/', LoginView.as_view(), name="auth-login"),
    path('auth/register/', RegisterUsers.as_view(), name="auth-register"),
    re_path('.*', TemplateView.as_view(template_name='index.html')),

    # React URLs
    # add landingpage... One line
    # path('', RedirectView.as_view(url='', permanent=True)) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT),

    # React-Native URLs
    # path('', RedirectView.as_view(url='', permanent=True)) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT),
]

# Add Django site authentication urls (for login, logout, password management)
urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
