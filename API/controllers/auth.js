const authController = (req, res) => {
  res.status(200).json({ msg: "It works" });
};

module.exports = { authController };
