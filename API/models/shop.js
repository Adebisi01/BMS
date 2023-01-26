const mongoose = require("mongoose");

const ShopSchema = mongoose.Schema({
  owner: {
    type: String,
    required: [true, "Please provide a shop owner"],
  },
  name: {
    type: String,
    required: [true, "Please a shop name"],
    trim: true,
    lowercase: true,
  },
  category: {
    type: String,
    required: [true, "Please provide a shop category"],
    trim: true,
    lowercase: true,
  },
});
module.exports = mongoose.model("Shop", ShopSchema);
