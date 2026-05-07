import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const normalised = email.trim().toLowerCase();
    const resend = new Resend((process.env.RESEND_API_KEY ?? "").trim());

    // Notify Etomedia
    await resend.emails.send({
      from: "Etomedia <support@etomedia.co.uk>",
      to: "support@etomedia.co.uk",
      subject: `New newsletter subscriber: ${normalised}`,
      html: `<p>New subscriber to <strong>The Capability Brief</strong>:</p><p><strong>${normalised}</strong></p>`,
    });

    // Confirmation to subscriber
    await resend.emails.send({
      from: "Etomedia <support@etomedia.co.uk>",
      to: normalised,
      subject: "Welcome to The Capability Brief",
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Inter, sans-serif; background: #F8FAFC; padding: 40px 20px; color: #0F172A;">
            <div style="max-width: 520px; margin: 0 auto; background: white; border-radius: 12px; padding: 40px; border: 1px solid #E2E8F0;">
              <img src="https://etomedia.co.uk/logo.png" alt="Etomedia" style="height: 28px; margin-bottom: 32px;" />
              <h1 style="font-size: 24px; font-weight: 700; color: #0F172A; margin: 0 0 12px;">You're in.</h1>
              <p style="color: #475569; line-height: 1.7; margin: 0 0 24px;">
                Welcome to <strong>The Capability Brief</strong> — practical insights, tool updates, and founder stories from Etomedia, delivered to your inbox.
              </p>
              <p style="color: #475569; line-height: 1.7; margin: 0 0 32px;">
                While you wait for the first issue, explore what Etomedia has already built:
              </p>
              <a href="https://etomedia.co.uk/products" style="display: inline-block; background: #D4AF37; color: #0F172A; font-weight: 700; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-size: 14px;">
                Explore the Ecosystem →
              </a>
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
