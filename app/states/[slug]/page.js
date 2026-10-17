import Link from "next/link";
import { notFound } from "next/navigation";
import AttorneyCard from "@/components/AttorneyCard";
import { stateFromSlug, stateName, stateSlug, STATES } from "@/lib/content";
import { listAttorneys } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return STATES.map(([, name]) => ({ slug: name.toLowerCase().replace(/[^a-z]+/g, "-") }));
}

export default async function StatePage({ params }) {
  const code = stateFromSlug(params.slug);
  if (!code) notFound();
  const name = stateName(code);
  let attorneys = [];
  try { attorneys = await listAttorneys({ state: code, limit: 24 }); } catch {}

  return (
    <div className="container section">
      <Link href="/states" className="small muted">← All states</Link>
      <h1 className="section-title mt-2">{name} Attorneys</h1>
      <p className="section-sub">Find licensed attorneys practicing in {name}. Filter by practice area to narrow your search.</p>
      <div className="gold-rule" />
      <div className="row mt-3 mb-3">
        <Link href={`/search?state=${code}`} className="btn">Search {name} Lawyers</Link>
        <Link href="/list-firm" className="btn btn-ghost">List Your {name} Firm — Free</Link>
      </div>
      {attorneys.length === 0 ? (
        <p className="muted">No attorneys listed in {name} yet. <Link href="/list-firm">Be the first to list your firm →</Link></p>
      ) : (
        <div className="card-grid">{attorneys.map((a) => <AttorneyCard key={a.id} attorney={a} />)}</div>
      )}
    </div>
  );
}
