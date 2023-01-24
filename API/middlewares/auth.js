require("dotenv").config();
const jwt = require("jsonwebtoken");

const refreshToken = (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token provided" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const [err, decoded] = jwt.verify(token, process.env.JWT_SECRET);
    if (err && err.message === "jwt expired") {
      return res.status(401).json({ msg: "Token Expired" });
    } else {
      let newToken = jwt.sign(decoded, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      req.newToken = newToken;
      next();
    }
  } catch (error) {}
};
