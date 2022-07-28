const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  categoryName: String,
  description: String,
});

const category = mongoose.model("category", categorySchema);

module.exports = category;
