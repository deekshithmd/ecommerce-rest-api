const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json("Access deneid");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("decoded",decoded)
    req.user = decoded;
    next();
  } catch (error) {
    res.status(409).json({ message: "Invalid token" });
  }
};

module.exports = { verifyToken };
