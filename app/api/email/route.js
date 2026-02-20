

import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    // Require authentication
    const { userId } = await auth();
    if (!userId) {
        return new NextResponse(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
    }

    try {
        const body = await request.json();
        if (!body.to || !body.html) {
            return new NextResponse(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
        }
        const message = {
            from: process.env.EMAIL,
            to: body.to,
            subject: "Invitation from the BillBuddy",
            html: body.html,
            headers: {
                "X-Entity-Ref-ID": "newmail",
            },
        };
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });
        await transporter.sendMail(message);
        return new NextResponse(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: "Error sending email", error: err?.message }), { status: 500 });
    }
}