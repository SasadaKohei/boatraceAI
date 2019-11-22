# app.py
from flask import Flask, render_template,request
import functions.scraping as sc

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

@app.route('/')
def index():
    return render_template('index.html', message="Hello index")

@app.route('/test', methods=['GET', 'POST'])
def test():
    if request.method == 'GET':
        res = request.args.get('get_value')
    elif request.method == 'POST':
        res = request.form['post_value']
    return res


@app.route('/scraping', methods=['GET'])
def scraping():
    value = sc.scraping()
    return value


@app.route('/main')
def main():
    return render_template('main.html')

if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0', port=8080)