import { getUserByEmail, createPasswordResetToken } from "@/lib/db";
import { sendPasswordResetEmail, smtpConfigured } from "@/lib/email";
import { json } from "@/lib/api-helpers";

export async function POST(req) {
  try {
    const { email } = await req.json();
    const normalized = String(email || "").toLowerCase().trim();
    const user = normalized ? await getUserByEmail(normalized) : null;
    const adminUser = user && user.role === "admin" ? user : null;

    if (adminUser) {
      const token = await createPasswordResetToken(adminUser.id);
      const base = (process.env.NEXTAUTH_URL || "").replace(/\/$/, "");
      const resetUrl = `${base}/admin/reset-password?token=${token}`;

      let emailed = false;
      if (smtpConfigured()) {
        try {
          const r = await sendPasswordResetEmail(adminUser.email, resetUrl);
          emailed = r.sent;
        } catch (e) {
          console.error("[password-reset] email send failed:", e?.message || e);
        }
      }
      if (!emailed) {
        // No SMTP configured: write the link to server logs so the site owner
        // can retrieve it (Vercel → project → Logs). Never expose it publicly.
        console.log(`[password-reset] Reset link for ${adminUser.email}: ${resetUrl}`);
      }
    }

    // Generic response — never reveal whether the email belongs to an admin.
    return json({
      ok: true,
      message: "If an admin account exists for that email, a password reset link has been sent.",
      emailConfigured: smtpConfigured(),
    });
  } catch {
    return json({ error: "Could not process request." }, 500);
  }
}
