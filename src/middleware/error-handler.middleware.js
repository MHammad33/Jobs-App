const { CustomApiError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log("Error Handler Middleware");
  console.log("---");
  if (err instanceof CustomApiError) {
    console.log(err.message);
    return res.status(err.statusCode).json({ msg: err.message });
  }

  console.log(err.message);
  console.log("---");
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err });
}

module.exports = errorHandlerMiddleware;