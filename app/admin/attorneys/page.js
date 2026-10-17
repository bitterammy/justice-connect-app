import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AdminShell from "@/components/AdminShell";
import AttorneyTable from "@/components/AttorneyTable";
import { listAttorneys, getStats } from "@/lib/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminAttorneysPage() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "admin") redirect("/admin/login");
  let attorneys = [];
  let stats = {};
  try {
    [attorneys, stats] = await Promise.all([
      listAttorneys({ publishedOnly: false, limit: 500, sort: "newest" }),
      getStats(),
    ]);
  } catch {}

  return (
    <AdminShell pending={{ reviews: stats.pendingReviews, appointments: stats.appointments }}>
      <div className="row space-between mb-3">
        <h1 className="section-title">Attorneys ({attorneys.length})</h1>
        <Link href="/admin/attorneys/new" className="btn btn-sm btn-solid">+ Add Attorney</Link>
      </div>
      <AttorneyTable attorneys={attorneys} />
    </AdminShell>
  );
}
