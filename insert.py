import sqlite3
conn=sqlite3.connect('mydata.db')
cursor=conn.cursor()
cursor.execute("INSERT INTO users(name,age) VALUES (?,?)",("alice",22))
cursor.execute("INSERT INTO users(name,age) VALUES (?,?)",("BOB",29))
conn.commit()
conn.close()