const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log("Error Handler Middleware");
  console.log("---");

  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong. Try again later",
  }

  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors).map(item => item.message).join(",");
    customError.statusCode = 400;
  } else if (err.name === "CastError") {
    customError.msg = `No item found with id: ${err.value}`;
    customError.statusCode = 404;
  } else if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field. Please choose another value`;
  }

  console.log(customError.msg);
  console.log("---");
  return res.status(customError.statusCode).json({ msg: customError.msg });
}

module.exports = errorHandlerMiddleware;