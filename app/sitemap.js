import { PRACTICE_AREAS, STATES, stateSlug } from "@/lib/content";

const BASE = "https://www.tasdi.foo";

export default async function sitemap() {
  const staticRoutes = [
    "",
    "/states",
    "/practice-areas",
    "/attorneys",
    "/blog",
    // Blog guides (static pages under app/blog/<slug>). Every published
    // guide must be listed here, or Google cannot discover it via the
    // sitemap — keep this list in step with app/blog. The daily site-pages
    // routine adds each new guide's slug here as part of publishing it.
    "/blog/attorney-client-privilege-explained",
    "/blog/cannot-afford-attorney-options",
    "/blog/choose-right-type-attorney",
    "/blog/how-attorney-fees-work",
    "/blog/how-to-file-a-complaint-against-an-attorney",
    "/blog/how-to-respond-to-a-cease-and-desist-letter",
    "/blog/mediation-vs-arbitration",
    "/blog/organise-documents-before-meeting-attorney",
    "/blog/red-flags-choosing-attorney",
    "/blog/verify-attorney-license-disciplinary-history",
    "/blog/what-happens-at-a-deposition",
    "/blog/what-happens-if-you-ignore-a-court-summons",
    "/blog/what-happens-if-you-lose-a-lawsuit",
    "/blog/what-is-a-demand-letter",
    "/blog/what-is-a-power-of-attorney-and-when-do-you-need-one",
    "/blog/what-is-a-retainer-agreement",
    "/blog/what-is-a-statute-of-limitations",
    "/blog/what-is-negligence-and-how-do-you-prove-it",
    "/blog/what-is-small-claims-court",
    "/blog/what-to-expect-first-consultation",
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

  // Published blog posts from the database, so any DB-driven post is
  // discoverable too. Guarded like the attorney routes.
  let blogRoutes = [];
  try {
    const { listBlogPosts } = await import("@/lib/db");
    const posts = await listBlogPosts({ limit: 500, publishedOnly: true });
    blogRoutes = posts.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(),
    }));
  } catch {
    blogRoutes = [];
  }

  // Dedupe by URL: a guide can appear both as a static route above and
  // as a database post.
  const seen = new Set();
  return [...staticRoutes, ...stateRoutes, ...areaRoutes, ...attorneyRoutes, ...blogRoutes].filter(
    (route) => !seen.has(route.url) && seen.add(route.url)
  );
}
