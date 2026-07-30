import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all fields.",
        },
        {
          status: 400,
        },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    if (name.length > 100 || subject.length > 150 || message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          message: "One or more fields are too long.",
        },
        {
          status: 400,
        },
      );
    }

    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASSWORD ||
      !process.env.CONTACT_EMAIL
    ) {
      console.error("Missing contact email environment variables.");

      return NextResponse.json(
        {
          success: false,
          message: "The contact service is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,

      // Allows you to reply directly to the visitor.
      replyTo: email,

      subject: `Portfolio message: ${subject}`,

      text: `
New portfolio contact message

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `.trim(),

      html: `
        <div
          style="
            max-width: 640px;
            margin: 0 auto;
            padding: 32px;
            background: #f8fafc;
            color: #0f172a;
            font-family: Arial, sans-serif;
          "
        >
          <div
            style="
              background: #ffffff;
              border: 1px solid #e2e8f0;
              border-radius: 20px;
              overflow: hidden;
            "
          >
            <div
              style="
                padding: 24px;
                background: #0f172a;
                color: #ffffff;
              "
            >
              <p
                style="
                  margin: 0 0 8px;
                  color: #22c55e;
                  font-size: 12px;
                  font-weight: 700;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                "
              >
                Portfolio Contact
              </p>

              <h1 style="margin: 0; font-size: 24px;">
                New message received
              </h1>
            </div>

            <div style="padding: 24px;">
              <p>
                <strong>Name:</strong><br />
                ${safeName}
              </p>

              <p>
                <strong>Email:</strong><br />
                <a href="mailto:${safeEmail}">
                  ${safeEmail}
                </a>
              </p>

              <p>
                <strong>Subject:</strong><br />
                ${safeSubject}
              </p>

              <div
                style="
                  margin-top: 24px;
                  padding: 20px;
                  background: #f1f5f9;
                  border-radius: 14px;
                  line-height: 1.7;
                "
              >
                ${safeMessage}
              </div>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send your message. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}
