const express = require("express")

const myApp = express();

const PORT  = 3000

myApp.listen(PORT,()=>{
    console.log("SERVER RUNNING ON : "+PORT);
})