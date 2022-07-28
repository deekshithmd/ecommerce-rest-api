const User = require("../models/user.model");

const getUserData = async (req, res) => {
  try {
    const user = await User.find();
    res.status(201).json({ data: user });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const signupUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(201).json({ data: newUser });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getUserData, signupUser };
