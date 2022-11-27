const express = require("express")

const myApp = express();

const PORT  = 3000

// get method with out params
myApp.get("/user",(req,res,next)=>{

    let user = {name : "satheesh", tech : "api"}
    res.send(user)
})

// get method with param
myApp.get("/user/:id",(req,res,next)=>{

    let _id = req.params.id

    let user_list = [
            {id : 1, name : "satheesh", tech : "api"},
            {id : 2, name : "mahesh", tech : "kotlin"},
            {id : 1, name : "suresh", tech : "java"}
    ]

    user_list = user_list.filter(x=>x.id==_id)
    res.send(user_list)
})

myApp.listen(PORT,()=>{
    console.log("SERVER RUNNING ON : "+PORT)
})