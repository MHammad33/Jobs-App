const mongoose = require("mongoose");

const connectDb = async (url) => {
  try {
    const connection = await mongoose.connect(url);
    console.log("Connected to database: ", connection.connection.host);

  } catch (error) {
    console.log("Error connecting to database: ", error.message);
  }
}

module.exports = connectDb;

