import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // 1. Extract the required fields from the request body
    const body = await request.json();
    const { email, friendName, amount, description } = body;

    // 2. Validate the incoming data
    if (!email || !friendName || !amount) {
      return NextResponse.json(
        { error: 'Missing required fields: email, friendName, and amount are required.' },
        { status: 400 }
      );
    }

    // 3. Send the email using Resend
    // Important: In testing mode (unless you have verified a domain), 
    // you can only send emails to the email address associated with your Resend account.
    const data = await resend.emails.send({
      from: 'BillBuddy <onboarding@resend.dev>', // Use onboarding@resend.dev for testing if no verified domain
      to: [email],
      subject: `Reminder: You owe ${friendName} money! 💸`,
      // You can replace this HTML with a React Email template later if desired
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="color: #333;">Payment Reminder</h2>
          <p style="font-size: 16px; color: #555;">Hi there,</p>
          <p style="font-size: 16px; color: #555;">
            This is a friendly reminder that you owe <strong>${friendName}</strong> for a shared expense.
          </p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 18px; color: #111;"><strong>Amount Due:</strong> $${amount}</p>
            ${description ? `<p style="margin: 10px 0 0; font-size: 14px; color: #666;"><strong>Description:</strong> ${description}</p>` : ''}
          </div>
          <p style="font-size: 14px; color: #999; margin-top: 30px;">
            Sent securely via BillBuddy 🧾
          </p>
        </div>
      `,
    });

    // 4. Return success response
    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error: any) {
    console.error('Error sending reminder:', error);
    // 5. Return error response
    return NextResponse.json(
      { error: error?.message || 'Failed to send the reminder email' },
      { status: 500 }
    );
  }
}
