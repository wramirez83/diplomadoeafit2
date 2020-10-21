from flask import Flask, render_template, url_for, Blueprint

app = Flask(__name__, template_folder='templates/', static_folder='static/')

@app.route('/')
def init():
    return render_template('presentacion.html')

@app.route('/hv')
def index():
    pagetitle = "Un resumen"
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)