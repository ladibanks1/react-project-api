import jobModel from "../model/jobDetails.model.js";
import Err from "../utils/customError.js";

// Get All Jobs
const getJobs = async () => {
  try {
    const jobs = await jobModel.find();
    return jobs;
  } catch (err) {
    throw new Err(err.message, 500);
  }
};
// Get Job by ID
const getJobById = async (id) => {
  try {
    const job = await jobModel.findById(id);
    return job;
  } catch (err) {
    throw new Err(err.message, 500);
  }
};

// Add a Job
const addJob = async (job) => {
  try {
    const newJob = await jobModel.create(job);
    return newJob;
  } catch (err) {
    throw new Err(err.message, 500);
  }
};
// Delete a Job
const deleteJob = async (id) => {
  try {
    console.log(id);
    const job = await jobModel.findByIdAndDelete(id);
    return job;
  } catch (err) {
    throw new Err(err.message, 500);
  }
};

// Update a Job
const updateJob = async (id, job) => {
  try {
    const updatedJob = await jobModel.findByIdAndUpdate(id, job, {
      new: true,
      runValidators: true,
    });
    return updatedJob;
  } catch (err) {
    throw new Err(err.message, 500);
  }
};
export default {
  getJobs,
  addJob,
  deleteJob,
  getJobById,
  updateJob
};
