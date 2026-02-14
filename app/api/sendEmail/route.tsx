import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { EmailTemplate } from '@/app/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);
console.log(process.env.RESEND_API_KEY)
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, serviceType, message } = body;

        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['sallubhai71206@gmail.com'],
            subject: `New Contact Form Submission - ${serviceType}`,
            react: EmailTemplate({
                name,
                email,
                phone,
                serviceType,
                message
            }) as React.ReactElement,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}