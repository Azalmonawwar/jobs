import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  applicants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  selectedApplicant: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  location: { type: String, required: true },
  salary: { type: String, required: true },
  datePosted: { type: Date, default: Date.now },
});

const Job = mongoose.models.Job || mongoose.model("Job", JobSchema);

export default Job;
