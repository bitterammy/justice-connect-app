// Outgoing email (used for admin password resets).
// Configure via SMTP_* env vars (see .env.example). If not configured,
// the caller should fall back to logging the link server-side.

import nodemailer from "nodemailer";

export function smtpConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

export async function sendPasswordResetEmail(to, resetUrl, siteName = "Justice Connect") {
  if (!smtpConfigured()) return { sent: false, reason: "SMTP not configured" };

  const port = Number(process.env.SMTP_PORT || 587);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to,
    subject: `Reset your ${siteName} admin password`,
    text:
      `You requested a password reset for your ${siteName} admin account.\n\n` +
      `Reset your password here (valid for 1 hour):\n${resetUrl}\n\n` +
      `If you didn't request this, you can safely ignore this email.`,
    html:
      `<p>You requested a password reset for your <b>${siteName}</b> admin account.</p>` +
      `<p><a href="${resetUrl}">Reset your password</a> (valid for 1 hour).</p>` +
      `<p>If you didn't request this, you can safely ignore this email.</p>`,
  });

  return { sent: true };
}
