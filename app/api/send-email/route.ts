// /pages/api/send-email.ts
export const dynamic = 'force-dynamic';

import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

require('dotenv').config();

interface EmailData {
    email: string;
    message: string;
}

export async function POST(req: Request) {
    const data: EmailData = await req.json();

    if (!data.email || !data.message) {
        return NextResponse.json({ error: 'Missing email or message fields' }, { status: 400 });
    }

    const templatePath = path.join(process.cwd(), 'app', 'api', 'send-email', 'email-template.html');
    const emailTemplate = fs.readFileSync(templatePath, 'utf8');
    let populatedTemplate = emailTemplate
        .replace('{{ email }}', data.email)
        .replace('{{ message }}', data.message);

    const transporter = nodemailer.createTransport({
        host: process.env.NODEMAILER_HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASSWORD,
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.NODEMAILER_SENDER,
            to: process.env.NODEMAILER_RECEIVER,
            subject: 'Puslapio užklausa',
            html: populatedTemplate
        });

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}