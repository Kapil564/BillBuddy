import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const payload = await request.json();
    const toEmail = payload.to || payload.email;
    const emailSubject = payload.subject || "Invitation to Join BillBuddy!";
    const emailHtml = payload.html || `<p>Hey! You owe <strong>$${payload.amount}</strong> for dinner last night.</p>`;

    const data = await resend.emails.send({
      from: 'BillBuddy <onboarding@resend.dev>',
      to: [toEmail],
      subject: emailSubject,
      html: emailHtml,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}