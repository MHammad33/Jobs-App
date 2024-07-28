const express = require("express");
const jobController = require("../controllers/jobs.controller");

const jobRouter = express.Router();

// Route /api/v1/jobs
jobRouter.route("/")
  .get(jobController.getAllJobs)
  .post(jobController.createJob);

// Route /api/v1/jobs/:id
jobRouter.route("/:id")
  .get(jobController.getJob)
  .patch(jobController.updateJob)
  .delete(jobController.deleteJob)


module.exports = jobRouter;