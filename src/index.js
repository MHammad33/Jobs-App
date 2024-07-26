const app = require("./app");

const port = 3001;

// Start Server
const start = () => {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

start();