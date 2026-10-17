import { setAppointmentStatus, listAppointments } from "@/lib/db";
import { getSession, json } from "@/lib/api-helpers";

export async function PATCH(req, { params }) {
  const session = await getSession();
  if (!session?.user?.id) return json({ error: "Sign in required." }, 401);
  try {
    const { status } = await req.json();
    const isAdmin = session.user.role === "admin";

    if (!isAdmin) {
      // Owners may only cancel their own pending appointments
      if (status !== "cancelled") return json({ error: "Not allowed." }, 403);
      const mine = await listAppointments({ userId: session.user.id });
      const appt = mine.find((a) => a.id === params.id);
      if (!appt) return json({ error: "Not found." }, 404);
      if (appt.status !== "pending") return json({ error: "Only pending appointments can be cancelled." }, 400);
    } else if (!["pending", "confirmed", "completed", "cancelled"].includes(status)) {
      return json({ error: "Invalid status." }, 400);
    }

    await setAppointmentStatus(params.id, status);
    return json({ ok: true });
  } catch {
    return json({ error: "Could not update appointment." }, 500);
  }
}
