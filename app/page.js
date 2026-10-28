import Link from "next/link";
import SearchForm from "@/components/SearchForm";
import AttorneyCard from "@/components/AttorneyCard";
import EmptyState from "@/components/EmptyState";
import { PRACTICE_AREAS, STATES } from "@/lib/content";
import { listAttorneys, listBlogPosts, getSettings } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata = {
  alternates: {
    canonical: "https://www.tasdi.foo/",
  },
  openGraph: {
    images: [
      {
        url: "https://www.tasdi.foo/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Justice Connect — Find a USA Attorney You Can Trust",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Justice Connect",
      url: "https://www.tasdi.foo/",
      description:
        "Justice Connect is a free USA attorney directory. Search by state and practice area, read guides, and connect with real attorneys — free listings for law firms.",
    },
    {
      "@type": "WebSite",
      name: "Justice Connect",
      url: "https://www.tasdi.foo/",
      description:
        "Justice Connect is a free USA attorney directory. Search by state and practice area, read guides, and connect with real attorneys — free listings for law firms.",
    },
    {
      "@type": "HowTo",
      name: "Three steps to the right attorney",
      step: [
        {
          "@type": "HowToStep",
          name: "Search",
          text: "Filter real attorney listings by your state and legal need.",
        },
        {
          "@type": "HowToStep",
          name: "Compare",
          text: "Read profiles, verified client reviews, and credentials.",
        },
        {
          "@type": "HowToStep",
          name: "Connect",
          text: "Call directly or book a consultation — many offer free first meetings.",
        },
      ],
    },
  ],
};

export default async function Home() {
  let attorneys = [];
  let posts = [];
  let settings = {};
  try {
    [attorneys, posts, settings] = await Promise.all([
      listAttorneys({ limit: 6 }),
      listBlogPosts({ limit: 3 }),
      getSettings(),
    ]);
  } catch { /* db not configured yet */ }

  const siteName = settings.site_name || "Justice Connect";
  const tagline = settings.tagline || "Find a USA Attorney You Can Trust";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Free USA Attorney Directory</span>
          <h1>Find an Attorney <em>You Can Trust</em></h1>
          <p className="lead">{tagline}. Search real law firms by state and practice area — free for clients, free for firms to list.</p>
          <SearchForm />
          <div className="hero-stats">
            <div className="hero-stat"><b>50</b><span>States Covered</span></div>
            <div className="hero-stat"><b>16</b><span>Practice Areas</span></div>
            <div className="hero-stat"><b>100%</b><span>Free Listings</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center">
            <span className="eyebrow">Practice Areas</span>
            <h2 className="section-title">What kind of lawyer do you need?</h2>
            <div className="gold-rule" />
          </div>
          <div className="card-grid">
            {PRACTICE_AREAS.map((p) => (
              <div className="card" key={p.slug}>
                <h3><Link href={`/practice-areas/${p.slug}`}>{p.name}</Link></h3>
                <p>{p.tagline}</p>
                <div className="meta"><Link href={`/practice-areas/${p.slug}`}>Learn more →</Link></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--charcoal-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <span className="eyebrow">How It Works</span>
          <h2 className="section-title">Three steps to the right attorney</h2>
          <div className="gold-rule" />
          <div className="card-grid mt-3">
            <div className="card"><h3>1. Search</h3><p>Filter real attorney listings by your state and legal need.</p></div>
            <div className="card"><h3>2. Compare</h3><p>Read profiles, verified client reviews, and credentials.</p></div>
            <div className="card"><h3>3. Connect</h3><p>Call directly or book a consultation — many offer free first meetings.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row space-between mb-3">
            <div>
              <span className="eyebrow">Directory</span>
              <h2 className="section-title">Attorney listings</h2>
            </div>
            <Link href="/search" className="btn btn-ghost">Browse all</Link>
          </div>
          {attorneys.length === 0 ? (
            <EmptyState
              title="Attorney listings are coming soon"
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
      </section>

      {posts.length > 0 && (
        <section className="section" style={{ background: "var(--charcoal-2)", borderTop: "1px solid var(--line)" }}>
          <div className="container">
            <div className="row space-between mb-3">
              <h2 className="section-title">Legal insights</h2>
              <Link href="/blog" className="btn btn-ghost">All articles</Link>
            </div>
            <div className="card-grid">
              {posts.map((p) => (
                <div className="card" key={p.id}>
                  {p.category && <div className="meta">{p.category}</div>}
                  <h3 className="mt-1"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
                  {p.excerpt && <p>{p.excerpt}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container center">
          <span className="eyebrow">For Law Firms</span>
          <h2 className="section-title">Get listed in front of clients — free</h2>
          <p className="section-sub">Add your firm in minutes. Your listing goes live instantly and you can update it anytime.</p>
          <Link href="/list-firm" className="btn btn-solid">List Your Firm</Link>
        </div>
      </section>

      <section className="section" style={{ background: "var(--charcoal-2)", borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <span className="eyebrow">Trusted Resources</span>
          <h2 className="section-title">Official legal help resources</h2>
          <p className="section-sub">If you need free or low-cost legal help, these official resources can point you to licensed attorneys and legal aid in your state.</p>
          <div className="card-grid mt-3">
            <div className="card"><h3><a href="https://www.usa.gov/legal-aid" target="_blank" rel="noopener noreferrer">USA.gov — Find a lawyer for affordable legal aid</a></h3><p>Programs and organizations that give free legal advice and may help you find a free or low-cost attorney.</p></div>
            <div className="card"><h3><a href="https://www.lsc.gov/about-lsc/what-legal-aid/get-legal-help" target="_blank" rel="noopener noreferrer">Legal Services Corporation — I Need Legal Help</a></h3><p>Find legal aid in your community for people with low incomes.</p></div>
            <div className="card"><h3><a href="https://www.lawhelp.org/" target="_blank" rel="noopener noreferrer">LawHelp.org</a></h3><p>Find free legal aid near you and get answers to your legal questions.</p></div>
            <div className="card"><h3><a href="https://abafreelegalanswers.org/" target="_blank" rel="noopener noreferrer">ABA Free Legal Answers</a></h3><p>This site lets people with low incomes ask questions online and have a lawyer answer them. They will not answer questions involving crimes.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
