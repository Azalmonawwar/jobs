import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  resume: { type: String, required: false },
  phone: { type: String, required: true },
  jobApplied: [{ type: Schema.Types.ObjectId, ref: "Jobs" }],
  date: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
