import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AppointmentRow from "@/components/AppointmentRow";
import EmptyState from "@/components/EmptyState";
import { listAppointments } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AppointmentsPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login?callbackUrl=/appointments");
  let appts = [];
  try { appts = await listAppointments({ userId: session.user.id }); } catch {}

  return (
    <div className="container section">
      <h1 className="section-title">My appointments</h1>
      <div className="gold-rule" />
      {appts.length === 0 ? (
        <EmptyState
          title="No appointments yet"
          text="Book a consultation from any attorney's profile and it will appear here."
          actionHref="/search"
          actionLabel="Find Attorneys"
        />
      ) : (
        <div className="table-wrap mt-3">
          <table className="data">
            <thead><tr><th>Attorney</th><th>Date & Time</th><th>Status</th><th></th></tr></thead>
            <tbody>
              {appts.map((a) => <AppointmentRow key={a.id} ap={a} mine />)}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
