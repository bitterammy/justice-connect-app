"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setErr(""); setMsg(""); setBusy(true);
    try {
      const res = await fetch("/api/admin/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg(
          data.message +
          (data.emailConfigured
            ? " Please check your inbox (and spam folder)."
            : " Email is not configured on this server — the reset link was written to the server logs (Vercel → your project → Logs).")
        );
      } else setErr(data.error || "Something went wrong.");
    } catch { setErr("Something went wrong."); }
    finally { setBusy(false); }
  }

  return (
    <div className="container section-sm">
      <div className="auth-box">
        <span className="eyebrow">Admin</span>
        <h1>Forgot password?</h1>
        <p>Enter your admin email and we&apos;ll send you a reset link (valid for 1 hour).</p>
        {err && <p className="form-error">{err}</p>}
        {msg && <p className="form-success">{msg}</p>}
        <form onSubmit={submit} style={{ textAlign: "left" }}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
          </div>
          <button className="btn btn-solid" style={{ width: "100%" }} disabled={busy}>
            {busy ? "Sending…" : "Send Reset Link"}
          </button>
        </form>
        <p className="small muted mt-2"><Link href="/admin/login">← Back to admin sign in</Link></p>
      </div>
    </div>
  );
}
