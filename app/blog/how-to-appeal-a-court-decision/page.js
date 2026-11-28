import Link from "next/link";

export const metadata = {
  title: "How to Appeal a Court Decision — Steps, Deadlines and What Happens Next",
  description:
    "How to appeal a court decision: steps, deadlines, the record on appeal, briefs, and the possible outcomes. General information, not legal advice.",
  alternates: {
    canonical: "https://www.tasdi.foo/blog/how-to-appeal-a-court-decision",
  },
};

export default function HowToAppealACourtDecisionPage() {
  return (
    <div className="container section">
      <div style={{ maxWidth: 760 }}>
        <Link href="/blog" className="small muted">← All articles</Link>
        <div className="meta mt-2" style={{ color: "var(--gold)" }}>Guides</div>
        <h1 className="section-title mt-1">How to Appeal a Court Decision — Steps, Deadlines and What Happens Next</h1>
        <p className="small muted mb-3">28 November 2026</p>

        <div className="prose">
          <p><strong>Please note:</strong> this guide is general information only — it is not legal advice, and it does not create an attorney-client relationship. Appeal law, deadlines and procedures vary by state and by court. For advice about your own case, speak to a licensed appellate attorney.</p>

          <p><strong>Short answer:</strong> to appeal a court decision, file a notice of appeal with the trial court clerk within the deadline that applies to your case — often 30 days in a federal civil case. The higher court then reviews the written record for legal mistakes and can affirm, reverse or send the case back.</p>

          <p>Losing a case in court can feel final, but it is not always the end. If the judge or jury made a legal mistake, the losing party can usually ask a higher court to review it. That is an appeal — and while it can correct a genuine error, it is not a second trial, and it runs on deadlines that are often short and unforgiving. A single missed deadline can end an appeal before it begins.</p>

          <h2>What is an appeal?</h2>
          <p>An appeal asks a higher court to review a lower court&apos;s decision for legal mistakes. The party who brings the appeal is the appellant; the other side is the appellee. The appellate court does not re-hear the case. It does not call witnesses, listen to testimony again, or take new evidence in the usual case. Instead, it looks at the written record from the trial court — the transcript, the documents filed, the evidence admitted and the rulings made — and asks whether the law was applied correctly.</p>
          <p>This is the most important thing to understand. If you lost because the judge made an error about the law, allowed evidence that should have been excluded, or gave the jury the wrong instructions, an appeal may help. If you lost because the jury believed the other side&apos;s witnesses rather than yours, an appeal is much less likely to change the result, because appellate courts give deference to the trial court&apos;s factual findings. The record is everything in an appeal.</p>

          <h2>What can you appeal — and when?</h2>
          <p>In general, you can only appeal after a final judgment — when the trial court has finished deciding the case and entered a judgment that resolves the parties&apos; claims. Most rulings made during a case cannot be appealed until the case ends, even if they seem wrong at the time: an unfavourable ruling on a discovery dispute, for example, usually has to wait until the final judgment. This is sometimes called the final judgment rule, and it exists because courts do not want appeals interrupting every stage of a trial.</p>
          <p>There are exceptions. Some orders can be appealed immediately, even before the case ends — in federal court, for example, orders granting or denying an injunction can generally be appealed straight away. Whether an order can be appealed immediately depends on the rules of the court and the type of order, so this is one of the first questions to check with an attorney.</p>
          <p>Not every decision can be appealed at all. Some decisions are final by law: decisions of the highest court in a jurisdiction generally cannot be appealed further within that system. In criminal cases, the prosecution&apos;s ability to appeal is much more limited than a defendant&apos;s, because an acquitted defendant cannot be tried again for the same offence. So the question is never simply &quot;can I appeal?&quot; — it is &quot;can this decision, in this court, in this type of case, be appealed?&quot;</p>

          <h2>How long do you have to appeal?</h2>
          <p>Appeal deadlines are short, strict and vary by court and case type. Missing the deadline almost always ends the appeal — courts rarely accept late notices, however good the reason. The clock usually starts when the judgment is formally entered by the clerk, not when the judge announces the decision from the bench.</p>
          <p>Certain timely post-trial motions can pause the clock. In federal court, for example, a motion for a new trial, or a motion to alter or amend the judgment filed within 28 days of entry, can delay the start of the appeal period until the court rules on the motion. But not every motion has this effect, so never assume the clock has stopped.</p>
          <table>
            <tr><th>Case type</th><th>Notice of appeal deadline</th></tr>
            <tr><td>Federal civil case</td><td>Generally 30 days after the final judgment is entered</td></tr>
            <tr><td>Federal civil case with the United States, a federal agency or a federal officer as a party</td><td>Generally 60 days after the final judgment is entered</td></tr>
            <tr><td>Federal criminal case (defendant appealing)</td><td>Generally 14 days after the judgment is entered</td></tr>
            <tr><td>State court cases</td><td>Vary widely — as few as 10 days, as many as 90 days in some places</td></tr>
          </table>
          <p>The table is a starting point, not a substitute for checking the rules that apply to your case. Because the cost of getting it wrong is losing the appeal entirely, the deadline should be the first thing you pin down after a judgment is entered — and it is worth having an attorney confirm it in writing.</p>

          <h2>How do you start an appeal?</h2>
          <p><strong>1. Check whether the decision can be appealed.</strong> Confirm that a final judgment has been entered, or that the order is one of the few kinds that can be appealed immediately. If the case is still going on, an appeal may have to wait.</p>
          <p><strong>2. Find the deadline.</strong> Work out the deadline for your court and case type, and confirm when the judgment was formally entered by the clerk. Put the date in writing. If any post-trial motion has been filed, ask whether it pauses the clock — and do not rely on it doing so until the rules confirm it.</p>
          <p><strong>3. File the notice of appeal.</strong> In federal court, the notice of appeal is filed with the clerk of the trial (district) court, not directly with the court of appeals. The notice is usually short: it identifies the judgment being appealed and the parties. It does not argue the case — that comes later, in the brief. In federal court the filing fee is $605 ($600 docketing fee plus a $5 statutory fee); state court fees differ. Fee waivers exist for people who cannot afford the fee — see our guide to <Link href="/blog/cannot-afford-attorney-options">what to do if you cannot afford an attorney</Link>.</p>
          <p><strong>4. Arrange the record on appeal.</strong> Once the notice is filed, the record is assembled — the transcript, the documents, the exhibits and the rulings. The appellant is usually responsible for making sure the record includes everything the appeal depends on. If part of the record is missing, the appellate court cannot consider it.</p>
          <p><strong>5. Write the appellant&apos;s brief.</strong> The brief is the heart of an appeal: a written argument that identifies the errors the trial court is said to have made, explains why they were wrong in law, and shows how they affected the outcome. It must point to specific parts of the record and raise the issues that were raised at trial — objections that were not made at trial are often lost on appeal. The other side then files a response brief, and the appellant may file a short reply.</p>
          <p><strong>6. Oral argument (not in every case).</strong> The court may hear oral argument from both sides, or it may decide the case on the papers alone — many appeals are decided without oral argument. When argument is held, it is usually short, and the judges ask questions about the briefs.</p>
          <p><strong>7. The court decides.</strong> The appellate court issues a written decision, often weeks or months after the briefing is complete.</p>

          <h2>How does an appellate court decide a case?</h2>
          <p>Appellate courts apply different standards of review to different kinds of questions, and the standard often decides the outcome. Legal questions — for example, what a statute means, or whether the judge applied the right legal test — are reviewed fresh: the appellate court decides the question for itself, giving no deference to the trial court&apos;s view of the law. This is sometimes called de novo review, and it is the most favourable standard for the party appealing.</p>
          <p>Factual findings are treated very differently. A trial judge or jury saw the witnesses, weighed their credibility and decided what happened. An appellate court, working only from a written record, gives those findings deference and will usually only overturn them if they are clearly wrong. This is why an appeal that turns on who the jury believed is a difficult one.</p>
          <p>Decisions within the trial judge&apos;s discretion — for example, how a hearing was managed, or whether a borderline piece of evidence should be admitted — are reviewed for abuse of discretion. The appellate court asks whether the judge&apos;s choice was reasonable, not whether it was the choice the appellate court would have made. Only a decision that falls outside the range of reasonable choices is overturned. If an issue was never raised at trial — if no objection was made — the appellate court will usually refuse to consider it.</p>

          <h2>What are the possible outcomes of an appeal?</h2>
          <p>There are four main outcomes. The court may <strong>affirm</strong> the decision, meaning the lower court&apos;s judgment stands and nothing changes. It may <strong>reverse</strong> the decision, meaning the judgment is overturned. It may <strong>remand</strong> the case, meaning it sends it back to the lower court with instructions — sometimes for a new trial, sometimes to reconsider the case in light of the ruling. And it may <strong>vacate</strong> the decision, meaning it sets the judgment aside.</p>
          <p>The outcome is not always all or nothing. A court may affirm part of a judgment and reverse another part, or reverse on one issue and remand for a decision on the rest. In some cases the court may find an error occurred but that it was harmless — it did not affect the outcome — and affirm the judgment anyway. And a remand for a new trial means the case goes back to the trial court, and the parties may face a second trial.</p>

          <h2>Does an appeal stop the judgment being enforced?</h2>
          <p>An appeal does not automatically stop the judgment being enforced. Filing a notice of appeal does not pause the other side from collecting on a money judgment or enforcing an order. If you want the judgment paused while the appeal runs, you usually have to ask for a stay, which the court may or may not grant.</p>
          <p>In money cases, a stay often requires a supersedeas bond: a guarantee, usually provided by a surety, that the judgment will be paid if the appeal fails. Whether a stay is available, what it requires, and how long it lasts all depend on the court, the type of case and the judgment involved. Do not assume a judgment is paused — check, and ask for a stay early if you need one.</p>

          <h2>Do you need a lawyer to appeal?</h2>
          <p>You do not need the same attorney who handled the trial. Many people hire an appellate specialist — a lawyer whose practice focuses on appeals, who knows the appellate rules and standards of review, and who can read a trial record for the errors that matter. Trial advocacy and appellate advocacy are different skills: a trial lawyer persuades a jury, while an appellate lawyer persuades a panel of judges on paper.</p>
          <p>You are not required to have a lawyer to file an appeal, but the rules are technical, the deadlines are strict, and the brief must follow the court&apos;s rules on form, length and content. A brief that misses a deadline, exceeds the page limit, or fails to point to the record can be rejected or disregarded. If cost is a barrier, some attorneys offer a short consultation to assess whether an appeal is worthwhile before you commit — see our guide to <Link href="/blog/what-to-expect-first-consultation">what to expect at your first consultation</Link> and our guide to <Link href="/blog/choose-right-type-attorney">how to choose the right type of attorney</Link>. In criminal cases, a defendant who cannot afford a lawyer may be entitled to a court-appointed attorney for the appeal.</p>
          <p>Before hiring anyone, get an honest assessment of whether the appeal has a realistic chance. A good appellate lawyer will look at the record, identify the errors that were preserved at trial, and tell you plainly whether the appeal is worth pursuing. That assessment costs far less than a full appeal. For what happens when a case is lost in the first place, see our guide to <Link href="/blog/what-happens-if-you-lose-a-lawsuit">what happens if you lose a lawsuit</Link>. For criminal cases specifically, see our guide to <Link href="/blog/what-is-a-plea-bargain-and-should-you-accept-one">what a plea bargain is and whether you should accept one</Link>.</p>

          <h2>Frequently asked questions</h2>
          <h3>How long does an appeal take?</h3>
          <p>There is no fixed timetable. Assembling the record, writing the briefs and waiting for a decision can take many months, sometimes more than a year. The length depends on the court, the complexity of the case, and how busy the court is. Plan on the basis that the judgment remains in force in the meantime unless a stay has been granted.</p>
          <h3>Can I present new evidence on appeal?</h3>
          <p>In the usual case, no. An appeal reviews the record that was made in the trial court — the evidence, the testimony and the rulings that already exist. New evidence, new witnesses and new arguments that were not raised at trial are generally not considered.</p>
          <h3>What if I miss the appeal deadline?</h3>
          <p>Missing the deadline almost always ends the appeal. Courts rarely accept late notices of appeal, however good the reason. If you think the deadline may have passed, speak to an attorney immediately — in a very small number of situations a court may allow a late filing, but those are exceptions.</p>
          <h3>How much does an appeal cost?</h3>
          <p>The costs vary widely. In federal court the filing fee is $605 ($600 docketing fee plus a $5 statutory fee); state court fees differ. On top of the fee, there is the cost of the trial transcript, and the attorney&apos;s fees for researching and writing the brief — which can be substantial. Fee waivers exist for people who cannot afford the filing fee.</p>
          <h3>Can the other side appeal too?</h3>
          <p>Yes — either side can appeal a decision that goes against it, as long as the decision is one that can be appealed and the deadline is met. If both sides appeal, the case is sometimes called a cross-appeal. In a criminal case, the prosecution&apos;s ability to appeal is much more limited than the defendant&apos;s.</p>
          <h3>What happens if I win the appeal?</h3>
          <p>Winning does not always mean the case is over. If the court reverses the judgment, the case may be remanded to the trial court — sometimes for a new trial, sometimes for reconsideration under the correct legal rules. The other side may also ask a higher court to review the appellate court&apos;s decision.</p>

          <p>An appeal is a focused, technical process — not a second trial, and not a fresh chance to argue the facts. It asks a higher court to look at the record and decide whether the law was applied correctly. The deadlines are short, and the record made at trial decides what can be argued. If you are considering an appeal, pin down the deadline first, get the record assessed honestly, and speak to an appellate attorney before the time runs out. For help finding the right lawyer, see our guide to <Link href="/blog/choose-right-type-attorney">how to choose the right type of attorney</Link>, and if cost is a concern, see our guide to <Link href="/blog/cannot-afford-attorney-options">what to do if you cannot afford an attorney</Link>.</p>
        </div>
      </div>
    </div>
  );
}
