from django.shortcuts import render, redirect
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse, HttpResponseNotFound
import io
from django.http import FileResponse
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter, landscape
from reportlab.lib.pagesizes import A4


# Create your views here.
def index(request):
    return render(request, 'frontend/index.html')

def pdf_view(request, content):

    # Create a file-like buffer to receive PDF data.
    buffer = io.BytesIO()

    # Create the PDF object, using the buffer as its "file."
    p = canvas.Canvas(buffer, pagesize=A4)
    date = content[0:10]
    result = content[-4:-1] + content[-1]
    score = content[-7:-4]
    message = content[10:-7]

    p.drawString(20, 800, date)
    p.drawString(400, 800, result)
    p.drawString(200, 800, score)

    # Close the PDF object cleanly, and we're done.
    p.showPage()
    p.save()

    # FileResponse sets the Content-Disposition header so that browsers
    # present the option to save the file.
    buffer.seek(0)
    return FileResponse(buffer, as_attachment=True, filename='filename.pdf')
