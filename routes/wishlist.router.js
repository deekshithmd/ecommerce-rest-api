const express = require("express");
const router = express.Router();
const {
  addWishlist,
  deleteWishlist,
} = require("../controllers/wishlist.controller");

router.post("/add", addWishlist);
router.post("/delete", deleteWishlist);
module.exports = router;
