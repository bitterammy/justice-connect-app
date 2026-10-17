"use client";

import { useState } from "react";

export default function AppointmentRow({ ap, mine }) {
  const [status, setStatus] = useState(ap.status);
  const [busy, setBusy] = useState(false);

  async function cancel() {
    if (!confirm("Cancel this appointment?")) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/appointments/${ap.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "cancelled" }),
      });
      if (res.ok) setStatus("cancelled");
    } finally { setBusy(false); }
  }

  return (
    <tr>
      <td>{ap.attorneyName}{ap.attorneyFirm ? <><br /><span className="muted small">{ap.attorneyFirm}</span></> : null}</td>
      <td>{ap.date}<br /><span className="muted small">{ap.time}</span></td>
      <td><span className={`badge ${status === "confirmed" ? "badge-green" : status === "cancelled" ? "badge-red" : ""}`}>{status}</span></td>
      <td>
        {mine && status === "pending" && (
          <button className="btn btn-sm btn-danger" onClick={cancel} disabled={busy}>Cancel</button>
        )}
      </td>
    </tr>
  );
}
