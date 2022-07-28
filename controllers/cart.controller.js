const User = require("../models/user.model");

const addCart = async (req, res) => {
  const product = req.body;
  const id = "62e27460c5fd375b8a272e20";
  try {
    const user = await User.findById(id);
    user.cart.push(product);
    await User.findByIdAndUpdate(id, user);
    res.status(201).json({ data: user });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteCart = async (req, res) => {
  // const id=req.body
  const id = "62e263eb1c9fd901b141363d";
  const userId = "62e27460c5fd375b8a272e20";
  const user = await User.findById(userId);
  const newCart = user.cart.filter((item) => item._id !== id);
  try {
    const result = await User.findByIdAndUpdate(
      { _id: userId },
      { cart: newCart }
    );
    res.status(201).json({ data: result });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { addCart, deleteCart };
