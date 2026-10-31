import { PRACTICE_AREAS, STATES, stateSlug } from "@/lib/content";

const BASE = "https://www.tasdi.foo";

export default async function sitemap() {
  const staticRoutes = [
    "",
    "/states",
    "/practice-areas",
    "/attorneys",
    "/blog",
    "/blog/verify-attorney-license-disciplinary-history",
    "/blog/what-to-expect-first-consultation",
    "/blog/choose-right-type-attorney",
    "/search",
    "/list-firm",
    "/contact",
    "/login",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
  }));

  const stateRoutes = STATES.map(([code]) => ({
    url: `${BASE}/states/${stateSlug(code)}`,
    lastModified: new Date(),
  }));

  const areaRoutes = PRACTICE_AREAS.map((a) => ({
    url: `${BASE}/practice-areas/${a.slug}`,
    lastModified: new Date(),
  }));

  // Published attorney detail pages, so Google can discover listings via
  // the sitemap. Guarded: if the database is unreachable at sitemap
  // generation time, the sitemap still builds without attorney routes.
  let attorneyRoutes = [];
  try {
    const { listAttorneys } = await import("@/lib/db");
    const attorneys = await listAttorneys({ limit: 500, publishedOnly: true });
    attorneyRoutes = attorneys.map((a) => ({
      url: `${BASE}/attorneys/${a.id}`,
      lastModified: new Date(),
    }));
  } catch {
    attorneyRoutes = [];
  }

  return [...staticRoutes, ...stateRoutes, ...areaRoutes, ...attorneyRoutes];
}
