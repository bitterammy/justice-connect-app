import Link from "next/link";
import { notFound } from "next/navigation";
import Stars from "@/components/Stars";
import { FavoriteButton, ReviewForm, AppointmentForm } from "@/components/AttorneyActions";
import { getAttorney, listReviews, isFavorite } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { practiceAreaBySlug, stateName } from "@/lib/content";

export const dynamic = "force-dynamic";

function initials(name) {
  return String(name || "?").split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

export default async function AttorneyPage({ params }) {
  const session = await getServerSession(authOptions);
  let attorney = null;
  let reviews = [];
  let fav = false;
  try {
    attorney = await getAttorney(params.id);
    if (attorney) {
      reviews = await listReviews({ attorneyId: attorney.id, status: "approved" });
      if (session?.user?.id) fav = await isFavorite(session.user.id, attorney.id);
    }
  } catch { /* db not configured */ }
  if (!attorney) notFound();

  const areas = (attorney.practiceAreas || []).map((s) => practiceAreaBySlug(s)?.name || s);

  return (
    <>
      <section className="profile-hero">
        <div className="container">
          <Link href="/search" className="small muted">← Back to search</Link>
          <div className="row mt-2" style={{ gap: "1.6rem" }}>
            <div className="avatar" style={{ width: 96, height: 96, fontSize: "2.2rem" }}>{initials(attorney.name)}</div>
            <div>
              <h1 style={{ fontSize: "2.2rem" }}>{attorney.name}</h1>
              {attorney.firm && <p className="muted">{attorney.firm}</p>}
              <div className="mt-1"><Stars rating={attorney.rating} count={attorney.reviewCount} /></div>
              <p className="small mt-1" style={{ color: "var(--gold)" }}>
                {[attorney.city, stateName(attorney.state)].filter(Boolean).join(", ")}
              </p>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <FavoriteButton attorneyId={attorney.id} initialFav={fav} />
            </div>
          </div>
        </div>
      </section>

      <div className="container section-sm">
        <div className="profile-grid">
          <div>
            {attorney.bio && (
              <><h2>About</h2><div className="prose mt-1"><p>{attorney.bio}</p></div></>
            )}
            <h2 className="mt-3">Details</h2>
            <dl className="detail-list">
              {attorney.firm && <div><dt>Firm</dt><dd>{attorney.firm}</dd></div>}
              {attorney.phone && <div><dt>Phone</dt><dd><a href={`tel:${attorney.phone}`}>{attorney.phone}</a></dd></div>}
              {attorney.email && <div><dt>Email</dt><dd><a href={`mailto:${attorney.email}`}>{attorney.email}</a></dd></div>}
              {attorney.website && <div><dt>Website</dt><dd><a href={attorney.website} target="_blank" rel="noreferrer">{attorney.website}</a></dd></div>}
              {attorney.address && <div><dt>Address</dt><dd>{attorney.address}{attorney.city ? `, ${attorney.city}` : ""}, {stateName(attorney.state)}</dd></div>}
              {attorney.education && <div><dt>Education</dt><dd>{attorney.education}</dd></div>}
              {attorney.barAdmissions && <div><dt>Bar admissions</dt><dd>{attorney.barAdmissions}</dd></div>}
              {attorney.languages && <div><dt>Languages</dt><dd>{attorney.languages}</dd></div>}
              {attorney.yearsExperience != null && <div><dt>Experience</dt><dd>{attorney.yearsExperience} years</dd></div>}
              <div><dt>Free consultation</dt><dd>{attorney.freeConsult ? "Yes" : "Not specified"}</dd></div>
            </dl>

            {areas.length > 0 && (
              <><h2 className="mt-3">Practice areas</h2>
              <div className="tags mt-1">{areas.map((a) => <span key={a} className="tag">{a}</span>)}</div></>
            )}

            <h2 className="mt-3">Client reviews ({reviews.length})</h2>
            {reviews.length === 0 ? (
              <p className="muted mt-1">No reviews yet. Be the first to share your experience.</p>
            ) : reviews.map((r) => (
              <div className="review" key={r.id}>
                <div className="review-head">
                  <b>{r.userName}</b>
                  <span className="review-date">{String(r.createdAt).slice(0, 10)}</span>
                </div>
                <Stars rating={r.rating} />
                <p className="mt-1">{r.text}</p>
              </div>
            ))}

            <div className="mt-3"><ReviewForm attorneyId={attorney.id} /></div>
          </div>

          <div>
            <div className="side-card">
              <h3>Contact</h3>
              {attorney.phone ? (
                <a href={`tel:${attorney.phone}`} className="btn btn-solid" style={{ width: "100%", textAlign: "center" }}>Call {attorney.phone}</a>
              ) : <p className="muted small">No phone listed.</p>}
              {attorney.email && <p className="small mt-2"><a href={`mailto:${attorney.email}`}>{attorney.email}</a></p>}
            </div>
            <div className="side-card">
              <AppointmentForm attorneyId={attorney.id} attorneyName={attorney.name} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
