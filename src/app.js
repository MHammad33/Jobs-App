require("express-async-errors");

// Extra Security Packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");


const authRouter = require("./routes/auth.routes");
const jobRouter = require("./routes/jobs.routes");
const middlewares = require("./middleware");


const express = require("express");
const app = express();

// Middlewares
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 requests per 15 minutes
  }))
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());


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