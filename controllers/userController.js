const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const asyncHandler = require("express-async-handler");
const generateToken = require("../helpers/generateToken");

// @desc     Register a user
// @route    POST /signup
// @rpivate  Public
const signUpUser = asyncHandler(async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  if (!email || !password || !firstName || !lastName) {
    res.status(400);
    res.json({ message: "Please add all fields" });
    throw new Error("Please add all fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    res.json({ message: "User already exists" });
    throw new Error("User already exists");
  }

  /***** Hash password *****/
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  /***** Create user *****/
  const user = await User.create({
    email,
    password: hashedPassword,
    firstName,
    lastName,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    res.json({ message: "Invalid user data" });
    throw new Error("Invalid user data");
  }
});

// @desc     Authenticate a user
// @route    POST /login
// @rpivate  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  /***** Check for user email *****/
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    res.json({
      message: "Invalid login credentials",
    });
    throw new Error("Invalid login credentials");
  }
});

// @desc     Get user data
// @route    GET `/user
// @rpivate  Private
const getUser = asyncHandler(async (req, res) => {
  const { _id, email } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    email: email,
  });

  if (!_id || !email) {
    res.status(400);
    res.json({ message: "No user found" });
    throw new Error("No user found");
  }
});

module.exports = {
  signUpUser,
  loginUser,
  getUser,
};
