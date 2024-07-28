const errorHandler = require("./error-handler.middleware");
const notFound = require("./not-found.middleware");
const authentication = require("./auth.middleware");

module.exports = {
  errorHandler,
  notFound,
  authentication
};