import Link from "next/link";
import AttorneyCard from "@/components/AttorneyCard";
import EmptyState from "@/components/EmptyState";
import { listAttorneys } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Browse Attorneys",
  description:
    "Browse all attorneys listed on Justice Connect. Real USA attorneys by name, city, state, and practice area — free to search, free for firms to list.",
  alternates: {
    canonical: "https://www.tasdi.foo/attorneys",
  },
};

export default async function AttorneysPage() {
  let attorneys = [];
  try {
    attorneys = await listAttorneys({ limit: 500 });
  } catch { /* db not configured */ }

  return (
    <div className="container section">
      <span className="eyebrow">Attorney Directory</span>
      <h1 className="section-title">Browse attorneys</h1>
      <p className="section-sub">Every attorney listed on Justice Connect — real profiles, searchable by name, city, and practice area.</p>
      <div className="gold-rule" />
      {attorneys.length > 0 && (
        <p className="muted mt-3 mb-2">
          {attorneys.length} attorney{attorneys.length === 1 ? "" : "s"} listed
          {" · "}<Link href="/search">Search by state or practice area →</Link>
        </p>
      )}
      {attorneys.length === 0 ? (
        <EmptyState
          title="No attorneys listed yet"
          text="Our directory is brand new. Law firms can list themselves for free — listings go live instantly."
          actionHref="/list-firm"
          actionLabel="List Your Firm — Free"
        />
      ) : (
        <div className="card-grid">
          {attorneys.map((a) => <AttorneyCard key={a.id} attorney={a} />)}
        </div>
      )}
    </div>
  );
}
