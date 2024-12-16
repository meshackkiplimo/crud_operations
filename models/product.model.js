const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "product name is required"],
    },
    quantity: {
      type: Number,
      required: [true, "product quantity is required"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "product price is required"],
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },

  {
    timestamp: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
