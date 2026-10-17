import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AdminShell from "@/components/AdminShell";
import ReviewModTable from "@/components/ReviewModTable";
import { listReviews, getStats, client } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminReviewsPage() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "admin") redirect("/admin/login");
  let reviews = [];
  let stats = {};
  try {
    const [r, s] = await Promise.all([listReviews({ limit: 200 }), getStats()]);
    stats = s;
    // attach attorney names
    const c = client();
    const ids = [...new Set(r.map((x) => x.attorneyId))];
    const names = {};
    for (const id of ids) {
      const rr = await c.execute({ sql: "SELECT name FROM attorneys WHERE id = ?", args: [id] });
      names[id] = rr.rows[0]?.name || id.slice(0, 8);
    }
    reviews = r.map((x) => ({ ...x, attorneyName: names[x.attorneyId] }));
  } catch {}

  return (
    <AdminShell pending={{ reviews: stats.pendingReviews, appointments: stats.appointments }}>
      <h1 className="section-title mb-3">Review moderation</h1>
      <p className="muted mb-3">Approved reviews appear publicly on attorney profiles and update their ratings.</p>
      <ReviewModTable reviews={reviews} />
    </AdminShell>
  );
}
