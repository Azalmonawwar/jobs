"use server";

import { connectToDatabase } from "../db/connect";
import Job from "../db/model/job.model";

type data = {
  title: string;
  description: string;
  company: string;
  location: string;
  salary: number;
  skillsRequired: string[];
};

const createJob = async (data: data) => {
  try {
    await connectToDatabase();
    const job = await Job.create(data);
    const response = {
      status: "success",
      message: "Job created successfully",
      data: job,
    };
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    console.error("Error creating job:", error);
    const response = {
      status: "error",
      message: "Error creating job",
      data: error,
    };
    return JSON.parse(JSON.stringify(response));
  }
};

const getAllJobs = async () => {
  try {
    await connectToDatabase();
    const jobs = await Job.find().populate("company");
    const response = {
      status: "success",
      message: "Jobs fetched successfully",
      data: jobs,
    };
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    console.error("Error fetching jobs:", error);
    const response = {
      status: "error",
      message: "Error fetching jobs",
      data: error,
    };
    return JSON.parse(JSON.stringify(response));
  }
};

const selectApplicant = async (jobId: string, userId: string) => {
  try {
    await connectToDatabase();
    const job = await Job.findByIdAndUpdate(
      jobId,
      { $addToSet: { selectedApplicant: userId } },
      { new: true }
    ).populate("company");
    const response = {
      status: "success",
      message: "Applicant selected successfully",
      data: job,
    };
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    console.error("Error selecting applicant:", error);
    const response = {
      status: "error",
      message: "Error selecting applicant",
      data: error,
    };
    return JSON.parse(JSON.stringify(response));
  }
};
const getJobById = async (jobId: string) => {
  try {
    await connectToDatabase();
    const job = await Job.findById(jobId).populate("company");
    const response = {
      status: "success",
      message: "Job fetched successfully",
      data: job,
    };
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    console.error("Error fetching job:", error);
    const response = {
      status: "error",
      message: "Error fetching job",
      data: error,
    };
    return JSON.parse(JSON.stringify(response));
  }
};
