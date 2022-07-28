const express = require("express");
const router = express.Router();
const { getUserData, signupUser } = require("../controllers/user.controller");

router.get("/", getUserData);
router.post("/", signupUser);

module.exports = router;
