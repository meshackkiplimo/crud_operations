const express = require('express')
const app = express()
const mongoose= require('mongoose')
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;





app.listen(3004,()=>{
    console.log("Server is running on http://localhost:3004")
})

app.get('/',(req,res)=>{
    res.send("Hello World")
})

mongoose.connect(mongoURI)
  .then(() => {
    
    console.log('Connected to database !')})

  .catch(() => {
    console.log("Error connecting to database")
   })