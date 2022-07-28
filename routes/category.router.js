const express = require("express");
const router = express.Router();

const {
  getCategory,
  addCategory,
} = require("../controllers/cateogry.controller");

router.get("/", getCategory);
router.post("/", addCategory);

module.exports = router;
