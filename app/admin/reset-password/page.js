"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

function ResetPasswordForm() {
  const params = useSearchParams();
  const token = params.get("token") || "";
  const [valid, setValid] = useState(null);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [err, setErr] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!token) { setValid(false); return; }
    fetch(`/api/admin/reset-password?token=${encodeURIComponent(token)}`)
      .then((r) => r.json())
      .then((d) => setValid(!!d.valid))
      .catch(() => setValid(false));
  }, [token]);

  async function submit(e) {
    e.preventDefault();
    setErr("");
    if (password.length < 8) { setErr("Password must be at least 8 characters."); return; }
    if (password !== confirm) { setErr("Passwords do not match."); return; }
    setBusy(true);
    try {
      const res = await fetch("/api/admin/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();
      if (res.ok) setDone(true);
      else setErr(data.error || "Something went wrong.");
    } catch { setErr("Something went wrong."); }
    finally { setBusy(false); }
  }

  if (valid === null) return <p className="muted">Checking your reset link…</p>;
  if (valid === false) return (
    <>
      <p className="form-error">This reset link is invalid or has expired.</p>
      <p className="small muted"><Link href="/admin/forgot-password">Request a new link →</Link></p>
    </>
  );
  if (done) return (
    <>
      <p className="form-success">Your password has been reset. You can now sign in.</p>
      <Link href="/admin/login" className="btn btn-solid">Sign In as Admin</Link>
    </>
  );
  return (
    <>
      {err && <p className="form-error">{err}</p>}
      <form onSubmit={submit} style={{ textAlign: "left" }}>
        <div className="form-group">
          <label>New password (min 8 characters)</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="new-password" />
        </div>
        <div className="form-group">
          <label>Confirm new password</label>
          <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required autoComplete="new-password" />
        </div>
        <button className="btn btn-solid" style={{ width: "100%" }} disabled={busy}>
          {busy ? "Saving…" : "Set New Password"}
        </button>
      </form>
    </>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="container section-sm">
      <div className="auth-box">
        <span className="eyebrow">Admin</span>
        <h1>Set a new password</h1>
        <Suspense fallback={<p className="muted">Loading…</p>}>
          <ResetPasswordForm />
        </Suspense>
      </div>
    </div>
  );
}
