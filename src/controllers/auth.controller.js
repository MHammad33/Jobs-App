const { StatusCodes } = require("http-status-codes");

const User = require("../models/User.model");

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
  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({ name, token });
}

module.exports = {
  login,
  register
};