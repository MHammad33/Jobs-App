// GET /api/v1/jobs
const getAllJobs = async (req, res) => {
  res.json({ msg: "Get All Jobs" });
};

// GET /api/v1/jobs/:id
const getJob = async (req, res) => {
  res.json({ msg: "Get Single Job" });
};

// POST /api/v1/jobs
const createJob = async (req, res) => {
  res.json({ msg: "Create Job", user: req.user });
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