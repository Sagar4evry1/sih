"""converter URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Import the include() function: from django.conf.urls import url, include
    3. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.index,name='index'),
    url(r'^contact/$' , views.Contacts , name='contacts' ),
     url(r'^history/$' , views.history , name='history' ),
     url(r'^weight/$' , views.weight , name='weight' ),
     url(r'^time/$' , views.time , name='time' ),
     url(r'^length/$' , views.length , name='length' ),
     url(r'^unani/$' , views.unani , name='unani' ),
     url(r'^ayuroption/$' , views.ayuroption , name='ayuroption' ),
     url(r'^siddhaoption/$' , views.siddhaoption , name='siddhaoption' ),
     url(r'^siddhaweight/$' , views.siddhaweight , name='siddhaweight' ),
     url(r'^siddhalength/$' , views.siddhalength , name='siddhalength' ),
     url(r'^ayurlength/$' , views.ayurlength , name='ayurlength' ),
      url(r'^ayurweight/$' , views.ayurweight , name='ayurweight' ),
     url(r'^ayurtime/$' , views.ayurtime , name='ayurtime' ),
     url(r'^siddhatime/$' , views.siddhatime , name='siddhatime' ),
      url(r'^sloka/$' , views.sloka , name='sloka' ),
       url(r'^hindi/$' , views.hindi , name='hindi' ),

    ]
