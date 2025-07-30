from flask import Flask,jsonify
app=Flask(__name__)
@app.route('/')
def hello_world():
    return 'HELLLLOOOOO  BROOOOO'
@app.route('/myname/<name>')
def hello_world1(name):
    return jsonify ({"message":"Hello","name": name})
if __name__=='__main__':
    app.run()