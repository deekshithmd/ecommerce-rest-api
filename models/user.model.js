const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  cart: [],
  wishlist: [],
});

const user = mongoose.model("user", userSchema);

module.exports = user;
