import Link from "next/link";
import { STATES, stateSlug } from "@/lib/content";

export default function StatesPage() {
  return (
    <div className="container section">
      <span className="eyebrow">Browse by Location</span>
      <h1 className="section-title">Find attorneys by state</h1>
      <p className="section-sub">Laws vary by state. Choose yours to find licensed local attorneys.</p>
      <div className="gold-rule" />
      <div className="card-grid mt-3">
        {STATES.map(([code, name]) => (
          <div className="card" key={code} style={{ padding: "1.2rem 1.5rem" }}>
            <h3 style={{ fontSize: "1.05rem" }}><Link href={`/states/${stateSlug(code)}`}>{name}</Link></h3>
            <div className="meta"><Link href={`/search?state=${code}`}>Find lawyers →</Link></div>
          </div>
        ))}
      </div>
    </div>
  );
}
