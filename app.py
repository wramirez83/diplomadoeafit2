from flask import Flask
from flask import render_template
from flask import url_for

app = Flask(__name__, template_folder="template")

@app.route("/")
def index():
    pagetitle = "Un resumen"
    return render_template("index.html", mytitle=pagetitle, mycontent="Hello World")

if __name__ == "__main__":
    app.run(debug=False)