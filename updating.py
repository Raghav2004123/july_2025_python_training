import sqlite3
conn=sqlite3.connect('mydata.db')
cursor=conn.cursor()
cursor.execute("UPDATE USERS set name='Travis' where name='Son'")
conn.commit()
conn.close()