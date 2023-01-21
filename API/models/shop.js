const mongoose = require("mongoose");

const ShopSchema = mongoose.Schema({
  owner: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
});
