import { getSettings, setSetting } from "@/lib/db";
import { requireAdmin, json } from "@/lib/api-helpers";

const ALLOWED = ["site_name", "tagline", "announcement", "contact_email", "contact_phone"];

export async function GET() {
  try {
    return json(await getSettings());
  } catch {
    return json({ error: "Database not configured." }, 500);
  }
}

export async function POST(req) {
  const { error } = await requireAdmin();
  if (error) return error;
  try {
    const data = await req.json();
    for (const key of ALLOWED) {
      if (data[key] !== undefined) await setSetting(key, data[key]);
    }
    return json({ ok: true });
  } catch {
    return json({ error: "Could not save settings." }, 500);
  }
}
