const { StatusCodes } = require("http-status-codes");

const Job = require("../models/Job.model");
const { BadRequestError, NotFoundError } = require("../errors");

// GET /api/v1/jobs
const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).json({ count: jobs.length, jobs });
};

// GET /api/v1/jobs/:id
const getJob = async (req, res) => {
  res.json({ msg: "Get Single Job" });
};

// POST /api/v1/jobs
const createJob = async (req, res) => {
  // Attach user to req.body
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({ job });
}

// PUT /api/v1/jobs/:id
const updateJob = async (req, res) => {
  res.json({ msg: "Update Job" });
};

// DELETE /api/v1/jobs/:id
const deleteJob = async (req, res) => {
  res.json({ msg: "Delete Job" });
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob
};