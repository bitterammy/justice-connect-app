"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  function submit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="container section">
      <span className="eyebrow">Get In Touch</span>
      <h1 className="section-title">Contact us</h1>
      <p className="section-sub">Questions about the directory or your listing? Send us a message.</p>
      <div className="gold-rule" />
      {sent ? (
        <p className="form-success mt-3">Thank you, {form.name || "friend"}! Your message has been received — we&apos;ll get back to you soon.</p>
      ) : (
        <form className="form mt-3" onSubmit={submit}>
          <div className="form-row">
            <div className="form-group">
              <label>Your name</label>
              <input value={form.name} onChange={(e) => set("name", e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} required />
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea value={form.message} onChange={(e) => set("message", e.target.value)} required minLength={10} />
          </div>
          <button className="btn btn-solid">Send Message</button>
        </form>
      )}
    </div>
  );
}
