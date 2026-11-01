import Link from "next/link";

export const metadata = {
  title: "What to Do If You Cannot Afford an Attorney",
  description:
    "General information on options when hiring an attorney feels out of reach: legal aid, pro bono help, law school clinics, limited-scope services, payment plans, and contingency fees — and how to find them.",
  alternates: {
    canonical: "https://www.tasdi.foo/blog/cannot-afford-attorney-options",
  },
};

export default function CannotAffordAttorneyGuidePage() {
  return (
    <div className="container section">
      <div style={{ maxWidth: 760 }}>
        <Link href="/blog" className="small muted">← All articles</Link>
        <div className="meta mt-2" style={{ color: "var(--gold)" }}>Guides</div>
        <h1 className="section-title mt-1">What to Do If You Cannot Afford an Attorney</h1>
        <p className="small muted mb-3">1 November 2026</p>

        <div className="prose">
          <p><strong>Please note:</strong> this guide is general information only — it is not legal advice, and it does not create an attorney-client relationship. Costs, eligibility rules, and available services vary by state and by the kind of legal problem, and only a licensed attorney in your state can advise you on your specific situation.</p>

          <p>Needing an attorney while worrying about the cost is a common situation, and it does not mean you have no options. Several routes exist precisely for people who cannot pay a private attorney's full fee — but they differ in who qualifies, what they cover, and how long they take to arrange. Knowing the routes in advance helps you try the right ones first, instead of giving up at the first expensive quote.</p>

          <h2>1. Start by understanding what you actually need</h2>
          <p>Not every legal problem needs the same amount of attorney time. A single question answered in one consultation is very different from a contested case that runs for months. Before you look for help, write down your situation in a few plain sentences: what happened, what you need resolved, and any deadlines you already know about. That short summary is what every service below will ask for first, and having it ready saves repeated explanations.</p>
          <p>It also helps to know which parts you could handle yourself. Some people need full representation; others mainly need a document reviewed, a letter drafted, or a clear explanation of their options before they act. The cheaper routes below often fit the second group better than the first, so be honest with yourself about which group you are in.</p>

          <h2>2. Legal aid organisations</h2>
          <p>Legal aid organisations provide free legal help to people who meet income-based eligibility rules, usually focusing on civil matters such as housing, family, benefits, and consumer problems. Eligibility is generally tied to household income, and demand usually exceeds supply, so waiting lists are common. If you think you may qualify, apply early — do not wait until a deadline is close — and be ready to show basic information about your income and household.</p>
          <p>Because legal aid focuses on civil matters, it typically does not cover every kind of case. If your problem falls outside what a legal aid organisation handles, ask them anyway: they often know which other service in your area does handle it, and a referral from them carries weight.</p>

          <h2>3. Pro bono help and lawyer referral services</h2>
          <p>Many attorneys take some cases free of charge — known as pro bono work — often through their local bar association or a legal aid organisation that matches cases to volunteers. Pro bono places are limited and usually prioritised by urgency and need, so it is worth asking, but worth having a backup plan too. Your state or local bar association's lawyer referral service can also point you toward attorneys who offer a low-cost or free first consultation, and toward any local pro bono programmes.</p>
          <p>When you contact a referral service, describe your problem and your budget plainly. They match people every day, and a clear description gets you to the right kind of help faster than a vague one.</p>

          <h2>4. Law school clinics</h2>
          <p>Many law schools run clinics in which law students, supervised by licensed attorneys, help real clients with real cases — often in areas such as housing, immigration, family, or small business matters. Clinics are usually free or very low cost, and they can be thorough, because students have time to work carefully on a small number of cases. The trade-off is pace: clinics run on academic schedules, so they may not suit an urgent deadline, and they may only take cases in their subject areas.</p>
          <p>If there is a law school near you, check whether it runs a clinic in your area of need, and ask what its intake process and timetable look like before you rely on it.</p>

          <h2>5. Limited-scope help and payment plans</h2>
          <p>Full representation is not the only way to hire an attorney. Some attorneys offer limited-scope, or unbundled, services: you pay only for a defined piece of work, such as reviewing a document, drafting a letter, or coaching you before a hearing, while you handle the rest yourself. This can cut the cost substantially when you mainly need expert input at one stage rather than throughout.</p>
          <p>Separately, some attorneys offer payment plans, spreading their fee over time rather than requiring it all up front. If cost is the barrier, ask directly: what the total fee would be, what payment options exist, and what exactly is included. Get the agreement in writing before work begins, and make sure you understand what happens if you cannot keep up a payment — a clear written agreement protects both sides.</p>

          <h2>6. Contingency fees — for some kinds of cases only</h2>
          <p>In some kinds of cases, most commonly personal injury claims, attorneys may work on contingency: they are paid a percentage of what you recover, and if you recover nothing, you generally owe no attorney fee. That arrangement removes the upfront cost barrier, but it applies only to cases where money is being claimed, and the percentage and the treatment of case expenses should be agreed in writing in advance. It is not available for most family, criminal, or housing matters, so do not assume it applies to your case — ask whether it does.</p>

          <h2>7. Criminal charges: the right to appointed counsel</h2>
          <p>If you face criminal charges and cannot afford an attorney, you may be entitled to a court-appointed attorney, often called a public defender. Eligibility is decided by the court, usually based on your finances, and you typically request one at your first court appearance. If you are facing criminal charges, tell the court at the earliest opportunity that you cannot afford counsel, rather than trying to handle the case alone while you look for other help.</p>

          <h2>8. Free information while you look</h2>
          <p>While you search for help, courts and bar associations publish free general information — court self-help centres, plain-language guides to procedures, and standard forms. These resources explain processes; they do not give advice about your specific situation, and they are no substitute for an attorney where one is needed. Use them to understand the steps and the deadlines, and to prepare the documents and facts an attorney or clinic will ask for.</p>
          <p>Be cautious of anyone who demands a large payment up front with no written agreement, promises a specific outcome, or pressures you to decide immediately. Those are warning signs whatever the price being quoted.</p>

          <h2>Quick checklist</h2>
          <p>— Your problem written down in a few plain sentences, with any deadlines noted</p>
          <p>— Legal aid eligibility checked, and an application made early if you may qualify</p>
          <p>— Bar association referral service contacted for pro bono or low-cost options</p>
          <p>— Nearby law school clinics checked for your subject area</p>
          <p>— Limited-scope help or a payment plan asked about, with any agreement in writing</p>
          <p>— For money claims, contingency fees asked about; for criminal charges, appointed counsel requested at the first appearance</p>
        </div>

        <div className="mt-4" style={{ borderTop: "1px solid var(--line)", paddingTop: "1.5rem" }}>
          <p className="small muted">Need legal help? <Link href="/search">Find an attorney near you →</Link></p>
        </div>
      </div>
    </div>
  );
}
