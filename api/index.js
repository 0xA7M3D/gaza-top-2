const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");
const multer = require("multer");
const {Server} = require("socket.io");
const {createServer} = require("http");
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"gaza_top"
})


// Headers

const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
  
}));
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  },
  allowEIO3: true
});



// connect with db sql
connection.connect((err)=>{
    if(err){
        console.log("\x1b[31m%s\x1b[0m","Error Connect Db sql ):\n", err);
        return;
    }
    console.log("\x1b[32m%s\x1b[0m","\n-- Connected With db sql done :)");
})




app.get("/",(req,res)=>{
    res.send("This Api For Gaza-Top");

})


// Creat Acount
app.post('/signup', async (req,res)=>{
    const bio = "Hello World i'm new here (:";
    const active = false;
    const ban = false;
    const random = Math.floor(Math.random() * 10) +1;
    const pathImage = random+".png";
    const {user,name,pass} = req.body;
    const hashPass = await bcrypt.hash(pass,10);

    if(!user | !name | !pass){
        res.json({
            error:true,
            msg:"Why inputs Empt!  O_- "
        })
        return;
    }

    if(pass.length <= 4){
        res.json({
            error:true,
            msg:"Password is very week  -_- "
        })
        return;
    }
    
    // search user found or not and creat user
    connection.query("SELECT * FROM users WHERE user=?",[user],(err,result)=>{
        console.log(result.length);
        if(err){
            res.json({
                error:true,
                msg:"Error in Database"
            })
            return;
        }

        if(result.length >= 1){
            res.json({
                error:true,
                msg:"This user Already founded :)"
            })
            return;
        }
        // JWT
        const token = jwt.sign(
            {
                id: result.insertId,
                user: user
            },
            "SECRET_KEY",
            {
                expiresIn: "7d"
            }
        );

        const sql_str = "INSERT INTO users (auth,image,name,bio,user,pass,folowers,folowing,active,ban) VALUES (?,?,?,?,?,?,?,?,?,?)";

        const values = [token,pathImage,name,bio,user,hashPass,0,0,active,ban];

        connection.query(sql_str, values, (err, result) => {

            if(err){
                res.json({
                    error:true,
                    msg:"Error Create Account :("
                });
                return;
            }


            

            res.cookie("auth",token, {maxAge:900000,path:"/"})
            res.json({
                error:false,
                msg:"Done Create Account :)"
            });




        });


    })
    
    
    
})
// Login
app.post("/login", async (req,res)=>{
    const {user,pass} = req.body;
    if(!user | !pass){
        res.json({
            error:true,
            msg:"Why inputs Empty!  O_- "
        })
        return;
    }

    connection.query("SELECT * FROM users WHERE user=?",[user], async (err,result)=>{
        if(err){
            res.json({
                error:true,
                msg:"Error in login! ): "
            })
            return;
        }
        if(result.length ===0){
            res.json({
                error:true,
                msg:"User not found! ): "
            })
            return;
        }
        const token = result[0].auth;
        const passHash = result[0].pass;
        const checkPass = await bcrypt.compare(pass,passHash)
        if(!checkPass){ 
            res.json({
                error:true,
                msg:"Error Password! ):"
            })
            return;
        }

        res.cookie("auth",token,{maxAge:9000000000})

        console.log("\nLogin Done (: \n passHash: ",passHash,"\n");
        res.json({
            error:false,
            msg:"Done login ;)"
        })

    })
})


// Get My Acount
app.get("/my_acount",(req,res)=>{
    const auth = req.cookies.auth;
    connection.query("SELECT * FROM users WHERE auth=?",[auth],(err,result)=>{
        if(err){
            res.json({
                error:true,
                msg:"This Acount is not found Or Error in Get user acount!"
            })
            return;
        }
        res.json(result)
    })
})
// Get All Acounts
app.get("/acounts",(req,res)=>{

    connection.query("SELECT * FROM users",(err,result)=>{
        if(err){
            res.json({
                error:true,
                msg:"Error Get users"
            })
            return;
        }
        res.json(result)
    })
})

// Get Acount
app.get("/acounts/:id",(req,res)=>{
    const id = req.params.id
    connection.query("SELECT * FROM users WHERE id=?",[id],(err,result)=>{
        if(err){
            res.json({
                error:true,
                msg:"Error Get user"
            })
            return;
        }
        res.json(result)
    })
})







// folder save images
app.use("/uploads", express.static("uploads"));




// upload image
const storage = multer.diskStorage({

    destination:(req,file,cb)=>{
        cb(null,"uploads/");
    },

    filename:(req,file,cb)=>{

        cb(
            null,
            Date.now() + "-" + file.originalname
        );

    }

});

const upload = multer({ storage });


// Creat post
app.post("/posts", upload.single("file"), (req,res)=>{

    const user_token = req.cookies.auth;
    const title = req.body.title;
    const image = req.file?.filename || "null";
    console.log(image);
    const date = new Date().toLocaleDateString("en-US");

    const sql_str = "INSERT INTO posts (user_token,text,image,likes_count,share_count,comments_count,created_at) VALUES(?,?,?,?,?,?,?)"
    const values = [user_token,title,image,0,0,0,date];
    connection.query(sql_str,values,(err,result)=>{
        if(err){
            res.json({
                error:true,
                msg:"Error in created post :(",
                content_error:err
            })
            return;
        }

        res.json({
            error:false,
            msg:"Done Created Post :)"
        })
    })
    // res.json({
    //     token:user_token,
    //     title:title,
    //     image:image
    // });

});






app.get("/posts",(req,res)=>{
    connection.query("SELECT * FROM posts ORDER BY id DESC",(err,result)=>{
        if(err){
            res.status(400).json({
                error:true,
                msg:"Error in Get posts",
                content_error:err
            })
            return;
        }
        res.json(result)
    })
})
app.get("/mylikes/:id",(req,res)=>{
    const idUser = req.params.id;
    connection.query("SELECT * FROM likes WHERE idUser=?",[idUser],(err,result)=>{
        if(err){
            res.status(400).json({
                error:true,
                msg:"Error in Get your likes posts",
                content_error:err
            })
            return;
        }
        res.json(result)
    })
})
app.get("/likes/:idPost",(req,res)=>{
    const idPost = req.params.idPost;
    connection.query("SELECT COUNT(*) FROM likes WHERE idPost=?",[idPost],(err,result)=>{
        if(err){
            res.status(400).json({
                error:true,
                msg:"Error in Get likes count post",
                content_error:err
            })
            return;
        }
        console.log(result);
        res.json(result)
    })
})


app.post("/like_post",(req,res)=>{
    const {idPost,idUser} = req.body;
    const que = "SELECT * FROM likes WHERE idPost=? AND idUser=?";
    connection.query(que,[idPost,idUser],(err,result)=>{

        if(result.length === 0){
    
            const que_ins =
            "INSERT INTO likes (idPost,idUser) VALUES (?,?)";
    
            connection.query(que_ins,[idPost,idUser],(err2,result2)=>{
    
                if(err2){
                    return res.status(400).json({
                        error:true
                    });
                }
    
                const update_sql =
                "UPDATE posts SET likes_count = likes_count + 1 WHERE id = ?";
    
                connection.query(update_sql,[idPost],(err3)=>{
    
                    if(err3){
                        return res.status(400).json({
                            error:true
                        });
                    }
    
                    return res.status(200).json({
                        error:false,
                        like:true
                    });
    
                });
    
            });
    
        }else{
    
            const que_del =
            "DELETE FROM likes WHERE idUser=? AND idPost=?";
    
            connection.query(que_del,[idUser,idPost],(err2)=>{
    
                if(err2){
                    return res.status(400).json({
                        error:true
                    });
                }
    
                const update_sql =
                "UPDATE posts SET likes_count = likes_count - 1 WHERE id = ?";
    
                connection.query(update_sql,[idPost],(err3)=>{
    
                    if(err3){
                        return res.status(400).json({
                            error:true
                        });
                    }
    
                    return res.status(200).json({
                        error:false,
                        like:false
                    });
    
                });
    
            });
    
        }
    
    });

})


app.post('/comments',(req,res)=>{
    const {idPost,idUser,comment} = req.body;
    const sql = "INSERT INTO comments (idPost,idUser,comment) VALUES (?,?,?)";

    connection.query(sql,[idPost,idUser,comment],(err,result)=>{
        if(err){
            res.status(400).json({
                error:true,
                msg:"Error creat comment",
                content_error:err
            })
            return;
        }

        res.status(200).json({
            error:false,
            msg:"Done Send Comment ;)",
        })
 
    })
})

app.get("/comments/:idPost",(req,res)=>{
    const idPost = req.params.idPost;

    const sql = "SELECT * FROM comments WHERE idPost=? ORDER BY id DESC LIMIT 5 ";
    connection.query(sql,[idPost],(err,result)=>{
        if(err){
            res.status(400).json({
                error:true,
                msg:"Error Get comments!",
                content_error:err
            })
            return;
        }

        res.status(200).json(result);
    })
})



// search about acount with user account
app.get("/acount/:user",(req,res)=>{
    const user = req.params.user ;
    const sql_search = "SELECT * from users WHERE user=?";
    connection.query(sql_search,[user],(err,result)=>{
        if(err){
            res.status(400).json({
                error:true,
                msg:"Error get user account",
                content_error:err
            })
            return;
        }

        if(result.length === 0){
            res.status(302).json({
                error:true,
                msg:"user account not found !",
            })
            return;
        }

        res.status(200).json(result);
    })
})



// send message

app.post("/msg",(req,res)=>{
    const {idMe,idUser,msg} = req.body;
    const date = new Date();
    const now = date.toLocaleDateString()
    const sql_msg = "INSERT INTO chat (user_id,my_id,msg,band,created_in) VALUES (?,?,?,?,?)";
    connection.query(sql_msg,[idUser,idMe,msg,'',now],(err,result)=>{
        if(err){
            res.status(400).json({
                error:true,
                msg:"Error send message",
                content_error:err
            })
            return;
        }

        res.status(200).json({
            error:false,
            msg:"Done Send Message",
        })
    })
})

// Get messages

app.get("/msg/:idUser/:idMe",(req,res)=>{
    const {idUser,idMe} = req.params;
    const sqlMsg = 
        "SELECT * FROM chat WHERE user_id=? AND my_id=? OR user_id=? AND my_id=?";

    connection.query(sqlMsg,[idUser,idMe,idMe,idUser],(err,result)=>{
        if(err){
            res.status(400).json({
                error:true,
                msg:"Error Get Messages",
                content_error:err
            })
            return;
        }

        res.json(result);
    })

})





// ======= Start socket io =======

io.on("connection",(socket)=>{
    console.log(socket.id);

    socket.on("join_room",(room)=>{
        socket.join(room)
    })

    socket.on("msgRoom",(msg)=>{
        const date = new Date();
        io.to(msg.room).emit("msgs_room",
            {
                my_id:msg.idSender,
                user_id:msg.idReceive,
                msg:msg.msg,
                created_in:date.toLocaleDateString()
            }
        )

        console.log("The Message is :\n",msg);
    })
    
})










httpServer.listen(5000, () => {
    console.log("\x1b[32m%s\x1b[0m","Lisetining on Port 5000");
    // console.log("SERVER IS RUNNING ON PORT 5001");
  });

// app.listen(5000,()=>{
//     console.log("\x1b[32m%s\x1b[0m","Lisetining on Port 5000");
// })
