const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const User = require("../models/User.model");
const { BadRequestError } = require("../errors");
const config = require("../utils/config");

const login = async (req, res) => {
  res.json({ msg: "Login User" })
}

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const userToRegister = {
    name,
    email,
    password,
  };

  const user = await User.create(userToRegister);

  const userForToken = {
    userId: user._id,
    name,
  }

  const token = jwt.sign(userForToken, config.JWT_SECRET_KEY, { expiresIn: "1h" });

  res.status(StatusCodes.CREATED).json({ token, name });
}

module.exports = {
  login,
  register
};