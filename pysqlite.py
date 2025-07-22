import sqlite3
conn=sqlite3.connect('ecomm.db')
cursor=conn.cursor()
cursor.execute(''' create table if not exists customer(
    uid integer primary key autoincrement,
    Name text not null,
    email not null,
    password not null
)             
''')
cursor.execute(''' create table if not exists orders(
    oid integer primary key autoincrement,
    cid integer,
    amount integer not null,
    date date not null,
    password not null
)
''')
cursor.execute(''' create table if not exists product(
    pid integer primary key autoincrement,
    name text,
    price integer not null,
    desc text not null,
    password not null
)
''')
cursor.execute(''' create table if not exists payment(
    pid integer primary key autoincrement,
    type text,
    amount integer not null
    
)
''')
cursor.execute(''' create table if not exists category(
    
    cid integer primary key autoincrement,
    name text not null,
    picture varchar not null,
    desc text not null
)
''')
cursor.execute(''' create table if not exists cart(
    uid integer not null,
    cid integer primary key not null
    
)
''')

conn.commit()
conn.close()