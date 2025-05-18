"use server";

import mongoose from "mongoose";
import { connectToDatabase } from "../db/connect";
import Job from "../db/model/job.model";
import { sendMailSelection } from "../sendEmail";
import User from "../db/model/user.model";

type data = {
  title: string;
  description: string;
  company: string;
  location: string;
  salary: string;
};

export const createJob = async (data: data) => {
  try {
    await connectToDatabase();
    const job = await Job.create({
      title: data.title,
      description: data.description,
      company: new mongoose.Types.ObjectId(data.company),
      location: data.location,
      salary: data.salary,
    });
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

export const getAllJobs = async () => {
  try {
    await connectToDatabase();
    const jobs = await Job.find().populate({ path: "company", select: "name" });
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

export const selectApplicant = async (jobId: string, userId: string) => {
  try {
    await connectToDatabase();
    const job = await Job.findByIdAndUpdate(
      jobId,
      { $addToSet: { selectedApplicant: userId } },
      { new: true }
    );
    const user = await User.findById(userId);

    await sendMailSelection(user?.email, user?.name, user?.phone);
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

//get all jobs by company id
export const getAllJobsByCompanyId = async (companyId: string) => {
  try {
    await connectToDatabase();
    const company = new mongoose.Types.ObjectId(companyId);
    // console.log(company);

    const jobs = await Job.find({ company }).populate({
      path: "applicants",
      model: "User",
      select: "_id name email",
    });
    if (!jobs) {
      const response = {
        status: "error",
        message: "No jobs found",
        data: null,
      };
      return JSON.parse(JSON.stringify(response));
    }
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
