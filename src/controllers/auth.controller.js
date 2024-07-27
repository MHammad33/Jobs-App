const User = require("../models/User.model");
const { StatusCodes } = require("http-status-codes");

const login = async (req, res) => {
  res.json({ msg: "Login User" })
}

const register = async (req, res) => {
  const userToRegister = { ...req.body };

  const user = await User.create(userToRegister);

  res.status(StatusCodes.CREATED).json({ user });
}

module.exports = {
  login,
  register
};