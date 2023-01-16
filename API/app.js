const express = require("express");
const cors = require("cors");
const app = express();
const authRouter = require("./routes/auth");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRouter);

const port = process.env.PORT || 8000;
const start = () => {
  app.listen(port, () => console.log(`Server listening on port ${port}`));
};
start();
