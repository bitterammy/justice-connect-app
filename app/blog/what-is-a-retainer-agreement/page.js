import Link from "next/link";

export const metadata = {
  title: "What Is a Retainer Agreement and What Should It Include?",
  description:
    "General information on retainer agreements: what they are, the fee and scope terms they usually cover, and what to read carefully before you sign one.",
  alternates: {
    canonical: "https://www.tasdi.foo/blog/what-is-a-retainer-agreement",
  },
};

export default function WhatIsARetainerAgreementPage() {
  return (
    <div className="container section">
      <div style={{ maxWidth: 760 }}>
        <Link href="/blog" className="small muted">← All articles</Link>
        <div className="meta mt-2" style={{ color: "var(--gold)" }}>Guides</div>
        <h1 className="section-title mt-1">What Is a Retainer Agreement and What Should It Include?</h1>
        <p className="small muted mb-3">5 November 2026</p>

        <div className="prose">
          <p><strong>Please note:</strong> this guide is general information only — it is not legal advice, and it does not create an attorney-client relationship. Fee arrangements and the rules governing them vary by state, and only a licensed attorney in your state can advise you on your specific situation.</p>

          <p>When an attorney agrees to represent you, the terms of that work are usually put in writing in a retainer agreement — sometimes called an engagement letter or fee agreement. It is the contract between you and the attorney. It records what the attorney will do, what it will cost, and how the relationship can end. Most people sign one without reading it closely, because it arrives at a stressful moment and looks like routine paperwork. But it is the document that governs the bills you will receive, the decisions the attorney can make on your behalf, and what happens if the relationship breaks down. Reading it before you sign is one of the most useful hours you can spend on your matter.</p>

          <h2>1. The scope of the work</h2>
          <p>The first thing a retainer agreement should do is describe the work itself. Which matter is the attorney handling — a particular dispute, a transaction, a filing — and what is included in that work? A well-drafted agreement names the matter clearly and sets its boundaries: for example, whether it covers negotiation only, or litigation as well; whether it covers one court case, or related matters that may arise from it. If the scope is vague, ask the attorney to be specific before you sign. Work that falls outside the agreed scope may be billed separately, or may need a new agreement altogether, and discovering that halfway through a matter is an avoidable surprise.</p>
          <p>Pay attention to what the agreement says about decisions. Some decisions — whether to accept a settlement, whether to file a particular claim — are yours to make, and the agreement should reflect that the attorney advises while you decide. Others, such as day-to-day procedural steps, are usually left to the attorney's judgement. If the agreement gives the attorney authority to settle or to make commitments on your behalf, make sure that is what you intend; if it does not, understand that the attorney will need your instructions at each turning point, which can slow things down.</p>

          <h2>2. The fees and how they are charged</h2>
          <p>The fee section is the part most clients skip, and the part that causes most disputes later. A retainer agreement should state the fee structure plainly: whether the attorney charges by the hour, a flat fee for defined work, or a contingency fee taken as a share of any recovery. For hourly work, it should state the hourly rate — and whether different rates apply to the attorney, to other attorneys in the firm, and to paralegals or support staff. For flat fees, it should state exactly which work the flat fee covers and what would trigger additional charges.</p>
          <p>Many agreements also involve a retainer payment — money paid up front, held by the attorney and drawn against as work is done. If yours does, the agreement should say how much the retainer is, when it must be replenished, and what happens to any unused balance when the matter ends. It should also explain how you will be billed: how often, in what detail, and what counts as a billable activity. Ask whether short phone calls, emails, and travel time are billed, and in what increments — some firms bill in six-minute units, others in fifteen-minute units, and the difference adds up. Finally, look for the costs beyond the attorney's own fees: court filing fees, copying, postage, expert fees, and similar expenses. The agreement should say whether you pay those as they arise, whether the attorney advances them, and whether you are responsible for them even if the outcome is not in your favour.</p>

          <h2>3. Communication, conflicts, and ending the relationship</h2>
          <p>A good agreement also sets expectations for communication: how often you will hear from the attorney, how quickly calls and emails are returned, and who your day-to-day contact will be if the attorney is unavailable. If you expect weekly updates and the attorney's practice is to report only when something happens, that mismatch is worth surfacing now rather than discovering it months in.</p>
          <p>The agreement should also address conflicts of interest — the attorney's duty to check that representing you does not conflict with an existing client — and confidentiality, including the protection that attorney-client privilege gives your communications. And it should explain how the relationship can end: whether you can terminate the representation, whether the attorney can withdraw and under what conditions, and what you will owe if the matter ends before the work is finished. Some agreements provide that the attorney may keep a lien on your file or on any recovery until outstanding fees are paid; knowing that in advance is far better than learning it when you ask for your papers back.</p>
          <p>None of this requires legal knowledge to check — only a careful read and a willingness to ask questions. If a clause is unclear, ask the attorney to explain it in plain language before you sign. If an answer does not make sense, ask again. An attorney who is reluctant to explain their own agreement is telling you something important, and it is better to learn it before you have signed than after.</p>

          <h2>Quick checklist</h2>
          <p>— Does the agreement clearly describe the matter and the scope of the work, including what is not covered?</p>
          <p>— Does it state the fee structure, the rates for everyone who may bill time, and what counts as billable?</p>
          <p>— If a retainer is paid up front, does it say how much, when it is replenished, and what happens to any unused balance?</p>
          <p>— Does it explain billing frequency, billing increments, and who pays costs such as filing fees and expert fees?</p>
          <p>— Does it set out how decisions are made — which are yours, and which the attorney handles?</p>
          <p>— Does it cover communication, conflicts of interest, confidentiality, and how either side can end the relationship?</p>
          <p>— Have you asked the attorney to explain, in plain language, every clause you do not understand?</p>
        </div>
      </div>
    </div>
  );
}
