import Link from "next/link";
import { notFound } from "next/navigation";
import AttorneyCard from "@/components/AttorneyCard";
import { practiceAreaBySlug } from "@/lib/content";
import { listAttorneys } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const { PRACTICE_AREAS } = await import("@/lib/content");
  return PRACTICE_AREAS.map((p) => ({ slug: p.slug }));
}

export default async function PracticeAreaPage({ params }) {
  const area = practiceAreaBySlug(params.slug);
  if (!area) notFound();
  let attorneys = [];
  try { attorneys = await listAttorneys({ practiceArea: area.slug, limit: 12 }); } catch {}

  return (
    <div className="container section">
      <Link href="/practice-areas" className="small muted">← All practice areas</Link>
      <h1 className="section-title mt-2">{area.name} Lawyers</h1>
      <p className="section-sub">{area.tagline}</p>
      <div className="gold-rule" />
      <div className="prose mt-3"><p>{area.description}</p></div>

      <h2 className="mt-3">When to hire a {area.name.toLowerCase()} attorney</h2>
      <div className="prose mt-1"><ul>{area.whenToHire.map((w, i) => <li key={i}>{w}</li>)}</ul></div>

      <h2 className="mt-3">Frequently asked questions</h2>
      <div className="mt-2">
        {area.faqs.map((f, i) => (
          <details className="faq" key={i}>
            <summary>{f.q}</summary>
            <div className="faq-body">{f.a}</div>
          </details>
        ))}
      </div>

      <div className="mt-4">
        <div className="row space-between mb-2">
          <h2>{area.name} attorneys</h2>
          <Link href={`/search?practiceArea=${area.slug}`} className="btn btn-sm btn-ghost">Search all</Link>
        </div>
        {attorneys.length === 0 ? (
          <p className="muted">No {area.name.toLowerCase()} attorneys listed yet. <Link href="/list-firm">List your firm for free →</Link></p>
        ) : (
          <div className="card-grid">{attorneys.map((a) => <AttorneyCard key={a.id} attorney={a} />)}</div>
        )}
      </div>
    </div>
  );
}
