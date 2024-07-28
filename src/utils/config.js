require("dotenv").config();

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "";
const JWT_SECRET = process.env.JWT_SECRET_KEY || "secret";
const JWT_LIFETIME = process.env.JWT_LIFETIME || "1d";

module.exports = {
  PORT,
  MONGODB_URI,
  JWT_SECRET,
  JWT_LIFETIME
};