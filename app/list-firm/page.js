"use client";

import { useState } from "react";
import { PRACTICE_AREAS, STATES } from "@/lib/content";

const empty = {
  name: "", firm: "", phone: "", email: "", website: "", address: "",
  city: "", state: "", bio: "", education: "", languages: "",
  barAdmissions: "", yearsExperience: "", freeConsult: false,
};

export default function ListFirmPage() {
  const [form, setForm] = useState(empty);
  const [areas, setAreas] = useState([]);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  function toggleArea(slug) {
    setAreas((a) => (a.includes(slug) ? a.filter((x) => x !== slug) : [...a, slug]));
  }

  async function submit(e) {
    e.preventDefault();
    setErr(""); setMsg(""); setBusy(true);
    try {
      const res = await fetch("/api/attorneys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          yearsExperience: form.yearsExperience ? Number(form.yearsExperience) : null,
          practiceAreas: areas,
          published: true, // auto-approved
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg("Your listing is live! View it here — and share it with clients.");
        setForm(empty); setAreas([]);
        setMsg(`🎉 Your listing is live!`);
        window.location.href = `/attorneys/${data.id}`;
      } else setErr(data.error || "Something went wrong.");
    } catch { setErr("Something went wrong."); }
    finally { setBusy(false); }
  }

  return (
    <div className="container section">
      <span className="eyebrow">For Law Firms — 100% Free</span>
      <h1 className="section-title">List your firm</h1>
      <p className="section-sub">Fill in your details below. Your listing goes <b>live instantly</b> — no waiting, no fees.</p>
      <div className="gold-rule" />
      {err && <p className="form-error mt-2">{err}</p>}
      {msg && <p className="form-success mt-2">{msg}</p>}
      <form className="form mt-3" onSubmit={submit}>
        <div className="form-row">
          <div className="form-group"><label>Full name *</label><input value={form.name} onChange={(e) => set("name", e.target.value)} required /></div>
          <div className="form-group"><label>Firm name</label><input value={form.firm} onChange={(e) => set("firm", e.target.value)} /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Phone *</label><input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} required /></div>
          <div className="form-group"><label>Email</label><input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} /></div>
        </div>
        <div className="form-group"><label>Website</label><input type="url" value={form.website} onChange={(e) => set("website", e.target.value)} placeholder="https://" /></div>
        <div className="form-row">
          <div className="form-group"><label>City *</label><input value={form.city} onChange={(e) => set("city", e.target.value)} required /></div>
          <div className="form-group"><label>State *</label>
            <select value={form.state} onChange={(e) => set("state", e.target.value)} required>
              <option value="">Select…</option>
              {STATES.map(([c, n]) => <option key={c} value={c}>{n}</option>)}
            </select>
          </div>
        </div>
        <div className="form-group"><label>Street address</label><input value={form.address} onChange={(e) => set("address", e.target.value)} /></div>
        <div className="form-group"><label>Bio</label><textarea value={form.bio} onChange={(e) => set("bio", e.target.value)} placeholder="Tell clients about your practice…" /></div>
        <div className="form-row">
          <div className="form-group"><label>Education</label><input value={form.education} onChange={(e) => set("education", e.target.value)} placeholder="e.g. Harvard Law School, J.D." /></div>
          <div className="form-group"><label>Years of experience</label><input type="number" min="0" value={form.yearsExperience} onChange={(e) => set("yearsExperience", e.target.value)} /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Bar admissions</label><input value={form.barAdmissions} onChange={(e) => set("barAdmissions", e.target.value)} placeholder="e.g. Texas, New York" /></div>
          <div className="form-group"><label>Languages</label><input value={form.languages} onChange={(e) => set("languages", e.target.value)} placeholder="e.g. English, Spanish" /></div>
        </div>
        <div className="form-group">
          <label>Practice areas *</label>
          <div className="tags">
            {PRACTICE_AREAS.map((p) => (
              <button type="button" key={p.slug} onClick={() => toggleArea(p.slug)}
                className="tag" style={{
                  cursor: "pointer", background: areas.includes(p.slug) ? "var(--gold)" : "transparent",
                  color: areas.includes(p.slug) ? "var(--charcoal)" : "var(--gold-light)",
                }}>{p.name}</button>
            ))}
          </div>
          {areas.length === 0 && <p className="form-hint">Select at least one practice area.</p>}
        </div>
        <div className="form-group">
          <label style={{ display: "flex", gap: "0.6rem", alignItems: "center", textTransform: "none", letterSpacing: "normal" }}>
            <input type="checkbox" checked={form.freeConsult} onChange={(e) => set("freeConsult", e.target.checked)} style={{ width: "auto" }} />
            We offer free initial consultations
          </label>
        </div>
        <button className="btn btn-solid" disabled={busy || areas.length === 0}>
          {busy ? "Publishing…" : "Publish My Listing — Free"}
        </button>
        <p className="form-hint mt-2">By submitting, you confirm you are a licensed attorney (or authorized staff) and the information is accurate.</p>
      </form>
    </div>
  );
}
