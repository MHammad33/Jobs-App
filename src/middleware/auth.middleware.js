const jwt = require("jsonwebtoken");

const User = require("../models/User.model");
const config = require("../utils/config");
const { UnauthenticatedError } = require("../errors");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Authentication Invalid");
  }

  const token = authHeader.split(" ")[1];
  try {
    // Attach user to the Job Routes
    req.user = jwt.verify(token, config.JWT_SECRET);
  } catch (error) {
    console.log("Error Authenticating", error.message);
    throw new UnauthenticatedError("Authentication Invalid");
  }
}

module.exports = authMiddleware;