const express = require("express");
const router = express.Router();
const { addCart, deleteCart } = require("../controllers/cart.controller");

router.post("/add", addCart);
router.post("/delete", deleteCart);

module.exports = router;
