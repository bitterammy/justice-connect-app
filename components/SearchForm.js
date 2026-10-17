"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { PRACTICE_AREAS, STATES } from "@/lib/content";

export default function SearchForm({ initial = {} }) {
  const router = useRouter();
  const [state, setState] = useState(initial.state || "");
  const [area, setArea] = useState(initial.practiceArea || "");
  const [q, setQ] = useState(initial.q || "");

  function submit(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (state) params.set("state", state);
    if (area) params.set("practiceArea", area);
    if (q.trim()) params.set("q", q.trim());
    router.push(`/search?${params.toString()}`);
  }

  return (
    <form className="search-panel" onSubmit={submit} role="search">
      <select value={state} onChange={(e) => setState(e.target.value)} aria-label="State">
        <option value="">All States</option>
        {STATES.map(([code, name]) => (
          <option key={code} value={code}>{name}</option>
        ))}
      </select>
      <select value={area} onChange={(e) => setArea(e.target.value)} aria-label="Practice area">
        <option value="">All Practice Areas</option>
        {PRACTICE_AREAS.map((p) => (
          <option key={p.slug} value={p.slug}>{p.name}</option>
        ))}
      </select>
      <input type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Name, firm, or city…" aria-label="Search keywords" />
      <button type="submit" className="btn btn-solid" style={{ gridColumn: "1 / -1" }}>Search Attorneys</button>
    </form>
  );
}
