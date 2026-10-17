import { redirect, notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AdminShell from "@/components/AdminShell";
import AttorneyForm from "@/components/AttorneyForm";
import { getAttorney, getStats } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function EditAttorneyPage({ params }) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "admin") redirect("/admin/login");
  let attorney = null;
  let stats = {};
  try {
    [attorney, stats] = await Promise.all([
      getAttorney(params.id, { includeUnpublished: true }),
      getStats(),
    ]);
  } catch {}
  if (!attorney) notFound();
  return (
    <AdminShell pending={{ reviews: stats.pendingReviews, appointments: stats.appointments }}>
      <h1 className="section-title mb-3">Edit attorney</h1>
      <AttorneyForm initial={attorney} />
    </AdminShell>
  );
}
