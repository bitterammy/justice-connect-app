"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function SiteHeader({ siteName }) {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">J</span>
          <span className="brand-name">
            {String(siteName || "Justice Connect").split(" ")[0]} <em>{String(siteName || "Justice Connect").split(" ").slice(1).join(" ")}</em>
          </span>
        </Link>
        <nav className="nav">
          <Link href="/search">Find a Lawyer</Link>
          <Link href="/practice-areas">Practice Areas</Link>
          <Link href="/states">States</Link>
          <Link href="/blog">Insights</Link>
          <Link href="/list-firm">List Your Firm</Link>
          {session ? (
            <>
              <Link href="/favorites">Favorites</Link>
              <Link href="/appointments">Appointments</Link>
              <button
                className="btn btn-sm btn-ghost"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Sign out
              </button>
            </>
          ) : (
            <button className="btn btn-sm header-cta" onClick={() => signIn("google", { callbackUrl: "/" })}>
              Sign in
            </button>
          )}
        </nav>
        <button
          className="btn btn-sm btn-ghost"
          style={{ marginLeft: "auto", display: "none" }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          Menu
        </button>
      </div>
    </header>
  );
}
