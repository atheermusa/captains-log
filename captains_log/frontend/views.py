from django.shortcuts import render, redirect
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse, HttpResponseNotFound
import io
from django.http import FileResponse
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter, landscape
from reportlab.lib.pagesizes import A4
import textwrap



# Create your views here.
def index(request):
    return render(request, 'frontend/index.html')

def pdf_view(request, content):

    # Create a file-like buffer to receive PDF data.
    buffer = io.BytesIO()

    # Create the PDF object, using the buffer as its "file."
    p = canvas.Canvas(buffer, pagesize=A4)
    date = content[0:10]
    result = 'Result: ' + content[-4:-1] + content[-1]
    score = 'Score: ' + content[-7:-4]
    message = content[10:-7]
    x_pos = 300
    y_pos = 740
    y_offset = 20

    print(len(message))

    wraps = textwrap.wrap(message, 80)
    print(wraps)
    print(range(len(wraps)))
    for x in range(len(wraps)):
        p.drawCentredString(x_pos, y_pos, wraps[x])
        y_pos -= y_offset
    # y_pos += y_offset  # add back offset after last wrapped line
    # else:
    #     canvas.drawCentredString(x_pos, y_pos, message)
    # return y_pos
    
    p.drawString(40, 790, date)
    p.drawString(450, 790, result)
    p.drawString(240, 790, score)
    # p.drawCentredString(50, 600, message)

    # Close the PDF object cleanly, and we're done.
    p.showPage()
    p.save()

    # FileResponse sets the Content-Disposition header so that browsers
    # present the option to save the file.
    buffer.seek(0)
    return FileResponse(buffer, as_attachment=True, filename='filename.pdf')
