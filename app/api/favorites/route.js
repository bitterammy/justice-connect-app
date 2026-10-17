import { listFavorites, addFavorite, removeFavorite } from "@/lib/db";
import { getSession, json } from "@/lib/api-helpers";

export async function GET() {
  const session = await getSession();
  if (!session?.user?.id) return json({ error: "Sign in required." }, 401);
  try {
    return json(await listFavorites(session.user.id));
  } catch {
    return json({ error: "Database not configured." }, 500);
  }
}

export async function POST(req) {
  const session = await getSession();
  if (!session?.user?.id) return json({ error: "Sign in required." }, 401);
  try {
    const { attorneyId } = await req.json();
    if (!attorneyId) return json({ error: "attorneyId required." }, 400);
    await addFavorite(session.user.id, attorneyId);
    return json({ ok: true }, 201);
  } catch {
    return json({ error: "Could not save favorite." }, 500);
  }
}

export async function DELETE(req) {
  const session = await getSession();
  if (!session?.user?.id) return json({ error: "Sign in required." }, 401);
  try {
    const { attorneyId } = await req.json();
    if (!attorneyId) return json({ error: "attorneyId required." }, 400);
    await removeFavorite(session.user.id, attorneyId);
    return json({ ok: true });
  } catch {
    return json({ error: "Could not remove favorite." }, 500);
  }
}
