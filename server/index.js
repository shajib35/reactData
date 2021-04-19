const express=require("express");
const app=express();
const mysql=require('mysql');

const db=mysql.createPool({
host:'localhost',
user:'root',
password:'',
database:'shajibD',
})


app.get("/", (req, res) => {

    
    const sqlInsert="INSERT INTO shajibD (movieName, movieRreview) VALUES ('INCEPTION','GOOD MOVIE');"
    db.query(sqlInsert, (err,result)=>{
        res.send("hello shajib");
    })
   
});

app.listen(3001, ()=>{
    console.log("running on port 3001");
});