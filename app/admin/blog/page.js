import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AdminShell from "@/components/AdminShell";
import BlogTable from "@/components/BlogTable";
import { listBlogPosts, getStats } from "@/lib/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "admin") redirect("/admin/login");
  let posts = [];
  let stats = {};
  try {
    [posts, stats] = await Promise.all([
      listBlogPosts({ publishedOnly: false, limit: 200 }),
      getStats(),
    ]);
  } catch {}

  return (
    <AdminShell pending={{ reviews: stats.pendingReviews, appointments: stats.appointments }}>
      <div className="row space-between mb-3">
        <h1 className="section-title">Blog ({posts.length})</h1>
        <Link href="/admin/blog/new" className="btn btn-sm btn-solid">+ New Post</Link>
      </div>
      <BlogTable posts={posts} />
    </AdminShell>
  );
}
