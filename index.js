const express = require("express")

const myApp = express();

const PORT  = 3000

var user_routing = require("./controllers/usercontroller")

myApp.use(express.json())
// post method to show the data

myApp.use("/user",user_routing)

myApp.listen(PORT,()=>{
    console.log("SERVER RUNNING ON : "+PORT)
})