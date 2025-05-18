"use server";

import nodemailer from "nodemailer";

export async function sendMail(
  email: string,
  name: string,
  password: string,
  phone: string
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "todaytalks3@gmail.com",
      pass: process.env.PASSWORD,
    },
  });

  const mailOption = {
    from: "todaytalks3@gmail.com",
    to: email,
    subject: "Successfully registered",
    html: `
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student Registration Confirmation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      padding: 20px;
      margin: 0;
    }
    .email-container {
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      max-width: 600px;
      margin: auto;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    .header {
      text-align: center;
      background-color: #004080;
      color: #ffffff;
      padding: 10px 0;
      border-radius: 6px 6px 0 0;
    }
    .content {
      padding: 20px;
    }
    .content p {
      line-height: 1.6;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      color: #777777;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h2>Maryland Institute of Technology</h2>
    </div>
    <div class="content">
      <h3>Student Registration Successful</h3>
      <p>Dear <strong>${name}</strong>,</p>
      <p>Welcome to <strong>Maryland Institute of Technology</strong>! You have been successfully registered with the following details:</p>
      <ul>
        <li><strong>Full Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Password:</strong> ${password}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>College:</strong> Maryland Institute of Technology</li>
      </ul>
      <p>Please keep this information safe for your records. If you have any questions, feel free to contact our admissions office.</p>
      <p>Best regards,<br>
      <strong>Maryland Institute of Technology Admissions Team</strong></p>
    </div>
    <div class="footer">
      &copy; 2025 Maryland Institute of Technology. All rights reserved.
    </div>
  </div>
</body>
</html>

    `,
  };

  try {
    await transporter.sendMail(mailOption);
    console.log("Email sent");
  } catch (error) {
    console.log("Error sending email", error);
  }
}

export async function sendMailSelection(
  email: string,
  name: string,
  phone: string
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "todaytalks3@gmail.com",
      pass: process.env.PASSWORD,
    },
  });

  const mailOption = {
    from: "todaytalks3@gmail.com",
    to: email,
    subject: "Congratulations - You ve Been Selected!",
    html: `
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Congratulations - You ve Been Selected!</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 20px;
    }
    .email-container {
      background-color: #ffffff;
      padding: 25px;
      max-width: 600px;
      margin: auto;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #004080;
      color: white;
      padding: 15px;
      text-align: center;
      border-radius: 6px 6px 0 0;
    }
    .content {
      padding: 20px;
    }
    .content h3 {
      color: #333333;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      color: #888888;
      margin-top: 20px;
    }
    .highlight {
      color: #004080;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h2>Maryland Institute of Technology</h2>
    </div>
    <div class="content">
      <h3>🎉 Congratulations, ${name}!</h3>
      <p>We are thrilled to inform you that you have been <strong class="highlight">selected</strong> by <strong class="highlight">{{company_name}}</strong>.</p>
      <p>This is a significant milestone in your career journey, and we’re incredibly proud of your achievement.</p>
      <p><strong>Details:</strong></p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Selected Company:</strong> To be Announced</li>
        <li><strong>College:</strong> Maryland Institute of Technology</li>
      </ul>
      <p>Please check your registered email or contact the placement cell for next steps regarding offer acceptance and onboarding process.</p>
      <p>Once again, congratulations and all the best for your professional journey!</p>
      <p>Warm regards,<br>
      <strong>Placement Office<br>
      Maryland Institute of Technology</strong></p>
    </div>
    <div class="footer">
      &copy; 2025 Maryland Institute of Technology. All rights reserved.
    </div>
  </div>
</body>
</html>
    `,
  };

  try {
    await transporter.sendMail(mailOption);
    console.log("Email sent");
  } catch {
    console.log("Error sending email");
  }
}
