const app = require("./app");
const connectDb = require("./db/connectDb");
const config = require("./utils/config");

// Start Server
const start = async () => {
  try {
    await connectDb(config.MONGODB_URI);
    app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`));
  } catch (err) {
    console.log("Error connection:", err.message);
  }
}

start();