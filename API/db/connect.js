const mongoose = require("mongoose");

const connectDB = (uri) => {
  mongoose.connect(uri);
  mongoose.set("strictQuery", false);
};
module.exports = connectDB;
