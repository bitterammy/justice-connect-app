import { listReviews, createReview } from "@/lib/db";
import { getSession, json } from "@/lib/api-helpers";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const attorneyId = searchParams.get("attorneyId");
    const session = await getSession();
    const isAdmin = session?.user?.role === "admin";
    const status = searchParams.get("status");
    // Public sees approved only; admin may request any status
    const reviews = await listReviews({
      attorneyId: attorneyId || undefined,
      status: isAdmin && status ? status : "approved",
      limit: 200,
    });
    return json(reviews);
  } catch {
    return json({ error: "Database not configured." }, 500);
  }
}

export async function POST(req) {
  const session = await getSession();
  if (!session?.user?.id) return json({ error: "Sign in to write a review." }, 401);
  try {
    const { attorneyId, rating, text } = await req.json();
    if (!attorneyId || !rating || !text || String(text).trim().length < 10) {
      return json({ error: "Attorney, rating, and a review of at least 10 characters are required." }, 400);
    }
    const id = await createReview({
      attorneyId,
      userId: session.user.id,
      userName: session.user.name || session.user.email,
      rating: Math.min(5, Math.max(1, Number(rating))),
      text: String(text).trim(),
    });
    return json({ id }, 201);
  } catch {
    return json({ error: "Could not submit review." }, 500);
  }
}
