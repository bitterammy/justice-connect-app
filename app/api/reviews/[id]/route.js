import { setReviewStatus, deleteReview } from "@/lib/db";
import { requireAdmin, json } from "@/lib/api-helpers";

export async function PATCH(req, { params }) {
  const { error } = await requireAdmin();
  if (error) return error;
  try {
    const { status } = await req.json();
    if (!["pending", "approved", "rejected"].includes(status)) {
      return json({ error: "Invalid status." }, 400);
    }
    await setReviewStatus(params.id, status);
    return json({ ok: true });
  } catch {
    return json({ error: "Could not update review." }, 500);
  }
}

export async function DELETE(req, { params }) {
  const { error } = await requireAdmin();
  if (error) return error;
  try {
    await deleteReview(params.id);
    return json({ ok: true });
  } catch {
    return json({ error: "Could not delete review." }, 500);
  }
}
