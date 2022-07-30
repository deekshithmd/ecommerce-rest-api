const User = require("../models/user.model");
const Product = require("../models/product.model");

const getWishlist = async (req, res) => {
  const { _id: userId } = req.user;
  try {
    const user = await User.findById(userId);
    const { wishlist } = user;
    res.status(201).json({ data: wishlist });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const addItemToWishlist = async (req, res) => {
  const { productId } = req.params;
  const { _id: userId } = req.user;
  try {
    const user = await User.findById(userId);
    const product = await Product.findById(productId);
    user.wishlist.push(product);
    await User.findByIdAndUpdate({ _id: userId }, user);
    res.status(201).json({ data: user });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteItemFromWishlist = async (req, res) => {
  const { productId } = req.params;
  const { _id: userId } = req.user;
  try {
    const user = await User.findById(userId);
    const newWishlist = user.wishlist.filter(
      (item) => item._id.toString() !== productId
    );
    const result = await User.findByIdAndUpdate(
      { _id: userId },
      { wishlist: newWishlist }
    );
    res.status(201).json({ data: result });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getWishlist, addItemToWishlist, deleteItemFromWishlist };
