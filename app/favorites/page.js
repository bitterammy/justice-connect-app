import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AttorneyCard from "@/components/AttorneyCard";
import EmptyState from "@/components/EmptyState";
import { listFavorites } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function FavoritesPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login?callbackUrl=/favorites");
  let favs = [];
  try { favs = await listFavorites(session.user.id); } catch {}

  return (
    <div className="container section">
      <h1 className="section-title">My favorites</h1>
      <div className="gold-rule" />
      {favs.length === 0 ? (
        <EmptyState
          title="No favorites yet"
          text="Tap the ☆ Save button on any attorney profile to keep them here."
          actionHref="/search"
          actionLabel="Find Attorneys"
        />
      ) : (
        <div className="card-grid mt-3">{favs.map((a) => <AttorneyCard key={a.id} attorney={a} />)}</div>
      )}
    </div>
  );
}
