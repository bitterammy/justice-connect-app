import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AdminShell from "@/components/AdminShell";
import AttorneyForm from "@/components/AttorneyForm";
import { getStats } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function NewAttorneyPage() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "admin") redirect("/admin/login");
  let stats = {};
  try { stats = await getStats(); } catch {}
  return (
    <AdminShell pending={{ reviews: stats.pendingReviews, appointments: stats.appointments }}>
      <h1 className="section-title mb-3">Add attorney</h1>
      <AttorneyForm isNew />
    </AdminShell>
  );
}
