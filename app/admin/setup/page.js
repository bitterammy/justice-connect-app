"use client";

import { useState } from "react";

export default function AdminSetupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  async function submit(e) {
    e.preventDefault();
    setErr("");
    if (form.password.length < 8) { setErr("Password must be at least 8 characters."); return; }
    if (form.password !== form.confirm) { setErr("Passwords do not match."); return; }
    setBusy(true);
    try {
      const res = await fetch("/api/admin/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
      });
      const data = await res.json();
      if (res.ok) window.location.href = "/admin/login";
      else setErr(data.error || "Something went wrong.");
    } catch { setErr("Something went wrong."); }
    finally { setBusy(false); }
  }

  return (
    <div className="container section-sm">
      <div className="auth-box">
        <span className="eyebrow">First-Time Setup</span>
        <h1>Create admin account</h1>
        <p>This creates the site owner account with full control. Do this once, then it&apos;s disabled.</p>
        {err && <p className="form-error">{err}</p>}
        <form onSubmit={submit} style={{ textAlign: "left" }}>
          <div className="form-group">
            <label>Your name</label>
            <input value={form.name} onChange={(e) => set("name", e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password (min 8 characters)</label>
            <input type="password" value={form.password} onChange={(e) => set("password", e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Confirm password</label>
            <input type="password" value={form.confirm} onChange={(e) => set("confirm", e.target.value)} required />
          </div>
          <button className="btn btn-solid" style={{ width: "100%" }} disabled={busy}>
            {busy ? "Creating…" : "Create Admin Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
