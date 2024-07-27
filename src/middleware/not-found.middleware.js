const { StatusCodes } = require("http-status-codes");

const notFoundMiddleWare = (req, res) => {
  return res.status(StatusCodes.NOT_FOUND).send("Route not found");
}