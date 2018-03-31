from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse,HttpResponseRedirect
from .forms import ContactForm



def index(request):
	return render(request,'home/index.html')

def history(request):
    return render(request,'home/history.html')

def weight(request):
    return render(request,'home/weight.html')

def time(request):
    return render(request,'home/time.html')

def length(request):
    return render(request,'home/length.html')

def unani(request):
    return render(request,'home/unani.html')

def ayuroption(request):
    return render(request,'home/ayuroption.html')

def siddhaoption(request):
    return render(request,'home/siddhaoption.html')

def siddhaweight(request):
    return render(request,'home/siddhaweight.html')

def siddhalength(request):
    return render(request,'home/siddhalength.html')

def ayurlength(request):
    return render(request,'home/ayurlength.html')

def siddhatime(request):
    return render(request,'home/siddhatime.html')

def ayurtime(request):
    return render(request,'home/ayurtime.html')

def ayurweight(request):
    return render(request,'home/ayurweight.html')

def sloka(request):
    return render(request,'home/shlok.html')

def hindi(request):
    return render(request,'home/siddha.html')

def Contacts(request):
    if request.method=='POST':
        f=ContactForm(request.POST)
        if f.is_valid():

            subject = f.cleaned_data['subject']
            message = f.cleaned_data['message']
            mobile  = f.cleaned_data['mobile']
            sender = f.cleaned_data['sender']
            message=str(message)
            mobile=str(mobile)
            name = request.POST['name']
            message+=' Sender Email id is ' + sender + ' Sender mobile number is '+mobile +' Sender name is ' +name 
            
            recipients = ['sagar.er19@gmail.com']
            send_mail(subject, message, sender, recipients,fail_silently=False)

            subject='Thanks for contacting us'
            message='Our Experts will reply you shortly'
            recipients=[sender]
            send_mail(subject,message,sender,recipients,fail_silently=False)
        return  HttpResponseRedirect('/home/')
    else:
        f=ContactForm()
        return render(request,'home/contacts.html',{'form':f})




 

