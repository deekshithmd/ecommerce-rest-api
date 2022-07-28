const Category = require("../models/category.model");

const getCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(201).json({ data: categories });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const addCategory = async (req, res) => {
  const category = req.body;
  const newCategory = new Category(category);

  try {
    await newCategory.save();
    res.status(201).json({ data: newCategory });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getCategory, addCategory };
