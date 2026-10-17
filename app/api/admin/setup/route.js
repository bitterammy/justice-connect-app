import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
import { countAdmins, createUser } from "@/lib/db";
import { json } from "@/lib/api-helpers";

export async function POST(req) {
  try {
    // Only allowed when no admin exists yet (first-time setup)
    const n = await countAdmins();
    if (n > 0) return json({ error: "An admin account already exists." }, 403);

    const { name, email, password } = await req.json();
    if (!email || !password) return json({ error: "Email and password are required." }, 400);
    if (String(password).length < 8) return json({ error: "Password must be at least 8 characters." }, 400);

    const hash = await bcrypt.hash(password, 10);
    const user = await createUser({
      id: randomUUID(),
      name: name || "Site Admin",
      email: String(email).toLowerCase().trim(),
      role: "admin",
      passwordHash: hash,
    });
    return json({ ok: true, email: user.email }, 201);
  } catch (e) {
    if (String(e?.message || "").includes("UNIQUE")) {
      return json({ error: "This email is already registered." }, 400);
    }
    return json({ error: "Could not create admin account." }, 500);
  }
}

export async function GET() {
  try {
    const n = await countAdmins();
    return json({ setupNeeded: n === 0 });
  } catch {
    return json({ setupNeeded: true });
  }
}
