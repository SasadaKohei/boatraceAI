# app.py
from flask import Flask, render_template,request
from flask_cors import CORS
import functions.scraping as sc

app = Flask(__name__)
# app.config['JSON_AS_ASCII'] = False
CORS(app)  # CORS有効化

@app.route('/')
def index():
    value = getVenue()
    return render_template('index.html', message=value)

@app.route('/scraping', methods=['GET'])
def getVenue():
    value = sc.scraping()
    return value

@app.route('/main')
def main():
    value = getVenue()
    return render_template('main.html', message=value)

if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0', port=8080)