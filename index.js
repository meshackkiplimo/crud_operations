const express = require('express')
const app = express()

app.listen(3004,()=>{
    console.log("Server is running on http://localhost:3004")
})

app.get('/',(req,res)=>{
    res.send("Hello World")
})