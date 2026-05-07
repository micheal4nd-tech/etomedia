import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const normalised = email.trim().toLowerCase();
    const displayName = (name ?? "").trim() || "there";
    const resend = new Resend((process.env.RESEND_API_KEY ?? "").trim());

    // Notify Etomedia
    await resend.emails.send({
      from: "Etomedia <support@etomedia.co.uk>",
      to: "support@etomedia.co.uk",
      subject: `New Etomedia Pass waitlist signup`,
      html: `
        <p>New waitlist signup for the <strong>Etomedia Pass</strong>:</p>
        <p><strong>Name:</strong> ${displayName}</p>
        <p><strong>Email:</strong> ${normalised}</p>
      `,
    });

    // Confirmation to subscriber
    await resend.emails.send({
      from: "Etomedia <support@etomedia.co.uk>",
      to: normalised,
      subject: "You're on the Etomedia Pass waitlist",
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Inter, sans-serif; background: #F8FAFC; padding: 40px 20px; color: #0F172A;">
            <div style="max-width: 520px; margin: 0 auto; background: white; border-radius: 12px; padding: 40px; border: 1px solid #E2E8F0;">
              <img src="https://etomedia.co.uk/logo.png" alt="Etomedia" style="height: 28px; margin-bottom: 32px;" />
              <h1 style="font-size: 24px; font-weight: 700; color: #0F172A; margin: 0 0 12px;">You're on the list, ${displayName}.</h1>
              <p style="color: #475569; line-height: 1.7; margin: 0 0 16px;">
                We'll email you the moment the <strong>Etomedia Pass</strong> launches. As a founding member, you'll get an exclusive early-adopter rate locked in for life.
              </p>
              <div style="background: #0F172A; border-radius: 10px; padding: 20px 24px; margin: 24px 0;">
                <p style="color: #D4AF37; font-weight: 700; font-size: 14px; margin: 0 0 4px; text-transform: uppercase; letter-spacing: 0.08em;">The Etomedia Pass</p>
                <p style="color: white; font-size: 18px; font-weight: 700; margin: 0 0 4px;">One subscription. All the tools.</p>
                <p style="color: #94A3B8; font-size: 13px; margin: 0;">Lumi Stories · LinguaKids · SylphCV · Keruxly · Finance Hub + more</p>
              </div>
              <p style="color: #475569; line-height: 1.7; margin: 0 0 32px;">
                In the meantime, all our products are live today — available individually.
              </p>
              <a href="https://etomedia.co.uk/products" style="display: inline-block; background: #D4AF37; color: #0F172A; font-weight: 700; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-size: 14px;">
                Explore the Products →
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
