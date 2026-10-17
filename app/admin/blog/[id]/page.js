import { redirect, notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AdminShell from "@/components/AdminShell";
import BlogForm from "@/components/BlogForm";
import { getBlogPostById, getStats } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function EditBlogPage({ params }) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "admin") redirect("/admin/login");
  let post = null;
  let stats = {};
  try {
    [post, stats] = await Promise.all([getBlogPostById(params.id), getStats()]);
  } catch {}
  if (!post) notFound();
  return (
    <AdminShell pending={{ reviews: stats.pendingReviews, appointments: stats.appointments }}>
      <h1 className="section-title mb-3">Edit blog post</h1>
      <BlogForm initial={post} />
    </AdminShell>
  );
}
