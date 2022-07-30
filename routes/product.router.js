const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProductById,
  addProduct,
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.get("/:productId", getProductById);
router.post("/", addProduct);

module.exports = router;
