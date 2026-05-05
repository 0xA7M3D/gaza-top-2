const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let users= [
    {id:1,name:"ahmed"},
    {id:2,name:"ahmed"},
    {id:3,name:"ahmed"},
    {id:4,name:"ahmed"},
]

let data = []

app.post("/api/creat_post", async (req,res)=>{
    const title = await req.body;
    console.log(title);
    data.push(title);
    res.send(title);
})


app.get("/api/posts",(req,res)=>{
    res.send(data);
})


app.listen(5000,()=>{
    console.log("Connected.");
    
})
