const app = require("./app");

// Start Server
const start = () => {
  try {
    app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`));
  } catch (err) {
    console.log("Error connection:", err.message);
  }
}

start();