const express = require("express")
require("dotenv").config()
const PORT = process.env.PORT || 8500
const app = express()

app.get("/",(req,res)=>{
    res.send("hi from backend")
})

app.listen(PORT,()=>{
    console.log(`listening on the PORT ${PORT}`)
})