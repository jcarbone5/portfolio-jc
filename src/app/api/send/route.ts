import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_EMAIL_ADDRESS,
        pass: process.env.USER_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.USER_EMAIL_ADDRESS,
      to: "jean_f991@hotmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    const { messageId } = await transporter.sendMail(mailOptions);

    if (!messageId) {
      return NextResponse.json(
        { error: "Error sending email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
