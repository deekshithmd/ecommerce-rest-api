const express = require("express");
const router = express.Router();
const { verifyToken } = require("../validation/verifyToken");

const {
  getProducts,
  addProduct,
} = require("../controllers/product.controller");

router.get("/", verifyToken, getProducts);
router.post("/", addProduct);

module.exports = router;
