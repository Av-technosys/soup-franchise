import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const html = `
      <div style="font-family: Arial; padding:20px">
        <h2 style="color:#0f6a3d">New Franchise Enquiry</h2>

        <p><b>Full Name:</b> ${data.fullName}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Profession:</b> ${data.profession}</p>
        <p><b>City:</b> ${data.city}</p>
        <p><b>Investment:</b> ${data.investment}</p>
        <p><b>Experience:</b> ${data.experience}</p>
        <p><b>Reason:</b> ${data.reason}</p>
        <p><b>Investment Time:</b> ${data.time}</p>
         <p><b>Credit Profile:</b> ${data.score}</p>
        <p><b>Other Info:</b> ${data.other}</p>

        <hr/>
        <small>Franchise website enquiry</small>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: "New Franchise Enquiry",
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message });
  }
}
