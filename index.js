const express=require('express');
const app=express();
const mysql=require('mysql2');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Ajay@2529',
    database:'testDB'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`Connection has been created`);
    const creationQuery=`create table Students(
    id int AUTO_INCREMENT primary key,
    name varchar(20),
    email varchar(20)
    )`
    connection.execute(creationQuery,(err)=>{
        if(err){
            console.log(err)
            connection.end()
            return;
        }
        console.log(`table is created`)
    })
})

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.listen(3000,(err)=>{
    console.log('Server is running');
})