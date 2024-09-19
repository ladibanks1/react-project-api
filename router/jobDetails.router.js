import { Router } from "express";
import job from "../controller/jobDetails.controller.js";
const router = Router();

// Get Jobs
router.get("/", job.getJobs);

// Get job by ID
router.get("/:id", job.getJobById);

// Add a Job
router.post("/", job.addJob);

// Delete a Job
router.delete("/:id", job.deleteJob );

// Update a Job
router.patch("/:id", job.updateJob);

export default router;