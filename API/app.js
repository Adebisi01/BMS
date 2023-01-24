require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const shopRouter = require("./routes/shop");

const connectDB = require("./db/connect");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", authRouter);
app.use("/api/product", productRouter);
app.use("/api/shop", shopRouter);

const port = process.env.PORT || 8000;
const start = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(port, () => console.log(`Server listening on port ${port}`));
};
start();
