const express = require("express");
const router = express.Router();
const { verifyToken } = require("../validation/verifyToken");
const {
  getWishlist,
  addItemToWishlist,
  deleteItemFromWishlist,
  
} = require("../controllers/wishlist.controller");

router.get("/", verifyToken, getWishlist);
router.post("/add", verifyToken, addItemToWishlist);
router.post("/delete", verifyToken, deleteItemFromWishlist);
module.exports = router;
