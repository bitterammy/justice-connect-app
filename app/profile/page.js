import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login?callbackUrl=/profile");
  const u = session.user;

  return (
    <div className="container section">
      <h1 className="section-title">My profile</h1>
      <div className="gold-rule" />
      <div className="card mt-3" style={{ maxWidth: 560 }}>
        <div className="row" style={{ gap: "1.2rem" }}>
          {u.image && <img src={u.image} alt="" width={72} height={72} style={{ borderRadius: "50%", border: "2px solid var(--gold)" }} />}
          <div>
            <h3>{u.name || "User"}</h3>
            <p className="muted small">{u.email}</p>
            <p className="small mt-1"><span className="badge badge-gold">{u.role}</span></p>
          </div>
        </div>
        <div className="row mt-3">
          <a href="/favorites" className="btn btn-sm btn-ghost">My Favorites</a>
          <a href="/appointments" className="btn btn-sm btn-ghost">My Appointments</a>
        </div>
      </div>
    </div>
  );
}
