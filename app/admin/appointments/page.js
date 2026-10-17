import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AdminShell from "@/components/AdminShell";
import AppointmentAdminTable from "@/components/AppointmentAdminTable";
import { listAppointments, getStats } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminAppointmentsPage() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "admin") redirect("/admin/login");
  let appointments = [];
  let stats = {};
  try {
    [appointments, stats] = await Promise.all([listAppointments({}), getStats()]);
  } catch {}

  return (
    <AdminShell pending={{ reviews: stats.pendingReviews, appointments: stats.appointments }}>
      <h1 className="section-title mb-3">Appointments ({appointments.length})</h1>
      <AppointmentAdminTable appointments={appointments} />
    </AdminShell>
  );
}
