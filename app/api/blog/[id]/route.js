import { getBlogPost, updateBlogPost, deleteBlogPost } from "@/lib/db";
import { getSession, requireAdmin, json } from "@/lib/api-helpers";

export async function GET(req, { params }) {
  try {
    const session = await getSession();
    const isAdmin = session?.user?.role === "admin";
    const post = await getBlogPost(params.id, { includeUnpublished: isAdmin });
    // also allow lookup by id for admin
    const byId = post || (isAdmin ? await import("@/lib/db").then((m) => m.getBlogPostById(params.id)) : null);
    if (!byId) return json({ error: "Not found." }, 404);
    return json(byId);
  } catch {
    return json({ error: "Database not configured." }, 500);
  }
}

export async function PATCH(req, { params }) {
  const { error } = await requireAdmin();
  if (error) return error;
  try {
    const data = await req.json();
    const post = await updateBlogPost(params.id, data);
    if (!post) return json({ error: "Not found." }, 404);
    return json(post);
  } catch {
    return json({ error: "Could not update post." }, 500);
  }
}

export async function DELETE(req, { params }) {
  const { error } = await requireAdmin();
  if (error) return error;
  try {
    await deleteBlogPost(params.id);
    return json({ ok: true });
  } catch {
    return json({ error: "Could not delete post." }, 500);
  }
}
