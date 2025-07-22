import sqlite3
conn=sqlite3.connect('ecomm.db')
cursor=conn.cursor()
cursor.execute("Select * from customer")
rows=cursor.fetchall()
for row in rows:
    print(row)
conn.close()