require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");

const connectDB = require("./db/connect");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);

const port = process.env.PORT || 8000;
const start = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(port, () => console.log(`Server listening on port ${port}`));
};
start();
