import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = schema.parse(json);

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO || user;

    if (host && port && user && pass && to) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass }
      });

      await transporter.sendMail({
        from: `Portfolio Contact <${user}>`,
        to,
        subject: `New message from ${data.name}`,
        replyTo: data.email,
        text: data.message,
        html: `<p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p>${data.message}</p>`
      });

      return NextResponse.json({ ok: true });
    }

    console.log("[CONTACT]", data);
    return NextResponse.json({ ok: true, mock: true });
  } catch (err: any) {
    const message = err?.message || "Invalid request";
    return NextResponse.json({ ok: false, message }, { status: 400 });
  }
}
