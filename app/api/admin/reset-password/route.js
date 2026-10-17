import bcrypt from "bcryptjs";
import { consumePasswordResetToken, markResetUsed, setUserPassword } from "@/lib/db";
import { json } from "@/lib/api-helpers";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token") || "";
    const row = token ? await consumePasswordResetToken(token) : null;
    return json({ valid: !!row });
  } catch {
    return json({ valid: false });
  }
}

export async function POST(req) {
  try {
    const { token, password } = await req.json();
    if (!token || !password) return json({ error: "Reset token and new password are required." }, 400);
    if (String(password).length < 8) return json({ error: "Password must be at least 8 characters." }, 400);

    const row = await consumePasswordResetToken(String(token));
    if (!row) return json({ error: "This reset link is invalid or has expired." }, 400);

    const hash = await bcrypt.hash(password, 10);
    await setUserPassword(row.userId, hash);
    await markResetUsed(row.id);
    return json({ ok: true });
  } catch {
    return json({ error: "Could not reset password." }, 500);
  }
}
