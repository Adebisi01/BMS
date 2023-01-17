const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide product name"],
    maxlength: [100, "Name can not be more than 100 characters"],
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
  },
  image: {
    type: String,
    default: "/uploads/example.jpeg",
  },
  category: {
    type: String,
    required: [true, "Please provide product category"],
    enum: ["office", "kitchen", "bedroom"],
  },
  store: {
    type: String,
    required: [true, "Please provide a category"],
  },
});
module.exports = mongoose.model("Product", ProductSchema);
