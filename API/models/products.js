const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide product name"],
    maxlength: [100, "Name can not be more than 100 characters"],
    lowercase: true,
  },
  price: {
    type: Number,
    required: [true, "Please provide preduct price"],
    default: 0,
  },
  description: {
    type: String,
    required: [true, "Please provide product description"],
    maxlength: [1000, "Description cannot be more than 1000 characters"],
    lowercase: true,
  },
  image: {
    type: String,
    default: "/uploads/example.jpeg",
  },
  category: {
    type: String,
    required: [true, "Please provide product category"],
    enum: ["office", "kitchen", "bedroom"],
    lowercase: true,
  },
  shop: {
    type: String,
    required: [true, "Please provide a shop id"],
  },
});
module.exports = mongoose.model("Product", ProductSchema);
