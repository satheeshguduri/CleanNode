const express = require("express")

const router = express.Router();

router.get("/details",(req,res,next)=>{

    let user_data = [
        {id:101, name : "satheesh", addr: "hyderabad"},
        {id:102, name : "mahesh", addr: "pune"},
        {id:103, name : "suresh", addr: "delhi"},
        
    ]

    res.send(user_data)
})


  module.exports = router

