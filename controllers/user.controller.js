const User = require("../models/user.model");
const { validateLogin } = require("../validation/validation");
const jwt = require("jsonwebtoken");
const user = require("../models/user.model");

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

const loginUser = async (req, res) => {
  const { error } = validateLogin(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const validUser = await User.findOne({ email: req.body.email });
  if (!validUser) res.status(400).json({ message: "Email not found" });

  let validPassword = validUser.password === req.body.password;
  if (!validPassword) res.status(400).json({ message: "Password Incorrect" });

  const token = jwt.sign({ _id: validUser._id }, process.env.JWT_SECRET, {
    algorithm: "HS256",
  });
  res.status(201).json({ user: validUser, token: token });
};

module.exports = { getUserData, signupUser, loginUser };
