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
  const {
    user: { userId },
    params: { id: jobId }
  } = req;

  const job = await Job.findOne({
    _id: jobId,
    createdBy: userId
  });

  if (!job) {
    throw new NotFoundError("The Job does not exist");
  }

  res.status(StatusCodes.OK).json({ job });
};

// POST /api/v1/jobs
const createJob = async (req, res) => {
  // Attach user to req.body
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({ job });
}

// PATCH /api/v1/jobs/:id
const updateJob = async (req, res) => {
  const {
    body: { company, position },
    user: { userId },
    params: { id: jobId }
  } = req;

  if (company == "" || position == "") {
    throw new BadRequestError("Company or Position cannot be empty");
  }

  const job = await Job.findOneAndUpdate(
    { _id: jobId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );

  if (!job) {
    throw new NotFoundError("The Job does not exist");
  }


  res.status(StatusCodes.OK).json({ job });
};

// DELETE /api/v1/jobs/:id
const deleteJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId }
  } = req;

  const job = await Job.findOneAndDelete({ _id: jobId, createdBy: userId });

  if (!job) {
    throw new NotFoundError("The Job does not exist");
  }

  res.status(StatusCodes.OK).send();
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob
};