import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({ params }) {
  let post = null;
  try { post = await getBlogPost(params.slug); } catch {}
  if (!post) notFound();

  return (
    <div className="container section">
      <div style={{ maxWidth: 760 }}>
        <Link href="/blog" className="small muted">← All articles</Link>
        {post.category && <div className="meta mt-2" style={{ color: "var(--gold)" }}>{post.category}</div>}
        <h1 className="section-title mt-1">{post.title}</h1>
        <p className="small muted mb-3">
          {post.author ? `By ${post.author} · ` : ""}{String(post.createdAt).slice(0, 10)}
        </p>
        <div className="prose">
          {String(post.content || "").split(/\n\n+/).map((para, i) => <p key={i}>{para}</p>)}
        </div>
        <div className="mt-4" style={{ borderTop: "1px solid var(--line)", paddingTop: "1.5rem" }}>
          <p className="small muted">Need legal help? <Link href="/search">Find an attorney near you →</Link></p>
        </div>
      </div>
    </div>
  );
}
