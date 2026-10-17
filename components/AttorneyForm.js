"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PRACTICE_AREAS, STATES } from "@/lib/content";

export default function AttorneyForm({ initial, isNew }) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: initial?.name || "", firm: initial?.firm || "", phone: initial?.phone || "",
    email: initial?.email || "", website: initial?.website || "", address: initial?.address || "",
    city: initial?.city || "", state: initial?.state || "", bio: initial?.bio || "",
    education: initial?.education || "", languages: initial?.languages || "",
    barAdmissions: initial?.barAdmissions || "", yearsExperience: initial?.yearsExperience ?? "",
    freeConsult: !!initial?.freeConsult, published: initial?.published ?? true,
    featured: !!initial?.featured,
  });
  const [areas, setAreas] = useState(initial?.practiceAreas || []);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const toggleArea = (s) => setAreas((a) => (a.includes(s) ? a.filter((x) => x !== s) : [...a, s]));

  async function submit(e) {
    e.preventDefault();
    setErr(""); setBusy(true);
    try {
      const url = isNew ? "/api/attorneys" : `/api/attorneys/${initial.id}`;
      const res = await fetch(url, {
        method: isNew ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          yearsExperience: form.yearsExperience === "" ? null : Number(form.yearsExperience),
          practiceAreas: areas,
        }),
      });
      const data = await res.json();
      if (res.ok) router.push("/admin/attorneys");
      else setErr(data.error || "Something went wrong.");
    } catch { setErr("Something went wrong."); }
    finally { setBusy(false); }
  }

  return (
    <form className="form" onSubmit={submit} style={{ maxWidth: 760 }}>
      {err && <p className="form-error">{err}</p>}
      <div className="form-row">
        <div className="form-group"><label>Name *</label><input value={form.name} onChange={(e) => set("name", e.target.value)} required /></div>
        <div className="form-group"><label>Firm</label><input value={form.firm} onChange={(e) => set("firm", e.target.value)} /></div>
      </div>
      <div className="form-row">
        <div className="form-group"><label>Phone</label><input value={form.phone} onChange={(e) => set("phone", e.target.value)} /></div>
        <div className="form-group"><label>Email</label><input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} /></div>
      </div>
      <div className="form-group"><label>Website</label><input value={form.website} onChange={(e) => set("website", e.target.value)} /></div>
      <div className="form-row">
        <div className="form-group"><label>City</label><input value={form.city} onChange={(e) => set("city", e.target.value)} /></div>
        <div className="form-group"><label>State *</label>
          <select value={form.state} onChange={(e) => set("state", e.target.value)} required>
            <option value="">Select…</option>
            {STATES.map(([c, n]) => <option key={c} value={c}>{n}</option>)}
          </select>
        </div>
      </div>
      <div className="form-group"><label>Address</label><input value={form.address} onChange={(e) => set("address", e.target.value)} /></div>
      <div className="form-group"><label>Bio</label><textarea value={form.bio} onChange={(e) => set("bio", e.target.value)} /></div>
      <div className="form-row">
        <div className="form-group"><label>Education</label><input value={form.education} onChange={(e) => set("education", e.target.value)} /></div>
        <div className="form-group"><label>Years experience</label><input type="number" min="0" value={form.yearsExperience} onChange={(e) => set("yearsExperience", e.target.value)} /></div>
      </div>
      <div className="form-row">
        <div className="form-group"><label>Bar admissions</label><input value={form.barAdmissions} onChange={(e) => set("barAdmissions", e.target.value)} /></div>
        <div className="form-group"><label>Languages</label><input value={form.languages} onChange={(e) => set("languages", e.target.value)} /></div>
      </div>
      <div className="form-group">
        <label>Practice areas</label>
        <div className="tags">
          {PRACTICE_AREAS.map((p) => (
            <button type="button" key={p.slug} onClick={() => toggleArea(p.slug)} className="tag"
              style={{ cursor: "pointer", background: areas.includes(p.slug) ? "var(--gold)" : "transparent", color: areas.includes(p.slug) ? "var(--charcoal)" : "var(--gold-light)" }}>
              {p.name}
            </button>
          ))}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group"><label style={{ display: "flex", gap: "0.6rem", alignItems: "center", textTransform: "none", letterSpacing: "normal" }}>
          <input type="checkbox" checked={form.freeConsult} onChange={(e) => set("freeConsult", e.target.checked)} style={{ width: "auto" }} /> Free consultation</label></div>
        <div className="form-group"><label style={{ display: "flex", gap: "0.6rem", alignItems: "center", textTransform: "none", letterSpacing: "normal" }}>
          <input type="checkbox" checked={form.published} onChange={(e) => set("published", e.target.checked)} style={{ width: "auto" }} /> Published (live)</label></div>
      </div>
      <div className="form-group"><label style={{ display: "flex", gap: "0.6rem", alignItems: "center", textTransform: "none", letterSpacing: "normal" }}>
        <input type="checkbox" checked={form.featured} onChange={(e) => set("featured", e.target.checked)} style={{ width: "auto" }} /> Featured on homepage</label></div>
      <button className="btn btn-solid" disabled={busy}>{busy ? "Saving…" : isNew ? "Add Attorney" : "Save Changes"}</button>
    </form>
  );
}
