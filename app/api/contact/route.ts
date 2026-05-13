import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { parentName, phone, childAge, interestedIn, message } = body;

  await resend.emails.send({
    from: "Kalam Study Hall <onboarding@resend.dev>", 
    to: "contact@kalamstudyhall.com",   
    subject: "New Inquiry - Kalam Study Hall",
    html: `
      <h2>New Contact Inquiry</h2>
      <p><b>Parent Name:</b> ${parentName}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Child Age/Grade:</b> ${childAge}</p>
      <p><b>Interested In:</b> ${interestedIn}</p>
      <p><b>Message:</b> ${message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}