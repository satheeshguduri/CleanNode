const express = require("express")

const myApp = express();


const PORT  = 3000

myApp.use(express.json())
// post method to show the data

myApp.post("/user",(req,res,next) =>{
   
    let _body = req.body


    let user_data = [
        {id:101, name : "satheesh", addr: "hyderabad"},
        {id:102, name : "mahesh", addr: "pune"},
        {id:103, name : "suresh", addr: "delhi"},
        {id:101, name : "satheesh", addr: "bangalore"},
        {id:102, name : "naresh", addr: "bombay"},

    ]

    user_data = user_data.filter(x=>x.id==_body.id & x.name == _body.name)
    res.send(user_data)

})


// adding put method to update

myApp.put("/user",(req,res,next)=>{

    let _body = req.body


    let user_data = [
        {id:101, name : "satheesh", addr: "hyderabad"},
        {id:102, name : "mahesh", addr: "pune"},
        {id:103, name : "suresh", addr: "delhi"},
        {id:101, name : "satheesh", addr: "bangalore"},
        {id:102, name : "naresh", addr: "bombay"},

    ]

    let index = user_data.findIndex(x=>x.id==_body.id)
    if(index!=-1){
        user_data[index] = _body
    }
    res.send(user_data)
})


myApp.listen(PORT,()=>{
    console.log("SERVER RUNNING ON : "+PORT)
})