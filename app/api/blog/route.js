import { listBlogPosts, createBlogPost } from "@/lib/db";
import { getSession, requireAdmin, json } from "@/lib/api-helpers";

export async function GET(req) {
  try {
    const session = await getSession();
    const isAdmin = session?.user?.role === "admin";
    const { searchParams } = new URL(req.url);
    const all = searchParams.get("all") === "1" && isAdmin;
    return json(await listBlogPosts({ publishedOnly: !all, limit: 200 }));
  } catch {
    return json({ error: "Database not configured." }, 500);
  }
}

export async function POST(req) {
  const { error, session } = await requireAdmin();
  if (error) return error;
  try {
    const data = await req.json();
    if (!data.title || !data.content) return json({ error: "Title and content are required." }, 400);
    const post = await createBlogPost({ ...data, author: data.author || session.user.name || "Admin" });
    return json(post, 201);
  } catch (e) {
    return json({ error: "Could not create post." }, 500);
  }
}
