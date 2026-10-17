"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Stars from "./Stars";

export default function ReviewModTable({ reviews }) {
  const router = useRouter();
  const [busy, setBusy] = useState(null);

  async function act(id, status) {
    setBusy(id);
    await fetch(`/api/reviews/${id}`, {
      method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status }),
    });
    setBusy(null); router.refresh();
  }
  async function remove(id) {
    if (!confirm("Delete this review permanently?")) return;
    setBusy(id);
    await fetch(`/api/reviews/${id}`, { method: "DELETE" });
    setBusy(null); router.refresh();
  }

  if (reviews.length === 0) return <p className="muted">No reviews to moderate. 🎉</p>;

  return (
    <div className="table-wrap">
      <table className="data">
        <thead><tr><th>Reviewer</th><th>Attorney</th><th>Rating</th><th>Review</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          {reviews.map((r) => (
            <tr key={r.id}>
              <td><b>{r.userName}</b><br /><span className="muted small">{String(r.createdAt).slice(0, 10)}</span></td>
              <td className="small">{r.attorneyName || r.attorneyId.slice(0, 8)}</td>
              <td><Stars rating={r.rating} /></td>
              <td className="small" style={{ maxWidth: 320 }}>{r.text}</td>
              <td><span className={`badge ${r.status === "approved" ? "badge-green" : r.status === "rejected" ? "badge-red" : "badge-gold"}`}>{r.status}</span></td>
              <td>
                <div className="row" style={{ gap: "0.4rem" }}>
                  {r.status !== "approved" && <button className="btn btn-sm btn-solid" disabled={busy === r.id} onClick={() => act(r.id, "approved")}>Approve</button>}
                  {r.status !== "rejected" && <button className="btn btn-sm btn-ghost" disabled={busy === r.id} onClick={() => act(r.id, "rejected")}>Reject</button>}
                  <button className="btn btn-sm btn-danger" disabled={busy === r.id} onClick={() => remove(r.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
