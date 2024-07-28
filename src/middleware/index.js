const errorHandler = require("./error-handler.middleware");
const notFound = require("./not-found.middleware");

module.exports = {
  errorHandler,
  notFound
};