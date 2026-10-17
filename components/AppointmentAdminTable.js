"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const STATUSES = ["pending", "confirmed", "completed", "cancelled"];

export default function AppointmentAdminTable({ appointments }) {
  const router = useRouter();
  const [busy, setBusy] = useState(null);

  async function setStatus(id, status) {
    setBusy(id);
    await fetch(`/api/appointments/${id}`, {
      method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status }),
    });
    setBusy(null); router.refresh();
  }

  if (appointments.length === 0) return <p className="muted">No appointment requests yet.</p>;

  return (
    <div className="table-wrap">
      <table className="data">
        <thead><tr><th>Client</th><th>Attorney</th><th>Date & Time</th><th>Notes</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a.id}>
              <td><b>{a.userName}</b><br /><span className="muted small">{a.userEmail}{a.userPhone ? ` · ${a.userPhone}` : ""}</span></td>
              <td className="small">{a.attorneyName}</td>
              <td className="small">{a.date}<br />{a.time}</td>
              <td className="small" style={{ maxWidth: 240 }}>{a.notes || "—"}</td>
              <td>
                <select value={a.status} disabled={busy === a.id} onChange={(e) => setStatus(a.id, e.target.value)}
                  style={{ background: "var(--charcoal-3)", color: "var(--ivory)", border: "1px solid var(--line)", borderRadius: 4, padding: "0.4rem" }}>
                  {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </td>
              <td className="small muted">{String(a.createdAt).slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
