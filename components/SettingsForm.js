"use client";

import { useState } from "react";

export default function SettingsForm({ initial }) {
  const [form, setForm] = useState({
    site_name: initial.site_name || "",
    tagline: initial.tagline || "",
    announcement: initial.announcement || "",
    contact_email: initial.contact_email || "",
    contact_phone: initial.contact_phone || "",
  });
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  async function submit(e) {
    e.preventDefault();
    setBusy(true); setMsg("");
    try {
      const res = await fetch("/api/settings", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form),
      });
      setMsg(res.ok ? "Settings saved." : "Failed to save.");
    } catch { setMsg("Failed to save."); }
    finally { setBusy(false); }
  }

  return (
    <form className="form" onSubmit={submit} style={{ maxWidth: 640 }}>
      {msg && <p className="form-success">{msg}</p>}
      <div className="form-group"><label>Site name</label><input value={form.site_name} onChange={(e) => set("site_name", e.target.value)} /></div>
      <div className="form-group"><label>Tagline</label><input value={form.tagline} onChange={(e) => set("tagline", e.target.value)} /></div>
      <div className="form-group">
        <label>Announcement bar</label>
        <input value={form.announcement} onChange={(e) => set("announcement", e.target.value)} placeholder="Leave empty to hide" />
        <p className="form-hint">Shows as a gold bar at the very top of every page.</p>
      </div>
      <div className="form-row">
        <div className="form-group"><label>Contact email</label><input type="email" value={form.contact_email} onChange={(e) => set("contact_email", e.target.value)} /></div>
        <div className="form-group"><label>Contact phone</label><input value={form.contact_phone} onChange={(e) => set("contact_phone", e.target.value)} /></div>
      </div>
      <button className="btn btn-solid" disabled={busy}>{busy ? "Saving…" : "Save Settings"}</button>
    </form>
  );
}
