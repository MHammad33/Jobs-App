const express = require("express");
const authRouter = require("./routes/auth.routes");
const jobRouter = require("./routes/jobs.routes");

const app = express();

// Middlewares
require("express-async-errors");
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, world");
})

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobRouter);


module.exports = app;