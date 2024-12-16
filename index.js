const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = process.env.MONGODB_URI;
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.listen(3004, () => {
  console.log("Server is running on http://localhost:3004");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to database !");
  })

  .catch(() => {
    console.log("Error connecting to database");
  });
