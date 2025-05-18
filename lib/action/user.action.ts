"use server";

import { cookies } from "next/headers";
import { connectToDatabase } from "../db/connect";
import Company from "../db/model/company.model";
import User from "../db/model/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Job from "../db/model/job.model";
import { revalidatePath } from "next/cache";
import { sendMail } from "../sendEmail";
import { sendMailSelection } from "../sendEmail";
type User = {
  // add all user filed student company
  name: string;
  email: string;
  password: string;
  role: string;
  website?: string;
  about?: string;
  location?: string;
  phone?: string;
  date?: Date;

  resume?: string;
  jobApplied?: string[];
  // Add other fields as necessary
};
export const userRegister = async (formData: User) => {
  try {
    console.log("connecting to database");
    await connectToDatabase();
    if (formData.role === "student") {
      // check if student already exists
      const existingStudent = await User.findOne({ email: formData.email });
      if (existingStudent) {
        const response = {
          status: "failed",
          message: "student already exists",
        };
        return JSON.parse(JSON.stringify(response));
      }

      const student = await User.create(formData);
      // send email
      await sendMail(
        formData.email,
        formData.name,
        formData.password,
        formData.phone!
      );
      // hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(formData.password, salt);
      student.password = hashedPassword;
      await student.save();

      if (!student) {
        const response = {
          status: "failed",
          message: "student not create please try again",
        };
        return JSON.parse(JSON.stringify(response));
      }
      const response = {
        status: "success",
        student,
      };
      return JSON.parse(JSON.stringify(response));
    }
    if (formData.role === "company") {
      // check if company already exists
      const existingCompany = await Company.findOne({ email: formData.email });
      if (existingCompany) {
        const response = {
          status: "failed",
          message: "company already exists",
        };
        return JSON.parse(JSON.stringify(response));
      }

      // create company
      const company = await Company.create(formData);

      // hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(formData.password, salt);
      company.password = hashedPassword;
      await company.save();
      if (!company) {
        const response = {
          status: "failed",
          message: "company not create please try again",
        };
        return JSON.parse(JSON.stringify(response));
      }
      const response = {
        status: "success",
        company,
      };
      return JSON.parse(JSON.stringify(response));
    }
    const response = {
      status: "failed",
      message: "user not found",
    };
    return JSON.parse(JSON.stringify(response));
  } catch (error) {}
};

export const userLogin = async (
  email: string,
  password: string,
  role: string
) => {
  try {
    // student login
    if (role === "student") {
      await connectToDatabase();
      const student = await User.findOne({ email });

      // decrypt password
      const isMatch = await bcrypt.compare(password, student?.password);
      if (!isMatch) {
        const response = {
          status: "failed",
          message: "password not match",
        };
        return JSON.parse(JSON.stringify(response));
      }

      if (!student) {
        const response = {
          status: "failed",
          message: "student not found",
        };
        return JSON.parse(JSON.stringify(response));
      }
      // add token to cookie
      const token = jwt.sign(
        { id: student._id, role: "student" },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "1d",
        }
      );

      // set cookie
      const cookie = await cookies();
      cookie.set({
        name: "token",
        value: token as string,
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });
      const response = {
        status: "success",
        student,
      };
      return JSON.parse(JSON.stringify(response));
    }
    // company login
    if (role === "company") {
      await connectToDatabase();
      const company = await Company.findOne({ email });

      // decrypt password
      const isMatch = await bcrypt.compare(password, company?.password);
      if (!isMatch) {
        const response = {
          status: "failed",
          message: "password not match",
        };
        return JSON.parse(JSON.stringify(response));
      }
      if (!company) {
        const response = {
          status: "failed",
          message: "company not found",
        };
        return JSON.parse(JSON.stringify(response));
      }
      // add token to cookie
      const token = jwt.sign(
        { id: company._id, role: "company" },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "1d",
        }
      );
      // set cookie
      const cookie = await cookies();
      cookie.set({
        name: "token",
        value: token as string,
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });
      const response = {
        status: "success",
        company,
      };
      return JSON.parse(JSON.stringify(response));
    }

    // admin login
    if (role === "admin") {
      await connectToDatabase();
      if (
        email === process.env.ADMIN_EMAIL &&
        password === process.env.ADMIN_PASSWORD
      ) {
        const admin = {
          name: "admin",
          email: process.env.ADMIN_EMAIL,
          role: "admin",
        };

        const token = jwt.sign(
          { id: "admin", role: "admin" },
          process.env.JWT_SECRET as string,
          {
            expiresIn: "1d",
          }
        );
        // set cookie
        const cookie = await cookies();
        cookie.set({
          name: "token",
          value: token as string,
          httpOnly: true,
          path: "/",
          maxAge: 60 * 60 * 24,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
        });
        const response = {
          status: "success",
          admin,
        };
        return JSON.parse(JSON.stringify(response));
      }
    }
  } catch (error) {
    const response = {
      status: "failed",
      message: "user not found",
    };
    return JSON.parse(JSON.stringify(response));
  }
};

const userLogout = async () => {
  try {
    const cookie = await cookies();
    cookie.set({
      name: "token",
      value: "",
      httpOnly: true,
      path: "/",
      maxAge: 0,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    const response = {
      status: "success",
      message: "user logged out",
    };
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    const response = {
      status: "failed",
      message: "user logout failed",
    };
    return JSON.parse(JSON.stringify(response));
  }
};

export const getUser = async () => {
  try {
    const cookie = await cookies();
    const token = cookie.get("token");
    if (!token) {
      const response = {
        status: "failed",
        message: "user not found",
      };
      return JSON.parse(JSON.stringify(response));
    }
    const decodedToken = jwt.verify(
      token.value,
      process.env.JWT_SECRET as string
    );
    if (
      !decodedToken ||
      typeof decodedToken !== "object" ||
      !("id" in decodedToken) ||
      !("role" in decodedToken)
    ) {
      const response = {
        status: "failed",
        message: "user not found",
      };
      return JSON.parse(JSON.stringify(response));
    }
    const decoded = decodedToken as { id: string; role: string };
    console.log(decoded.role);
    if (decoded.role === "student") {
      await connectToDatabase();
      const student = await User.findById(decoded.id);

      if (!student) {
        const response = {
          status: "failed",
          message: "user not found",
        };
        return JSON.parse(JSON.stringify(response));
      }

      const response = {
        status: "success",
        student,
      };
      console.log(response);
      return JSON.parse(JSON.stringify(response));
    }
    if (decoded.role === "company") {
      await connectToDatabase();
      const company = await Company.findById(decoded.id);
      if (!company) {
        const response = {
          status: "failed",
          message: "user not found",
        };
        return JSON.parse(JSON.stringify(response));
      }
      const response = {
        status: "success",
        company,
      };
      return JSON.parse(JSON.stringify(response));
    }
    if (decoded.role === "admin") {
      const admin = {
        name: "admin",
        email: process.env.ADMIN_EMAIL,
        role: "admin",
      };
      const response = {
        status: "success",
        admin,
      };
      return JSON.parse(JSON.stringify(response));
    }
  } catch (error) {
    const response = {
      status: "failed",
      message: "user not found",
    };
    return JSON.parse(JSON.stringify(response));
  }
};

export const applyJob = async (jobId: string, studentId: string) => {
  try {
    await connectToDatabase();
    const job = await Job.findById(jobId);
    if (!job) {
      const response = {
        status: "failed",
        message: "job not found",
      };
      return JSON.parse(JSON.stringify(response));
    }
    const student = await User.findById(studentId);
    if (!student) {
      const response = {
        status: "failed",
        message: "student not found",
      };
      return JSON.parse(JSON.stringify(response));
    }
    // check if student already applied for the job
    if (student.jobApplied.includes(jobId)) {
      const response = {
        status: "failed",
        message: "job already applied",
      };
      return JSON.parse(JSON.stringify(response));
    }
    // add job to student jobApplied
    student.jobApplied.push(jobId);
    await student.save();
    // add student to job applicants

    job.applicants.push(student._id);
    await sendMailSelection(student.email, student.name, student.phone);
    await job.save();
    const response = {
      status: "success",
      message: "job applied successfully",
    };
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    const response = {
      status: "failed",
      message: "job application failed",
    };
    return JSON.parse(JSON.stringify(response));
  }
};

export const getAllStudents = async () => {
  try {
    await connectToDatabase();
    const students = await User.find({ role: "student" });
    if (!students) {
      const response = {
        status: "failed",
        message: "students not found",
      };
      return JSON.parse(JSON.stringify(response));
    }
    const response = {
      status: "success",
      students,
    };
    // revalidatePath("/");
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    const response = {
      status: "failed",
      message: "students not found",
    };
    return JSON.parse(JSON.stringify(response));
  }
};

export const getAllCompanies = async () => {
  try {
    await connectToDatabase();
    const companies = await Company.find();
    if (!companies) {
      const response = {
        status: "failed",
        message: "companies not found",
      };
      return JSON.parse(JSON.stringify(response));
    }
    const response = {
      status: "success",
      companies,
    };
    // revalidatePath("/");
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    const response = {
      status: "failed",
      message: "companies not found",
    };
    return JSON.parse(JSON.stringify(response));
  }
};
