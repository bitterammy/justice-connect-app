"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BlogForm({ initial, isNew }) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: initial?.title || "", slug: initial?.slug || "", excerpt: initial?.excerpt || "",
    content: initial?.content || "", category: initial?.category || "",
    author: initial?.author || "", published: !!initial?.published,
  });
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  async function submit(e) {
    e.preventDefault();
    setErr(""); setBusy(true);
    try {
      const url = isNew ? "/api/blog" : `/api/blog/${initial.id}`;
      const res = await fetch(url, {
        method: isNew ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) router.push("/admin/blog");
      else setErr(data.error || "Something went wrong.");
    } catch { setErr("Something went wrong."); }
    finally { setBusy(false); }
  }

  return (
    <form className="form" onSubmit={submit} style={{ maxWidth: 780 }}>
      {err && <p className="form-error">{err}</p>}
      <div className="form-group"><label>Title *</label><input value={form.title} onChange={(e) => set("title", e.target.value)} required /></div>
      <div className="form-row">
        <div className="form-group"><label>Slug (optional)</label><input value={form.slug} onChange={(e) => set("slug", e.target.value)} placeholder="auto-generated" /></div>
        <div className="form-group"><label>Category</label><input value={form.category} onChange={(e) => set("category", e.target.value)} placeholder="e.g. Guides" /></div>
      </div>
      <div className="form-group"><label>Author</label><input value={form.author} onChange={(e) => set("author", e.target.value)} /></div>
      <div className="form-group"><label>Excerpt</label><input value={form.excerpt} onChange={(e) => set("excerpt", e.target.value)} /></div>
      <div className="form-group">
        <label>Content *</label>
        <textarea value={form.content} onChange={(e) => set("content", e.target.value)} required style={{ minHeight: 260 }} placeholder="Write paragraphs separated by blank lines." />
      </div>
      <div className="form-group">
        <label style={{ display: "flex", gap: "0.6rem", alignItems: "center", textTransform: "none", letterSpacing: "normal" }}>
          <input type="checkbox" checked={form.published} onChange={(e) => set("published", e.target.checked)} style={{ width: "auto" }} /> Published
        </label>
      </div>
      <button className="btn btn-solid" disabled={busy}>{busy ? "Saving…" : isNew ? "Create Post" : "Save Changes"}</button>
    </form>
  );
}
