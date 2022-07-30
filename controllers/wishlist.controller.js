const User = require("../models/user.model");
const Product = require("../models/product.model");

const getWishlist = async (req, res) => {
  const { _id } = req.user;
  try {
    const user = await User.findById(_id);
    const { wishlist } = user;
    res.status(201).json({ data: wishlist });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const addItemToWishlist = async (req, res) => {
  const { productId } = req.body;
  const { _id } = req.user;
  try {
    const user = await User.findById(_id);
    const product = await Product.findById(productId);
    user.wishlist.push(product);
    await User.findByIdAndUpdate(_id, user);
    res.status(201).json({ data: user });
  } catch (error) {
    console.log("catch");
    res.status(409).json({ message: error.message });
  }
};

const deleteItemFromWishlist = async (req, res) => {
  const { productId } = req.body;
  const { _id: userId } = req.user;
  try {
    const user = await User.findById(userId);
    const newWishlist = user.wishlist.filter((item) => item._id !== productId);
    // console.log("new",newWishlist)
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
