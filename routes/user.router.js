const express = require("express");
const router = express.Router();
const {
  getUserData,
  signupUser,
  loginUser,
} = require("../controllers/user.controller");

router.get("/", getUserData);
router.post("/signup", signupUser);
router.post("/login", loginUser);

module.exports = router;
