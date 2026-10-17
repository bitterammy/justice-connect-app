import Link from "next/link";
import Stars from "./Stars";
import { practiceAreaBySlug } from "@/lib/content";
import { stateName } from "@/lib/content";

function initials(name) {
  return String(name || "?").split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

export default function AttorneyCard({ attorney }) {
  const areas = (attorney.practiceAreas || []).slice(0, 3).map((slug) => {
    const p = practiceAreaBySlug(slug);
    return p ? p.name : slug;
  });
  return (
    <div className="card attorney-card">
      <div className="attorney-top">
        <div className="avatar" aria-hidden>{initials(attorney.name)}</div>
        <div>
          <h3><Link href={`/attorneys/${attorney.id}`}>{attorney.name}</Link></h3>
          {attorney.firm && <div className="attorney-firm">{attorney.firm}</div>}
          <Stars rating={attorney.rating} count={attorney.reviewCount} />
        </div>
      </div>
      <div className="attorney-loc">
        {[attorney.city, stateName(attorney.state)].filter(Boolean).join(", ")}
      </div>
      {attorney.bio && <p>{attorney.bio.slice(0, 130)}{attorney.bio.length > 130 ? "…" : ""}</p>}
      {areas.length > 0 && (
        <div className="tags">{areas.map((a) => <span key={a} className="tag">{a}</span>)}</div>
      )}
      <div className="attorney-actions">
        <Link href={`/attorneys/${attorney.id}`} className="btn btn-sm">View Profile</Link>
        {attorney.phone && <a href={`tel:${attorney.phone}`} className="btn btn-sm btn-ghost">Call</a>}
      </div>
    </div>
  );
}
