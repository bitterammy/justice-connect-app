"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { stateName } from "@/lib/content";

export default function AttorneyTable({ attorneys }) {
  const router = useRouter();
  const [busy, setBusy] = useState(null);

  async function patch(id, data) {
    setBusy(id);
    await fetch(`/api/attorneys/${id}`, {
      method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
    });
    setBusy(null); router.refresh();
  }

  async function remove(id, name) {
    if (!confirm(`Delete "${name}" permanently?`)) return;
    setBusy(id);
    await fetch(`/api/attorneys/${id}`, { method: "DELETE" });
    setBusy(null); router.refresh();
  }

  if (attorneys.length === 0) return <p className="muted">No attorneys yet. Firms that submit via “List Your Firm” appear here automatically.</p>;

  return (
    <div className="table-wrap">
      <table className="data">
        <thead><tr><th>Name</th><th>Location</th><th>Rating</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          {attorneys.map((a) => (
            <tr key={a.id}>
              <td><b>{a.name}</b>{a.firm && <><br /><span className="muted small">{a.firm}</span></>}</td>
              <td className="small">{[a.city, stateName(a.state)].filter(Boolean).join(", ")}</td>
              <td className="small">{a.rating}★ ({a.reviewCount})</td>
              <td>
                <span className={`badge ${a.published ? "badge-green" : ""}`}>{a.published ? "Live" : "Hidden"}</span>
                {a.featured && <span className="badge badge-gold" style={{ marginLeft: 4 }}>★</span>}
              </td>
              <td>
                <div className="row" style={{ gap: "0.4rem" }}>
                  <Link href={`/admin/attorneys/${a.id}`} className="btn btn-sm btn-ghost">Edit</Link>
                  <button className="btn btn-sm btn-ghost" disabled={busy === a.id}
                    onClick={() => patch(a.id, { published: !a.published })}>
                    {a.published ? "Unpublish" : "Publish"}
                  </button>
                  <button className="btn btn-sm btn-danger" disabled={busy === a.id} onClick={() => remove(a.id, a.name)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
