require("dotenv").config();

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "";
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "secret";

module.exports = {
  PORT,
  MONGODB_URI,
  JWT_SECRET_KEY
};