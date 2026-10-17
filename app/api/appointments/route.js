import { listAppointments, createAppointment } from "@/lib/db";
import { getSession, json } from "@/lib/api-helpers";

export async function GET(req) {
  const session = await getSession();
  if (!session?.user?.id) return json({ error: "Sign in required." }, 401);
  try {
    const isAdmin = session.user.role === "admin";
    const appts = await listAppointments(isAdmin ? {} : { userId: session.user.id });
    return json(appts);
  } catch {
    return json({ error: "Database not configured." }, 500);
  }
}

export async function POST(req) {
  const session = await getSession();
  if (!session?.user?.id) return json({ error: "Sign in to book an appointment." }, 401);
  try {
    const { attorneyId, date, time, phone, notes } = await req.json();
    if (!attorneyId || !date || !time) return json({ error: "Attorney, date, and time are required." }, 400);
    const id = await createAppointment({
      attorneyId,
      userId: session.user.id,
      userName: session.user.name || session.user.email,
      userEmail: session.user.email,
      userPhone: phone || null,
      date, time, notes,
    });
    return json({ id }, 201);
  } catch {
    return json({ error: "Could not book appointment." }, 500);
  }
}
