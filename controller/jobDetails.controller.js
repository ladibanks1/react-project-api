import jobs from "../service/jobDetails.service.js";
import Err from "../utils/customError.js";

// Get All Jobs
const getJobs = async (req, res, next) => {
  try {
    const limit = req.query.limit;
    const job = await jobs.getJobs();
    if (limit) {
      const limitedJob = job.slice(0, limit);
      res.status(200).json(limitedJob);
    } else {
      res.status(200).json(job);
    }
  } catch (error) {
    const err = new Err(error.message, error.status || 500);
    next(err);
  }
};

// Get Job by ID
const getJobById = async (req, res, next) => {
  try {
    const job = await jobs.getJobById(req.params.id);
    res.status(200).json(job);
  } catch (error) {
    const err = new Err(error.message, error.status || 500);
    next(err);
  }
};

// Add a Job
const addJob = async (req, res, next) => {
  try {
    const job = await jobs.addJob(req.body);
    res.status(200).json(job);
  } catch (error) {
    const err = new Err(error.message, error.status || 500);
    next(err);
  }
};

// Delete a Job
const deleteJob = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const job = await jobs.deleteJob(req.params.id);
    res.status(200).json(job);
  } catch (error) {
    const err = new Err(error.message, error.status || 500);
    next(err);
  }
};

// Update a Job
const updateJob = async (req, res, next) => {
  try {
    const updatedJob = req.body;
    const id = req.params.id;
    const job = await jobs.updateJob(id , updatedJob);
    res.status(200).json(job);
  } catch (error) {
    const err = new Err(error.message, error.status || 500);
    next(err);
  }
};

export default {
  getJobs,
  addJob,
  deleteJob,
  getJobById,
  updateJob
};
