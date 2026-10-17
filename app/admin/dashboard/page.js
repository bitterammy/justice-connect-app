import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AdminShell from "@/components/AdminShell";
import { getStats, listReviews, listAppointments } from "@/lib/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "admin") redirect("/admin/login");

  let stats = { attorneys: 0, published: 0, pendingReviews: 0, users: 0, appointments: 0, posts: 0 };
  let pendingReviews = [];
  let pendingAppts = [];
  try {
    [stats, pendingReviews, pendingAppts] = await Promise.all([
      getStats(),
      listReviews({ status: "pending", limit: 5 }),
      listAppointments({ limit: 5 }).then((a) => a.filter((x) => x.status === "pending")),
    ]);
  } catch {}

  return (
    <AdminShell pending={{ reviews: stats.pendingReviews, appointments: stats.appointments }}>
      <h1 className="section-title">Dashboard</h1>
      <p className="muted mb-3">Welcome back, {session.user.name || session.user.email}.</p>

      <div className="stat-grid">
        <div className="stat-card"><b>{stats.published}</b><span>Live Listings</span></div>
        <div className="stat-card"><b>{stats.attorneys}</b><span>Total Attorneys</span></div>
        <div className="stat-card"><b>{stats.pendingReviews}</b><span>Reviews to Moderate</span></div>
        <div className="stat-card"><b>{stats.appointments}</b><span>Pending Appointments</span></div>
        <div className="stat-card"><b>{stats.users}</b><span>Registered Users</span></div>
        <div className="stat-card"><b>{stats.posts}</b><span>Published Articles</span></div>
      </div>

      <div className="row" style={{ gap: "2rem", alignItems: "flex-start" }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <div className="row space-between mb-2">
            <h2>Pending reviews</h2>
            <Link href="/admin/reviews" className="btn btn-sm btn-ghost">All reviews</Link>
          </div>
          {pendingReviews.length === 0 ? (
            <p className="muted">Nothing waiting. 🎉</p>
          ) : pendingReviews.map((r) => (
            <div className="card mb-2" key={r.id} style={{ padding: "1.1rem 1.3rem" }}>
              <p><b>{r.userName}</b> rated {r.rating}★</p>
              <p className="small muted">{String(r.text).slice(0, 120)}…</p>
            </div>
          ))}
        </div>
        <div style={{ flex: 1, minWidth: 280 }}>
          <div className="row space-between mb-2">
            <h2>Pending appointments</h2>
            <Link href="/admin/appointments" className="btn btn-sm btn-ghost">All appointments</Link>
          </div>
          {pendingAppts.length === 0 ? (
            <p className="muted">Nothing waiting. 🎉</p>
          ) : pendingAppts.map((a) => (
            <div className="card mb-2" key={a.id} style={{ padding: "1.1rem 1.3rem" }}>
              <p><b>{a.userName}</b> → {a.attorneyName}</p>
              <p className="small muted">{a.date} at {a.time}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h2>Quick actions</h2>
        <div className="row mt-2">
          <Link href="/admin/attorneys/new" className="btn btn-sm">+ Add Attorney</Link>
          <Link href="/admin/blog/new" className="btn btn-sm btn-ghost">+ New Blog Post</Link>
          <Link href="/admin/settings" className="btn btn-sm btn-ghost">Site Settings</Link>
        </div>
      </div>
    </AdminShell>
  );
}
