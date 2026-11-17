import Link from "next/link";

export const metadata = {
  title: "What Is Probate and How Long Does It Take?",
  description:
    "Probate is the court-supervised process of settling a deceased person's estate. What it involves, the steps and timeline, what affects how long it takes, and when you may not need it.",
  alternates: {
    canonical: "https://www.tasdi.foo/blog/what-is-probate-and-how-long-does-it-take",
  },
};

export default function WhatIsProbatePage() {
  return (
    <div className="container section">
      <div style={{ maxWidth: 760 }}>
        <Link href="/blog" className="small muted">← All articles</Link>
        <div className="meta mt-2" style={{ color: "var(--gold)" }}>Guides</div>
        <h1 className="section-title mt-1">What Is Probate and How Long Does It Take?</h1>
        <p className="small muted mb-3">17 November 2026</p>

        <div className="prose">
          <p><strong>Please note:</strong> this guide is general information only — it is not legal advice, and it does not create an attorney-client relationship. Probate law varies by state, and whether an estate needs probate, which procedure applies and how long it takes depend on the law of the state where the person lived and where the property is located. Only a licensed attorney in your state can advise you.</p>

          <p><strong>Short answer:</strong> probate is the court-supervised process of settling a deceased person&#39;s estate — validating the will if there is one, appointing someone to manage the estate, identifying and valuing the assets, paying valid debts and taxes, and distributing what remains to the beneficiaries or heirs. A typical uncontested estate takes about 6 to 18 months.</p>

          <h2>What probate is</h2>
          <p>Probate is the court-supervised process of settling a deceased person&#39;s estate. When a person dies, their property does not automatically pass to their family. Someone needs legal authority to collect the assets, pay what is owed, and hand the rest to the right people.</p>
          <p>The person appointed to manage the estate is called an executor when a will names one, and an administrator when there is no will. The court issues a document — letters testamentary or letters of administration — proving that authority. Banks will ask to see it before releasing funds.</p>
          <p>Probate protects everyone involved. It protects beneficiaries, because the court checks the will is valid; creditors, by giving them a formal way to claim; and the executor, because the court&#39;s final approval is a clear record that they acted properly.</p>

          <h2>When probate is needed — and when it is not</h2>
          <p>Probate is needed when the deceased owned assets in their own name alone — a house, a bank account, or a car titled only in their name. If the estate consists only of assets that pass automatically, such as jointly owned property or accounts with named beneficiaries, probate may not be needed at all.</p>

          <h2>The probate process, step by step</h2>
          <p>Probate follows a similar sequence in most states, although the forms and deadlines differ.</p>
          <p><strong>1. File a petition with the probate court.</strong> The person named as executor — or a close family member if there is no will — files a petition to open probate. The petition includes the death certificate and the original will.</p>
          <p><strong>2. Validate the will.</strong> The court examines the will to confirm it is genuine and was properly made — signed, witnessed as the state requires, and made when the person had the mental capacity to do so.</p>
          <p><strong>3. Appoint the executor or administrator.</strong> Once the will is accepted, the court appoints the executor named in it. If there is no will, the court appoints an administrator, usually a close relative, following the priority order set by state law.</p>
          <p><strong>4. Notify heirs, beneficiaries and creditors.</strong> The executor must notify the people named in the will, the heirs who would inherit without one, and the creditors. Creditors then have a limited period to file claims, typically 3 to 6 months depending on the state.</p>
          <p><strong>5. Inventory and value the assets.</strong> The executor must identify everything the deceased owned, have it valued, and file an inventory with the court.</p>
          <p><strong>6. Pay debts and taxes.</strong> Valid creditor claims are paid from the estate&#39;s funds, in the order of priority set by state law. The executor also files the deceased person&#39;s final income tax return. Debts are paid before anything is distributed.</p>
          <p><strong>7. Distribute the remaining assets.</strong> Once debts and taxes are settled, the executor distributes what remains according to the will, or according to state intestacy law if there is no will. This can involve transferring titles and selling assets that cannot easily be divided, such as a house.</p>
          <p><strong>8. Close the estate.</strong> Finally, the executor files a final account with the court, showing everything that came in, was paid out, and was distributed. If the court approves it, the estate is closed and the executor is discharged.</p>

          <h2>How long does probate take?</h2>
          <p>The timeline depends on the size and complexity of the estate, whether anyone contests it, and the court&#39;s workload.</p>
          <table>
            <tr><th>Stage</th><th>Typical time</th><th>What can slow it down</th></tr>
            <tr><td>Opening probate; appointing executor</td><td>1 to 2 months</td><td>Court delays</td></tr>
            <tr><td>Creditor claim period</td><td>3 to 6 months</td><td>Fixed by state law</td></tr>
            <tr><td>Inventory and valuation</td><td>1 to 3 months</td><td>Valuations</td></tr>
            <tr><td>Paying debts and taxes</td><td>1 to 3 months</td><td>Disputed claims</td></tr>
            <tr><td>Distribution and closing</td><td>1 to 3 months</td><td>Family disputes</td></tr>
          </table>
          <p>Taken together, the stages give the familiar overall picture: a typical uncontested estate takes about 6 to 18 months from filing to closing. Simple small estates can close in as little as 4 to 6 months in some states. A commonly cited expectation is roughly 18 months, but that is an expectation, not a promise. Complex or contested estates can take two years or more.</p>
          <p>The creditor claim period is the single biggest reason probate cannot be rushed. Creditors typically have 3 to 6 months to make a claim, depending on the state, so the estate cannot be safely closed before that period ends.</p>

          <h2>What makes probate take longer</h2>
          <p><strong>Disputes.</strong> A contested will, a disagreement among beneficiaries, or a challenge to the executor&#39;s decisions can turn a straightforward estate into a long court case. Even a single objection can add many months.</p>
          <p><strong>Debts and claims.</strong> If the estate has more debts than expected, or if a creditor files a claim the executor disputes, the estate cannot close until the claim is resolved.</p>
          <p><strong>Property that is hard to sell or divide.</strong> A house that needs repairs before it can be sold, a family business with no obvious buyer, or property in more than one state — each adds time. Property in another state usually requires a second proceeding there.</p>
          <p><strong>Missing information and court backlogs.</strong> An executor who cannot find the will, does not know where the accounts are, or cannot locate the heirs will lose months to searching. Court backlogs add delay too.</p>

          <h2>Probate without a will: dying intestate</h2>
          <p>When a person dies without a valid will, they have died intestate, and the estate is settled under the state&#39;s intestacy law. The court appoints an administrator, usually a close relative, who performs the same tasks an executor would.</p>
          <p>The difference is who receives what. Without a will, the state decides: typically the surviving spouse and children first, then parents, then siblings, then more distant relatives, in proportions fixed by the state. The result may not match what the person would have wanted — a long-term partner who was never married to the deceased, for example, usually receives nothing. Because the state decides the distribution, intestate estates typically take longer than comparable estates with a will.</p>

          <h2>Small estates and simplified procedures</h2>
          <p>Many states offer a simplified or summary probate procedure for small estates, designed to let modest estates be settled without the full court process. Each state sets its own value threshold below which it is available, and the threshold varies from state to state, so no single figure applies everywhere. Some states allow the heirs to collect the assets with a sworn affidavit. But it applies only below the state threshold and when there is no dispute among the heirs.</p>

          <h2>What assets skip probate</h2>
          <p>Not everything a person owns goes through probate. Jointly owned property — a house or bank account held jointly with a right of survivorship — passes automatically to the surviving owner. Accounts with named beneficiaries, such as life insurance policies and retirement accounts like an IRA or a 401(k), pay directly to the named beneficiary — but only if the designation is up to date. Assets held in a living trust are owned by the trust, not by the person, so they pass to the named beneficiaries without going through probate. And payable-on-death and transfer-on-death accounts let a named person claim the asset by presenting a death certificate, bypassing probate entirely.</p>
          <p>Because these assets pass outside probate, a person whose wealth is mostly held in this way may leave very little for the probate court to deal with. But the will has no power over these assets: a life insurance policy with an ex-spouse still named as beneficiary will pay that person, whatever the will says. Keeping beneficiary designations in line with the will matters.</p>

          <h2>How much does probate cost?</h2>
          <p>Probate costs vary by state and by the size and complexity of the estate, and there is no single figure that applies everywhere. The costs typically include court filing fees, the executor&#39;s fee, attorney fees, and valuation costs. Some states set fees by statute as a percentage of the estate&#39;s value; in others, fees must simply be reasonable, and the court approves them. Because the rules differ so much, this guide quotes no specific fee amount or percentage for any state.</p>
          <p>The cost tends to rise with the size and complexity of the estate: a small estate with a valid will and cooperative beneficiaries will cost far less than a large estate with property in several states or a contested will. Attorney fees are usually the largest single cost, and in many states they are paid from the estate itself rather than by the family. Our guide to <Link href="/blog/choose-right-type-attorney">how to choose the right type of attorney</Link> explains how to find the right lawyer for an estate matter, and our guide to <Link href="/blog/what-to-expect-first-consultation">what to expect at your first consultation</Link> explains what that first meeting looks like. Filing deadlines vary by state too, and our guide to <Link href="/blog/what-is-a-statute-of-limitations">the statute of limitations</Link> explains why deadlines differ.</p>

          <h2>How people avoid probate</h2>
          <p>Many people plan their affairs so that little or nothing needs to go through probate, usually to save their family time and cost and to keep the estate private — probate records are public. The main methods are the ones described above: owning property jointly with a right of survivorship, naming beneficiaries on life insurance and retirement accounts, using payable-on-death and transfer-on-death designations, and placing assets in a living trust. A living trust is the most complete method, because it can cover almost any asset — but assets must actually be transferred into it, and a trust that is never funded does nothing.</p>
          <p>None of these methods is right for everyone: probate provides court supervision that protects beneficiaries, and the right approach depends on the assets, the family situation, and the law of the state. An estate planning attorney can explain which combination fits a particular situation, and our guide to <Link href="/blog/what-is-a-power-of-attorney-and-when-do-you-need-one">what a power of attorney is and when you need one</Link> covers another document that forms part of the same planning.</p>

          <h2>Frequently asked questions</h2>
          <h3>How long does probate take?</h3>
          <p>A typical uncontested estate takes about 6 to 18 months; simple small estates can close in as little as 4 to 6 months in some states. Complex or contested estates can take two years or more.</p>
          <h3>Do all estates have to go through probate?</h3>
          <p>No. Estates made up only of assets that pass outside probate — jointly owned property, accounts with named beneficiaries, assets in a living trust, and payable-on-death accounts — may need no probate at all. Many states also offer a simplified procedure for small estates.</p>
          <h3>What happens if there is no will?</h3>
          <p>The estate is settled under state intestacy law. The court appoints an administrator, usually a close relative, and the state decides who inherits and in what proportions — typically the surviving spouse and children first.</p>
          <h3>Can probate be avoided?</h3>
          <p>Often, yes, at least in part. Joint ownership, beneficiary designations, payable-on-death and transfer-on-death designations, and living trusts all let assets pass outside probate. Whether avoiding probate is the right goal depends on the estate and the state.</p>
          <h3>Who pays for probate?</h3>
          <p>Probate costs — court filing fees, executor and attorney fees, and valuation costs — are normally paid from the estate itself, not by the family personally. Debts and taxes are also paid from the estate before anything is distributed.</p>

          <h2>Quick checklist</h2>
          <ul>
            <li>Have you found the will, if there is one, and the death certificate?</li>
            <li>Have you checked whether the estate needs probate?</li>
            <li>Have you identified who should file the petition?</li>
            <li>Have you organised a list of all the assets, accounts, policies and debts?</li>
            <li>Have you noted your state&#39;s deadlines, including the creditor claim period?</li>
            <li>Have you checked whether a simplified procedure for small estates is available?</li>
            <li>Have you spoken to a licensed attorney in your state before distributing anything?</li>
          </ul>
          <p>Probate is a process, not a single event: a sequence of steps, each done in the right order, under the court&#39;s supervision, and on the law&#39;s timetable. If you are settling an estate, start by finding the will and listing the assets, and get advice from a licensed attorney early. If you need help finding one, our guide to <Link href="/blog/choose-right-type-attorney">how to choose the right type of attorney</Link> explains how to find the right lawyer, and <Link href="/search">finding an attorney near you</Link> is the next step.</p>
        </div>
        <div className="mt-4" style={{ borderTop: "1px solid var(--line)", paddingTop: "1.5rem" }}>
          <p className="small muted">Need legal help? <Link href="/search">Find an attorney near you →</Link></p>
        </div>
      </div>
    </div>
  );
}
