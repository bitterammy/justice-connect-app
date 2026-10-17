import Link from "next/link";
import { listBlogPosts } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  let posts = [];
  try { posts = await listBlogPosts({}); } catch {}
  return (
    <div className="container section">
      <span className="eyebrow">Legal Insights</span>
      <h1 className="section-title">From the blog</h1>
      <p className="section-sub">Practical legal information — not legal advice. Always consult a licensed attorney for your situation.</p>
      <div className="gold-rule" />
      {posts.length === 0 ? (
        <p className="muted mt-3">No articles published yet. Check back soon.</p>
      ) : (
        <div className="card-grid mt-3">
          {posts.map((p) => (
            <div className="card" key={p.id}>
              {p.category && <div className="meta">{p.category}</div>}
              <h3 className="mt-1"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
              {p.excerpt && <p>{p.excerpt}</p>}
              <div className="meta mt-2"><Link href={`/blog/${p.slug}`}>Read article →</Link></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
