from django.shortcuts import render


def home(request):
    return render(request, 'home/home.html')


def dashboard(request):
    return render(request, 'dashboard/dashboard.html')


def updates(request):
    return render(request, 'updates/updates.html')


def about(request):
    return render(request, 'about/about.html')
