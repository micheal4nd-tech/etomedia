import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Please enter a message." }, { status: 400 });
    }

    const resend = new Resend((process.env.RESEND_API_KEY ?? "").trim());

    // Forward to Etomedia inbox
    await resend.emails.send({
      from: "Etomedia Website <support@etomedia.co.uk>",
      to: "support@etomedia.co.uk",
      replyTo: email.trim(),
      subject: subject?.trim() ? `Contact: ${subject.trim()}` : `Contact from ${name.trim()}`,
      html: `
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        ${subject?.trim() ? `<p><strong>Subject:</strong> ${subject.trim()}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message.trim()}</p>
      `,
    });

    // Auto-acknowledgement
    await resend.emails.send({
      from: "Etomedia <support@etomedia.co.uk>",
      to: email.trim(),
      subject: "We received your message",
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Inter, sans-serif; background: #F8FAFC; padding: 40px 20px; color: #0F172A;">
            <div style="max-width: 520px; margin: 0 auto; background: white; border-radius: 12px; padding: 40px; border: 1px solid #E2E8F0;">
              <img src="https://etomedia.co.uk/logo.png" alt="Etomedia" style="height: 28px; margin-bottom: 32px;" />
              <h1 style="font-size: 24px; font-weight: 700; color: #0F172A; margin: 0 0 12px;">Message received.</h1>
              <p style="color: #475569; line-height: 1.7; margin: 0 0 16px;">
                Hi ${name.trim()}, thank you for reaching out. We aim to respond within 24 hours.
              </p>
              <p style="color: #94A3B8; font-size: 12px; margin: 32px 0 0;">
                Etomedia · etomedia.co.uk · support@etomedia.co.uk
              </p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
