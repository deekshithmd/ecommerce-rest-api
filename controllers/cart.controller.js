const User = require("../models/user.model");
const Product = require("../models/product.model");

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
  const { productId } = req.params;
  const { _id: userId } = req.user;
  try {
    const user = await User.findById(userId);
    const product = await Product.findById(productId);
    product.quantity = 1;
    user.cart.push(product);
    await User.findByIdAndUpdate({ _id: userId }, user);
    res.status(201).json({ data: user });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteItemFromCart = async (req, res) => {
  const { productId } = req.params;
  const { _id: userId } = req.user;
  try {
    const user = await User.findById(userId);
    const { cart } = user;
    const newCart = cart?.filter((item) => item._id.toString() !== productId);
    console.log("new", newCart);
    const result = await User.findByIdAndUpdate(
      { _id: userId },
      { cart: newCart }
    );
    res.status(201).json({ data: result });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const incrementCartQuantity = async (req, res) => {
  const { productId } = req.params;
  const { _id } = req.user;
  try {
    const user = await User.findById(_id);
    const { cart } = user;
    const newCart = cart?.map((item) =>
      item._id.toString() === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    const result = await User.findByIdAndUpdate({ _id }, { cart: newCart });
    res.status(201).json({ data: result });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const decrementCartQuantity = async (req, res) => {
  const { productId } = req.params;
  const { _id } = req.user;
  try {
    const user = await User.findById(_id);
    const { cart } = user;
    const newCart = cart.map((item) =>
      item._id.toString() === productId
        ? { ...item, quantity: item.quantity === 0 ? 0 : item.quantity - 1 }
        : item
    );
    const result = await User.findByIdAndUpdate({ _id }, { cart: newCart });
    res.status(201).json({ data: result });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  getCart,
  addItemToCart,
  deleteItemFromCart,
  incrementCartQuantity,
  decrementCartQuantity,
};
