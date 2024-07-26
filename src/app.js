const express = require("express");

const app = express();

// Middlewares
require("express-async-errors");
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, world");
})

module.exports = app;