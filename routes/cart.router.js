const express = require("express");
const router = express.Router();
const {
  addItemToCart,
  deleteItemFromCart,
  getCart,
  incrementCartQuantity,
  decrementCartQuantity,
} = require("../controllers/cart.controller");
const { verifyToken } = require("../validation/verifyToken");

router.get("/", verifyToken, getCart);
router.post("/add/:productId", verifyToken, addItemToCart);
router.delete("/delete/:productId", verifyToken, deleteItemFromCart);
router.post("/increment/:productId", verifyToken, incrementCartQuantity);
router.post("/decrement/:productId", verifyToken, decrementCartQuantity);

module.exports = router;
