const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).json({ data: products });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const addProduct = async (req, res) => {
  const prod = req.body;
  const newProduct = new Product(prod);

  try {
    await newProduct.save();
    res.status(201).json({ data: newProduct });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getProducts, addProduct };
