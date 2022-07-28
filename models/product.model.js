const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  rating: Number,
  categoryName: String,
  season: String,
  discount: Number,
  offer: Boolean,
  outofstock: Boolean,
  quantity: {
    type: Number,
    default: 0,
  },
});

const product = mongoose.model("product", productSchema);

module.exports = product;
