const express = require("express")

const myApp = express();

const PORT  = 3000


myApp.get("/user",(req,res,next)=>{

    let user = {name : "satheesh", tech : "api"}
    res.send(user)
})


myApp.listen(PORT,()=>{
    console.log("SERVER RUNNING ON : "+PORT)
})