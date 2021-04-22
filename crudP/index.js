const express=require("express");
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express();
const mysql=require('mysql');

const db=mysql.createPool({
host:'localhost',
user:'root',
password:'',
database:'shajibD',
})
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/api/get",(req, res)=>{

    const sqlSelect="SELECT * FROM crud";
    db.query(sqlSelect, (err,result)=>{
        
        res.send(result);
    }
    );

});

app.post("/api/insert", (req, res) => {
    
    const movieName=req.body.movieName
    const movieReview=req.body.movieReview
    
    const sqlInsert="INSERT INTO crud (movieName,movieReview) VALUES (?,?)";
    db.query(sqlInsert,[movieName,movieReview], (err,result)=>{
        
        console.log(err);
    }
    );
   
});

app.delete("/api/delete/:movieName",(req,res)=>{
    const name=req.params.movieName;
    const sqlDelete="DELETE FROM crud WHERE movieName=?";

    db.query(sqlDelete,name,(err,result)=>{
      if(err) console.log(err);
    });
});


app.put("/api/update",(req,res)=>{
    const name=req.body.movieName;
    const review=req.body.movieReview;
    const sqlUpdate="UPDATE crud SET movieReview= ? WHERE movieName=?";

    db.query(sqlUpdate,[review,name],(err,result)=>{
      if(err) console.log(err);
    });
});



app.listen(3001, ()=>{
    console.log("running on port 3001");
});