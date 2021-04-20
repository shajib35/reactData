const express=require("express");
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express();
const mysql=require('mysql');

const db=mysql.createPool({
host:'localhost',
user:'root',
password:'',
database:'login',
})
app.use(cors());
app.use(express.json())


app.use(bodyParser.urlencoded({extended:true}))

app.post('/register', (req, res) => {
    
    const username=req.body.username
    const password=req.body.password
    
    const sqlInsert="INSERT INTO users (username, password) VALUES (?,?)";
    db.query(sqlInsert,[username,password], (err,result)=>{
        
        console.log(err);
    }
    );
   
});

app.post('/login',(req,res)=>{
      
    const username=req.body.username
    const password=req.body.password

db.query(
    "SELECT *FROM users WHERE username=? and password=?",
    [username,password],
    (err,result)=>{
        if(err){
            res.send({err:err});
        }
        if(result.length>0){
            res.send(result);
        }else{
            res.send({message:"wrong username or password"});
        }
    }
);


});

app.listen(3001, ()=>{
    console.log("running on port 3001");
});