const express = require("express");
const router = express.Router();
const {
  addItemToCart,
  deleteItemFromCart,
  getCart,
} = require("../controllers/cart.controller");
const { verifyToken } = require("../validation/verifyToken");

router.get("/", verifyToken, getCart);
router.post("/add", verifyToken, addItemToCart);
router.post("/delete", verifyToken, deleteItemFromCart);

module.exports = router;
