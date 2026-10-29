import Link from "next/link";

export const metadata = {
  title: "How to Choose the Right Type of Attorney for Your Legal Problem",
  description:
    "General guidance on matching your legal problem to the right kind of attorney: the main practice areas explained in plain language, when a specialist matters, and how to narrow your search.",
  alternates: {
    canonical: "https://www.tasdi.foo/blog/choose-right-type-attorney",
  },
};

export default function ChooseRightTypeAttorneyGuidePage() {
  return (
    <div className="container section">
      <div style={{ maxWidth: 760 }}>
        <Link href="/blog" className="small muted">← All articles</Link>
        <div className="meta mt-2" style={{ color: "var(--gold)" }}>Guides</div>
        <h1 className="section-title mt-1">How to Choose the Right Type of Attorney for Your Legal Problem</h1>
        <p className="small muted mb-3">29 October 2026</p>

        <div className="prose">
          <p><strong>Please note:</strong> this guide is general information only — it is not legal advice, and it does not create an attorney-client relationship. Practice-area labels and rules vary by state, and only a licensed attorney in your state can advise you on your specific situation.</p>

          <p>“I need a lawyer” is only the first half of the question. The second half — what kind — matters just as much, because attorneys tend to focus on particular areas of law, and an attorney who is excellent in one area may have little experience in another. Matching your problem to the right practice area before you start contacting attorneys saves time and helps you find someone who has handled matters like yours before.</p>

          <h2>1. Start with your problem, not a job title</h2>
          <p>Describe your situation in one or two plain sentences before you search: what happened, who is involved, and what outcome you want. That description usually points straight at a practice area. “My landlord will not return my deposit” is a different matter from “I was injured in a car accident,” and each belongs to a different kind of attorney. If you cannot describe the problem clearly yet, write down the facts and the dates first — the pattern usually becomes obvious once it is on paper.</p>
          <p>If your situation crosses two areas — for example, a divorce that also involves a family business — say so up front when you contact an attorney. They can tell you whether they handle both parts or whether you need separate help for one of them.</p>

          <h2>2. The main practice areas, in plain language</h2>
          <p>These are the areas most people encounter. The labels are general, and individual attorneys may describe their own focus more narrowly.</p>
          <p>— <strong>Family law:</strong> divorce, child custody and support, adoption, and related family matters.</p>
          <p>— <strong>Criminal defense:</strong> representing people charged with a crime, from minor charges to serious felonies.</p>
          <p>— <strong>Personal injury:</strong> claims after an accident or injury caused by someone else, such as a car crash or a fall.</p>
          <p>— <strong>Estate planning:</strong> wills, trusts, powers of attorney, and planning for how your property and decisions are handled.</p>
          <p>— <strong>Employment law:</strong> workplace disputes, including wrongful termination, discrimination, and wage issues.</p>
          <p>— <strong>Business law:</strong> forming a company, contracts, partnerships, and disputes between businesses.</p>
          <p>— <strong>Immigration law:</strong> visas, green cards, asylum, and other questions about legal status in the United States.</p>
          <p>— <strong>Real estate law:</strong> buying or selling property, landlord-tenant disputes, and property boundaries.</p>
          <p>— <strong>Bankruptcy law:</strong> options for dealing with debts you cannot pay, and what each option means for your property.</p>
          <p>Some matters also involve specialist niches within these areas — for example, medical malpractice sits inside personal injury but is usually handled by attorneys who focus on it specifically. When a matter looks niche, a specialist is usually worth seeking out.</p>

          <h2>3. Specialist or general practitioner?</h2>
          <p>Many attorneys handle a range of matters, especially outside large cities, and a capable general practitioner can be the right choice for a straightforward matter — a simple will, an uncontested divorce, or a basic contract review. Specialisation matters more when the stakes are high, the law is technical, or the other side will certainly have a specialist — for example, a contested custody case, a serious criminal charge, or a complex injury claim.</p>
          <p>A useful test is to ask how much of the attorney's work is in your kind of matter. If it is a small fraction of what they do, ask whether they would refer you to someone who focuses on it. A good attorney will say so honestly rather than take a matter outside their experience.</p>

          <h2>4. Narrow the search before you contact anyone</h2>
          <p>Once you know the practice area, narrow by the practical facts: the state and county where the matter sits, because licensing and local procedure are state-specific; the language you need to communicate in; and whether you need someone local or whether remote communication is acceptable. Then check the basics for each candidate — that they are licensed in your state and whether any disciplinary history exists — before you book a consultation, and use the consultation itself to judge experience, communication, and fees.</p>
          <p>Be cautious of anyone who promises a specific outcome, asks for a large payment with no written agreement, or pressures you to decide on the spot. Those are warning signs in any practice area.</p>

          <h2>5. When you are still unsure</h2>
          <p>If your problem does not fit neatly into one area, that is common, and it is not a reason to delay. Many attorneys offer an initial conversation in which they will tell you plainly whether your matter is theirs, and if not, which kind of attorney to look for. Your local bar association's referral service can also point you toward the right practice area. Starting with a clear description of your problem — even an uncertain one — is what lets someone else point you in the right direction.</p>

          <h2>Quick checklist</h2>
          <p>— Your problem described in one or two plain sentences</p>
          <p>— The matching practice area identified, including any specialist niche</p>
          <p>— Specialist vs. general practitioner decided based on stakes and complexity</p>
          <p>— Search narrowed by state, location, and language needs</p>
          <p>— License and disciplinary history checked before booking</p>
          <p>— Consultation used to judge experience, communication, and fees</p>
        </div>

        <div className="mt-4" style={{ borderTop: "1px solid var(--line)", paddingTop: "1.5rem" }}>
          <p className="small muted">Need legal help? <Link href="/search">Find an attorney near you →</Link></p>
        </div>
      </div>
    </div>
  );
}
