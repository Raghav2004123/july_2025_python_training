from flask import Flask, request, jsonify, render_template
from flask_mysqldb import MySQL

app = Flask(__name__)

# MySQL configurations
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'roottoor'
app.config['MYSQL_DB'] = 'raghav_cse'
mysql = MySQL(app)

@app.route('/')
def hello_world():
    return 'HELLLLOOOOO  BROOOOO'

@app.route('/myname/<name>')
def hello_world1(name):
    return jsonify({"message": "Hello", "name": name})

@app.route('/user')
def users():
    cursor = mysql.connection.cursor()
    sql=("INSERT INTO user (name, email, password) VALUES (%s,%s,%s)")
    nam=input("Enter name")
    emm=input("Enter email")
    passs=input("Enter password")
    val=(nam,emm,passs)
    cursor.execute(sql,val)
    mysql.connection.commit()
    cursor.close()
    return 'done!!'
@app.route('/form',methods=['get','post'])
def form():
    print(request.method)
    if request.method=='GET':
                return render_template('form.html')
    else:
            name=request.form.get('name')
            email=request.form.get('email')
            password=request.form.get('password')
            cursor = mysql.connection.cursor()
            cursor.execute("INSERT INTO user (name, email, password) VALUES (%s,%s,%s)",[name,email,password])
            mysql.connection.commit()
            cursor.close()
            return render_template('success.html')

if __name__ == '__main__':
    app.run()
