from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
    pagetitle = "Un resumen"
    return render_template('index.html', mytitle=pagetitle, mycontent="Hello World")

if __name__ == "__main__":
    app.run(debug=False)