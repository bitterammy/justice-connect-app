import { listAttorneys, createAttorney } from "@/lib/db";
import { requireAdmin, json } from "@/lib/api-helpers";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const wantAll = searchParams.get("all") === "1";
    if (wantAll) {
      const { error } = await requireAdmin();
      if (error) return error;
    }
    const attorneys = await listAttorneys({
      state: searchParams.get("state") || "",
      practiceArea: searchParams.get("practiceArea") || "",
      q: searchParams.get("q") || "",
      sort: wantAll ? "newest" : (searchParams.get("sort") || "rating"),
      limit: Math.min(Number(searchParams.get("limit")) || 100, 500),
      publishedOnly: !wantAll,
    });
    return json(attorneys);
  } catch (e) {
    return json({ error: "Database not configured." }, 500);
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    if (!data.name || !data.state) return json({ error: "Name and state are required." }, 400);
    if (!data.practiceAreas || data.practiceAreas.length === 0) {
      return json({ error: "Select at least one practice area." }, 400);
    }
    // Public submissions are auto-approved (published). Admin can also create.
    const attorney = await createAttorney({ ...data, published: data.published !== false });
    return json(attorney, 201);
  } catch (e) {
    return json({ error: "Could not create listing." }, 500);
  }
}
