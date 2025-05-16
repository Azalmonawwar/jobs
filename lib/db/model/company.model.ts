import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  website: { type: String, required: true },
  about: { type: String, required: true },
  location: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Company =
  mongoose.models.Company || mongoose.model("Company", CompanySchema);
export default Company;
