"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const LINKS = [
  ["Dashboard", "/admin/dashboard"],
  ["Attorneys", "/admin/attorneys"],
  ["Reviews", "/admin/reviews"],
  ["Appointments", "/admin/appointments"],
  ["Blog", "/admin/blog"],
  ["Users", "/admin/users"],
  ["Settings", "/admin/settings"],
];

export default function AdminShell({ children, pending }) {
  const path = usePathname();
  return (
    <div className="admin-shell">
      <aside className="admin-side">
        {LINKS.map(([label, href]) => (
          <Link key={href} href={href} className={path === href || path.startsWith(href + "/") ? "active" : ""}>
            {label}
            {label === "Reviews" && pending?.reviews > 0 && (
              <span className="badge badge-gold" style={{ marginLeft: "0.5rem" }}>{pending.reviews}</span>
            )}
            {label === "Appointments" && pending?.appointments > 0 && (
              <span className="badge badge-gold" style={{ marginLeft: "0.5rem" }}>{pending.appointments}</span>
            )}
          </Link>
        ))}
        <Link href="/" style={{ marginTop: "1rem" }}>← View Site</Link>
        <a href="#" onClick={(e) => { e.preventDefault(); signOut({ callbackUrl: "/" }); }} style={{ cursor: "pointer" }}>Sign out</a>
      </aside>
      <div className="admin-main">{children}</div>
    </div>
  );
}
