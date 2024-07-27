const login = async (req, res) => {
  res.json({ msg: "Login User" })
}

const register = async (req, res) => {
  res.json({ msg: "Register User" })
}

module.exports = {
  login,
  register
};