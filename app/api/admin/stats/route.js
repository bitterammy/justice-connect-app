import { getStats } from "@/lib/db";
import { requireAdmin, json } from "@/lib/api-helpers";

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;
  try {
    return json(await getStats());
  } catch {
    return json({ error: "Database not configured." }, 500);
  }
}
