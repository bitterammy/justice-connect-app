"use client";

import { useState } from "react";
import { useSession, signIn } from "next-auth/react";

export function FavoriteButton({ attorneyId, initialFav }) {
  const { data: session } = useSession();
  const [fav, setFav] = useState(initialFav);
  const [busy, setBusy] = useState(false);

  async function toggle() {
    if (!session) { signIn("google", { callbackUrl: window.location.href }); return; }
    setBusy(true);
    try {
      const res = await fetch("/api/favorites", {
        method: fav ? "DELETE" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ attorneyId }),
      });
      if (res.ok) setFav(!fav);
    } finally { setBusy(false); }
  }

  return (
    <button className={`btn btn-sm ${fav ? "btn-solid" : "btn-ghost"}`} onClick={toggle} disabled={busy}>
      {fav ? "★ Saved" : "☆ Save"}
    </button>
  );
}

export function ReviewForm({ attorneyId }) {
  const { data: session } = useSession();
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    if (!session) { signIn("google", { callbackUrl: window.location.href }); return; }
    setBusy(true); setMsg("");
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ attorneyId, rating, text }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg("Thank you! Your review was submitted and is pending approval.");
        setText("");
      } else setMsg(data.error || "Something went wrong.");
    } catch { setMsg("Something went wrong."); }
    finally { setBusy(false); }
  }

  return (
    <form onSubmit={submit} className="form mt-2">
      <h3>Write a review</h3>
      <p className="small muted mb-2">Reviews appear publicly after approval.</p>
      {msg && <p className="form-success">{msg}</p>}
      <div className="form-group">
        <label>Rating</label>
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} star{n > 1 ? "s" : ""}</option>)}
        </select>
      </div>
      <div className="form-group">
        <label>Your review</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} required minLength={10} placeholder="Share your experience with this attorney…" />
      </div>
      <button className="btn" disabled={busy}>{busy ? "Submitting…" : "Submit Review"}</button>
    </form>
  );
}

export function AppointmentForm({ attorneyId, attorneyName }) {
  const { data: session } = useSession();
  const [form, setForm] = useState({ date: "", time: "", phone: "", notes: "" });
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  function set(k, v) { setForm((f) => ({ ...f, [k]: v })); }

  async function submit(e) {
    e.preventDefault();
    if (!session) { signIn("google", { callbackUrl: window.location.href }); return; }
    setBusy(true); setMsg("");
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ attorneyId, ...form }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg(`Request sent! ${attorneyName} will confirm your ${form.date} appointment.`);
        setForm({ date: "", time: "", phone: "", notes: "" });
      } else setMsg(data.error || "Something went wrong.");
    } catch { setMsg("Something went wrong."); }
    finally { setBusy(false); }
  }

  const today = new Date().toISOString().slice(0, 10);

  return (
    <form onSubmit={submit} className="form mt-2">
      <h3>Request a consultation</h3>
      {msg && <p className="form-success">{msg}</p>}
      <div className="form-row">
        <div className="form-group">
          <label>Preferred date</label>
          <input type="date" value={form.date} min={today} required onChange={(e) => set("date", e.target.value)} />
        </div>
        <div className="form-group">
          <label>Preferred time</label>
          <input type="time" value={form.time} required onChange={(e) => set("time", e.target.value)} />
        </div>
      </div>
      <div className="form-group">
        <label>Phone (optional)</label>
        <input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="So the firm can reach you" />
      </div>
      <div className="form-group">
        <label>Notes (optional)</label>
        <textarea value={form.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Briefly describe your legal matter…" />
      </div>
      <button className="btn btn-solid" disabled={busy}>{busy ? "Sending…" : "Request Appointment"}</button>
    </form>
  );
}
