const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"gaza_top"
})


connection.connect((err)=>{
    if(err){
        console.log("\x1b[31m%s\x1b[0m","Error Connect Db sql ):\n", err);
        return;
    }
    console.log("\x1b[32m%s\x1b[0m","\n-- Connected With db sql done :)");
})

const app = express();

app.use(express.urlencoded());
app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("This Api For Gaza-Top");
})

app.post('/signup',(req,res)=>{
    const {user,name,pass} = req.body;
    res.json({
        user:user,
        name:name,
        pass:pass,
    })
})


let data = []

app.post("/api/creat_post",  (req,res)=>{
    const id = 0;
    const title = req.body;
    console.log(title);

    connection.query(`INSERT INTO users (id,name,pass,number,activ,activation) VALUES (?,?,?,?,?,?)`,id,title.title,'','','','')
    data.push(title);
    res.send(title);
})






app.get("/api/posts",(req,res)=>{
    res.send(data);
})


app.listen(5000,()=>{
    console.log("\x1b[32m%s\x1b[0m","Lisetining on Port 5000");
})
