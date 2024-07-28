require("express-async-errors");
const express = require("express");
const authRouter = require("./routes/auth.routes");
const jobRouter = require("./routes/jobs.routes");
const middlewares = require("./middleware");

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, world");
})

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", middlewares.authentication, jobRouter);

// Error Handler Middleware
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;