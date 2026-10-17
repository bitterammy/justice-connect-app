"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function BlogTable({ posts }) {
  const router = useRouter();
  const [busy, setBusy] = useState(null);

  async function remove(id, title) {
    if (!confirm(`Delete "${title}" permanently?`)) return;
    setBusy(id);
    await fetch(`/api/blog/${id}`, { method: "DELETE" });
    setBusy(null); router.refresh();
  }

  if (posts.length === 0) return <p className="muted">No blog posts yet.</p>;

  return (
    <div className="table-wrap">
      <table className="data">
        <thead><tr><th>Title</th><th>Category</th><th>Status</th><th>Updated</th><th>Actions</th></tr></thead>
        <tbody>
          {posts.map((p) => (
            <tr key={p.id}>
              <td><b>{p.title}</b><br /><span className="muted small">/{p.slug}</span></td>
              <td className="small">{p.category || "—"}</td>
              <td><span className={`badge ${p.published ? "badge-green" : ""}`}>{p.published ? "Published" : "Draft"}</span></td>
              <td className="small muted">{String(p.updatedAt).slice(0, 10)}</td>
              <td>
                <div className="row" style={{ gap: "0.4rem" }}>
                  <Link href={`/admin/blog/${p.id}`} className="btn btn-sm btn-ghost">Edit</Link>
                  <button className="btn btn-sm btn-danger" disabled={busy === p.id} onClick={() => remove(p.id, p.title)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
