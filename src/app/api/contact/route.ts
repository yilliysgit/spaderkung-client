// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend/resend';

// Haal env vars op (en cast af zodat TS weet dat ze strings zijn)
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL!;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL!;

// Runtime check (voor veiligheid)
if (!CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
  throw new Error(
    'CONTACT_TO_EMAIL of CONTACT_FROM_EMAIL ontbreekt in .env.local'
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: `Spaderkung Kontakt <${CONTACT_FROM_EMAIL}>`,
      to: [CONTACT_TO_EMAIL],     // <-- array is altijd OK
      replyTo: email,
      subject: `Ny kontaktförfrågan från ${name}`,
      text: `
Namn: ${name}
E-post: ${email}
Telefon: ${phone || '-'}

Meddelande:
${message}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
