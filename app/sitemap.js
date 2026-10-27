import { PRACTICE_AREAS, STATES, stateSlug } from "@/lib/content";

const BASE = "https://tasdi.foo";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/states",
    "/practice-areas",
    "/attorneys",
    "/blog",
    "/blog/verify-attorney-license-disciplinary-history",
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

  return [...staticRoutes, ...stateRoutes, ...areaRoutes];
}
