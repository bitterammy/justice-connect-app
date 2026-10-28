import Link from "next/link";
import { PRACTICE_AREAS } from "@/lib/content";

export default function SiteFooter({ siteName, contactEmail, contactPhone }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>{siteName}</h3>
            <p className="small muted" style={{ maxWidth: 300 }}>
              A free USA attorney directory. Search by state and practice area,
              read legal guides, and connect directly with real law firms.
            </p>
            {(contactEmail || contactPhone) && (
              <p className="small mt-2">
                {contactEmail && <span className="muted">{contactEmail}<br /></span>}
                {contactPhone && <span className="muted">{contactPhone}</span>}
              </p>
            )}
          </div>
          <div>
            <h3>Practice Areas</h3>
            <ul>
              {PRACTICE_AREAS.slice(0, 6).map((p) => (
                <li key={p.slug}><Link href={`/practice-areas/${p.slug}`}>{p.name}</Link></li>
              ))}
              <li><Link href="/practice-areas">View all →</Link></li>
            </ul>
          </div>
          <div>
            <h3>Directory</h3>
            <ul>
              <li><Link href="/search">Find a Lawyer</Link></li>
              <li><Link href="/states">Browse by State</Link></li>
              <li><Link href="/list-firm">List Your Firm (Free)</Link></li>
              <li><Link href="/blog">Legal Insights</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/admin/login" style={{ opacity: 0.55 }}>Admin</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} {siteName}. All rights reserved.</span>
          <span>Attorney listings are submitted by the firms themselves.</span>
        </div>
      </div>
    </footer>
  );
}
