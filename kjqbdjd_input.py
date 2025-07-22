import sqlite3
conn=sqlite3.connect('mydata.db')
cursor=conn.cursor()
no=int(input("Enter the no. of insertions:"))
for i in range(no):
    naming=str(input("Enter name:"))
    age=int(input("Enter age:"))
    cursor.execute("INSERT INTO users(name,age) VALUES (?,?)",(naming,age))
conn.commit()
conn.close()