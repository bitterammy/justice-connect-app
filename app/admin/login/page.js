"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setErr(""); setBusy(true);
    const res = await signIn("admin-credentials", { email, password, redirect: false, callbackUrl: "/admin/dashboard" });
    setBusy(false);
    if (res?.error) setErr("Invalid email or password.");
    else window.location.href = res?.url || "/admin/dashboard";
  }

  return (
    <div className="container section-sm">
      <div className="auth-box">
        <span className="eyebrow">Restricted</span>
        <h1>Admin sign in</h1>
        <p>Site owners only. Customer? <Link href="/login">Sign in here →</Link></p>
        {err && <p className="form-error">{err}</p>}
        <form onSubmit={submit} style={{ textAlign: "left" }}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" />
          </div>
          <button className="btn btn-solid" style={{ width: "100%" }} disabled={busy}>
            {busy ? "Signing in…" : "Sign In as Admin"}
          </button>
        </form>
        <p className="small muted mt-2">
          <Link href="/admin/forgot-password">Forgot password?</Link>
        </p>
      </div>
    </div>
  );
}
