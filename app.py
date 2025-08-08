from flask import Flask,request,jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='roottoor'
app.config['MYSQL_DB']='blood_db'

mysql=MySQL(app)

@app.route('/home', methods=['POST','GET'])
def home():
    return jsonify({"message":"hello"})

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    name = data.get('name')
    usn = data.get('usn')
    

    cur = mysql.connection.cursor()
    cur.execute('''
        INSERT INTO blood_bank (name, usn)
        VALUES (%s, %s)
    ''', (name,usn))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'Registration successful'})


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    name = data.get('name')
    password = data.get('usn')

    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM blood_bank WHERE name=%s AND usn=%s', (name,password))
    user = cur.fetchall()
    cur.close()
    if user:
        return jsonify({'message':'login successful'})
    else:
        return jsonify({'message':'Incorrect creditionals'})


@app.route('/profile_update', methods=['POST'])
def profile_update():
    data = request.json
    role = data.get('role')
    dob = data.get('dob')
    gender= data.get('gender')
    blood_group = data.get('blood_group')
    location = data.get('location')
    contact = data.get('contact')
    usn = data.get('usn')

    cur = mysql.connection.cursor()
    cur.execute('update blood_bank set role = %s, dob = %s,gender = %s,blood_group = %s,location = %s,contact = %s where usn = %s', (role,dob,gender,blood_group,location,contact,usn))
    print("Updating user:", usn, role, dob, gender, blood_group, location, contact)
    mysql.connection.commit()
    cur.close()
    return jsonify({'message':'update successful'})

@app.route('/get_donor', methods=['POST'])
def get_donor():
    data = request.json


    blood_group = data.get('blood_group')
    cur = mysql.connection.cursor()
    cur.execute("select * from blood_bank  where role = 'donor ' and blood_group = %s", (blood_group,))
    print("ii")
    results = cur.fetchall()
    mysql.connection.commit()
    cur.close()
    print("Donor results:", results)
    return jsonify(results)

@app.route('/get_donordetails', methods=['POST'])
def get_donordetails():
    data = request.json


    name = data.get('name')
    cur = mysql.connection.cursor()
    cur.execute("select * from blood_bank  where name = %s", (name,))
    print("ii")
    results = cur.fetchone()
    mysql.connection.commit()
    cur.close()
    print("Donor results:", results)
    return jsonify(results)


@app.route('/delete_profile', methods=['POST'])
def get_profile():
    data = request.json


    usn = data.get('usn')

    cur = mysql.connection.cursor()
    cur.execute("delete from blood_bank  where usn = %s", (usn,))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message':'update successful'})

@app.route('/toggle_profile', methods=['POST'])
def get_toggle():
    data = request.json
    usn = data.get('usn')
    cur = mysql.connection.cursor()
    cur.execute("update blood_bank set role = NULL where usn = %s", (usn,))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message':'update successful'})

@app.route('/set_donor', methods=['POST'])
def set_donor():
    data = request.json
    usn = data.get('usn')
    cur = mysql.connection.cursor()
    cur.execute("update blood_bank set role = 'donor' where usn = %s", (usn,))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message':'update successful'})

if __name__=="__main__":
    app.run(debug=True)