const express = require('express')
const app = express()
const mongoose= require('mongoose')
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;
const Product= require('./models/product.model.js')

app.use(express.json())





app.listen(3004,()=>{
    console.log("Server is running on http://localhost:3004")
})

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/api/products',async(req, res) =>{
    try {
        const products= await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
} )

//find one product
app.get('/api/products/:id',async(req, res) =>{
    try {
        const {id}= req.params
        const product= await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
} )

app.post('/api/products',async(req,res) =>{
    try {
      const product=  await Product.create(req.body)
      res.status(200).json(product)


        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
        
    }
} )

mongoose.connect(mongoURI)
  .then(() => {
    
    console.log('Connected to database !')})

  .catch(() => {
    console.log("Error connecting to database")
   })