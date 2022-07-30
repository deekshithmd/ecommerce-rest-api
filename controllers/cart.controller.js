const User = require("../models/user.model");

const getCart = async (req, res) => {
  const { _id } = req.user;
  try {
    const user = await User.findById(_id);
    const { cart } = user;
    res.status(201).json({ data: cart });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const addItemToCart = async (req, res) => {
  const product = req.body;
  const { _id } = req.user;
  try {
    const user = await User.findById(_id);
    user.cart.push(product);
    await User.findByIdAndUpdate(id, user);
    res.status(201).json({ data: user });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteItemFromCart = async (req, res) => {
  const { _id: productId } = req.body;
  const { _id } = req.user;
  const user = await User.findById(_id);
  const newCart = user.cart.filter((item) => item._id !== productId);
  try {
    const result = await User.findByIdAndUpdate({ _id }, { cart: newCart });
    res.status(201).json({ data: result });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getCart, addItemToCart, deleteItemFromCart };
