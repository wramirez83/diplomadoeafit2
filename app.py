import os
from flask import Flask, render_template, url_for

app = Flask(__name__, template_folder='templat')
app.root_path = os.path.dirname(os.path.abspath(__file__))

@app.route('/')
def init():
    return render_template('presentacion.html')

@app.route('/hv')
def index():
    #pagetitle = "Un resumen"
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=False)