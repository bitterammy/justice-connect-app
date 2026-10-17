import AttorneyCard from "@/components/AttorneyCard";
import EmptyState from "@/components/EmptyState";
import SearchForm from "@/components/SearchForm";
import { listAttorneys } from "@/lib/db";
import { stateName, practiceAreaBySlug } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function SearchPage({ searchParams }) {
  const { state = "", practiceArea = "", q = "", sort = "rating" } = searchParams || {};
  let attorneys = [];
  try {
    attorneys = await listAttorneys({ state, practiceArea, q, sort, limit: 200 });
  } catch { /* db not configured */ }

  const areaName = practiceArea ? (practiceAreaBySlug(practiceArea)?.name || practiceArea) : "";

  return (
    <div className="container section">
      <span className="eyebrow">Directory Search</span>
      <h1 className="section-title">Find a lawyer</h1>
      <div className="gold-rule" />
      <div className="mt-3 mb-3">
        <SearchForm initial={{ state, practiceArea, q }} />
      </div>
      {(state || areaName || q) && (
        <p className="muted mb-2">
          {attorneys.length} result{attorneys.length === 1 ? "" : "s"}
          {areaName && <> for <b>{areaName}</b></>}
          {state && <> in <b>{stateName(state)}</b></>}
          {q && <> matching “<b>{q}</b>”</>}
        </p>
      )}
      {attorneys.length === 0 ? (
        <EmptyState
          title="No attorneys found"
          text="No listings match your search yet. Try widening your filters — or if you're an attorney, list your firm for free and appear here instantly."
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
