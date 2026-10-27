import Link from "next/link";

export const metadata = {
  title: "How to Verify an Attorney's License and Disciplinary History Before You Hire",
  description:
    "General guidance on checking an attorney's bar admission and disciplinary record through your state bar association before you hire — what to look for and what to ask.",
  alternates: {
    canonical: "https://www.tasdi.foo/blog/verify-attorney-license-disciplinary-history",
  },
};

export default function VerifyAttorneyGuidePage() {
  return (
    <div className="container section">
      <div style={{ maxWidth: 760 }}>
        <Link href="/blog" className="small muted">← All articles</Link>
        <div className="meta mt-2" style={{ color: "var(--gold)" }}>Guides</div>
        <h1 className="section-title mt-1">How to Verify an Attorney&apos;s License and Disciplinary History Before You Hire</h1>
        <p className="small muted mb-3">27 October 2026</p>

        <div className="prose">
          <p><strong>Please note:</strong> this guide is general information only — it is not legal advice, and it does not create an attorney-client relationship. Licensing and disciplinary rules vary by state, and only a licensed attorney in your state can advise you on your specific situation.</p>

          <p>Before you hire an attorney, it is worth spending a few minutes confirming two basic things: that the attorney is licensed to practice in your state, and whether any disciplinary action has been taken against them. Both checks are free, and both use public records kept by the state bar association or the state&apos;s attorney licensing authority.</p>

          <h2>1. Confirm the attorney is licensed in your state</h2>
          <p>Attorneys are licensed state by state. An attorney licensed in one state cannot necessarily practise in another, so check the state where your matter will be handled — not just the state where the attorney&apos;s office sits.</p>
          <p>Every state bar association, or the state&apos;s equivalent licensing body, maintains a public directory of licensed attorneys. Search it using the attorney&apos;s full name, and confirm that the listing matches the person you are considering: same name, same firm, and a status showing they are currently admitted and in good standing.</p>

          <h2>2. Check the disciplinary record</h2>
          <p>The same state bar directory usually shows whether an attorney has been disciplined, and often links to the public record of any action. Discipline can range from a private reprimand to suspension or disbarment, and the record normally describes what happened in general terms.</p>
          <p>A single old, minor entry does not automatically mean an attorney is a bad choice — but it is something you are entitled to know about, and to ask about. If the record shows a suspension, disbarment, or a pattern of complaints, treat that as a serious warning sign and consider other options.</p>

          <h2>3. Ask the attorney directly</h2>
          <p>Verification is not only about databases. In your first conversation, it is reasonable to ask:</p>
          <p>— Are you licensed in this state, and in good standing with the state bar?</p>
          <p>— Have you ever been disciplined, and if so, what happened?</p>
          <p>— Have you handled matters like mine before, and what were the realistic outcomes?</p>
          <p>A straightforward attorney will answer these questions plainly. Evasiveness about licensing or discipline is itself useful information.</p>

          <h2>4. Watch for warning signs</h2>
          <p>Be cautious if an attorney will not give you their full name or bar number, pressures you to sign or pay immediately, guarantees a specific outcome, or asks you to pay in cash with no written fee agreement. No attorney can guarantee how a case will end, and fee arrangements should always be put in writing before work begins.</p>

          <h2>5. Keep a record of what you checked</h2>
          <p>Note the date you checked, the directory you used, and what it showed. If anything about the listing looks inconsistent — a different firm name, a different state, or a status that is not clearly active — ask the attorney to explain it before you proceed, and consider a second opinion.</p>

          <h2>Quick checklist</h2>
          <p>— Attorney&apos;s name and firm match the state bar directory listing</p>
          <p>— Licensed and in good standing in the state where your matter will be handled</p>
          <p>— Disciplinary record checked, and any entries understood</p>
          <p>— Direct questions about licensing and discipline answered plainly</p>
          <p>— Fee arrangement discussed and put in writing before work begins</p>
        </div>

        <div className="mt-4" style={{ borderTop: "1px solid var(--line)", paddingTop: "1.5rem" }}>
          <p className="small muted">Need legal help? <Link href="/search">Find an attorney near you →</Link></p>
        </div>
      </div>
    </div>
  );
}
