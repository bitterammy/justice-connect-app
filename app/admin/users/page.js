import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AdminShell from "@/components/AdminShell";
import { listUsers, getStats } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminUsersPage() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "admin") redirect("/admin/login");
  let users = [];
  let stats = {};
  try {
    [users, stats] = await Promise.all([listUsers(200), getStats()]);
  } catch {}

  return (
    <AdminShell pending={{ reviews: stats.pendingReviews, appointments: stats.appointments }}>
      <h1 className="section-title mb-3">Users ({users.length})</h1>
      <div className="table-wrap">
        <table className="data">
          <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Joined</th></tr></thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td><b>{u.name || "—"}</b></td>
                <td className="small">{u.email}</td>
                <td><span className={`badge ${u.role === "admin" ? "badge-gold" : ""}`}>{u.role}</span></td>
                <td className="small muted">{String(u.createdAt).slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
