const express = require("express");
const router = express.Router();
const { verifyToken } = require("../validation/verifyToken");
const {
  getWishlist,
  addItemToWishlist,
  deleteItemFromWishlist,
} = require("../controllers/wishlist.controller");

router.get("/", verifyToken, getWishlist);
router.post("/add/:productId", verifyToken, addItemToWishlist);
router.delete("/delete/:productId", verifyToken, deleteItemFromWishlist);
module.exports = router;
