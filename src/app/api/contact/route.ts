import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    };

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Send email via Resend
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: process.env.RECEIVER_EMAIL!,
      subject: `${subject} — Message from ${name}`,
      text: `
        From: ${name} <${email}>    
        Subject: ${subject}

        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="padding: 10px; background: #f9f9f9; border-radius: 6px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully ✅",
    });
  } catch (error: any) {
    console.error("Email send error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error?.message || "Failed to send email. Please try again later.",
      },
      { status: 500 }
    );
  }
}
