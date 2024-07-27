const { StatusCodes } = require("http-status-codes");
const bcryptjs = require("bcryptjs");

const User = require("../models/User.model");
const { BadRequestError } = require("../errors")

const login = async (req, res) => {
  res.json({ msg: "Login User" })
}

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const salt = await bcryptjs.genSalt(10);
  const passwordHash = await bcryptjs.hash(password, salt);
  const userToRegister = {
    name,
    email,
    password: passwordHash,
  };

  const user = await User.create(userToRegister);

  res.status(StatusCodes.CREATED).json({ user });
}

module.exports = {
  login,
  register
};