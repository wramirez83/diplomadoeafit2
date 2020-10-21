from flask import Flask, render_template, url_for

app = Flask(__name__, template_folder='templates')

@app.route('/')
def init():
    return "jajajajja"

@app.route('/hv')
def index():
    pagetitle = "Un resumen"
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=False)