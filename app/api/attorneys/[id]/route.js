import { getAttorney, updateAttorney, deleteAttorney } from "@/lib/db";
import { getSession, requireAdmin, json } from "@/lib/api-helpers";

export async function GET(req, { params }) {
  try {
    const session = await getSession();
    const isAdmin = session?.user?.role === "admin";
    const attorney = await getAttorney(params.id, { includeUnpublished: isAdmin });
    if (!attorney) return json({ error: "Not found." }, 404);
    return json(attorney);
  } catch {
    return json({ error: "Database not configured." }, 500);
  }
}

export async function PATCH(req, { params }) {
  const { error } = await requireAdmin();
  if (error) return error;
  try {
    const data = await req.json();
    const attorney = await updateAttorney(params.id, data);
    if (!attorney) return json({ error: "Not found." }, 404);
    return json(attorney);
  } catch {
    return json({ error: "Could not update." }, 500);
  }
}

export async function DELETE(req, { params }) {
  const { error } = await requireAdmin();
  if (error) return error;
  try {
    await deleteAttorney(params.id);
    return json({ ok: true });
  } catch {
    return json({ error: "Could not delete." }, 500);
  }
}
