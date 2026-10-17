import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AdminShell from "@/components/AdminShell";
import SettingsForm from "@/components/SettingsForm";
import { getSettings, getStats } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "admin") redirect("/admin/login");
  let settings = {};
  let stats = {};
  try {
    [settings, stats] = await Promise.all([getSettings(), getStats()]);
  } catch {}

  return (
    <AdminShell pending={{ reviews: stats.pendingReviews, appointments: stats.appointments }}>
      <h1 className="section-title mb-3">Site settings</h1>
      <SettingsForm initial={settings} />
    </AdminShell>
  );
}
