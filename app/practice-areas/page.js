import Link from "next/link";
import { PRACTICE_AREAS } from "@/lib/content";

export default function PracticeAreasPage() {
  return (
    <div className="container section">
      <span className="eyebrow">Legal Guides</span>
      <h1 className="section-title">Practice areas</h1>
      <p className="section-sub">Understand your legal issue before you hire. Each guide explains when to hire, what it costs, and what to ask.</p>
      <div className="gold-rule" />
      <div className="card-grid mt-3">
        {PRACTICE_AREAS.map((p) => (
          <div className="card" key={p.slug}>
            <h3><Link href={`/practice-areas/${p.slug}`}>{p.name}</Link></h3>
            <p>{p.tagline}</p>
            <div className="meta"><Link href={`/practice-areas/${p.slug}`}>Read guide →</Link></div>
          </div>
        ))}
      </div>
    </div>
  );
}
