import Link from "next/link";

export const metadata = {
  title: "What Is Discovery in a Lawsuit? The Five Tools, the Timeline, and What You Will Be Asked to Do",
  description:
    "What is discovery in a lawsuit? The five tools, the timeline, and what you will be asked to do. General information, not legal advice.",
  alternates: {
    canonical: "https://www.tasdi.foo/blog/what-is-discovery-in-a-lawsuit",
  },
};

export default function WhatIsDiscoveryInALawsuitPage() {
  return (
    <div className="container section">
      <div style={{ maxWidth: 760 }}>
        <Link href="/blog" className="small muted">← All articles</Link>
        <div className="meta mt-2" style={{ color: "var(--gold)" }}>Guides</div>
        <h1 className="section-title mt-1">What Is Discovery in a Lawsuit? The Five Tools, the Timeline, and What You Will Be Asked to Do</h1>
        <p className="small muted mb-3">23 November 2026</p>

        <div className="prose">
          <p><strong>Please note:</strong> this guide is general information only — it is not legal advice, and it does not create an attorney-client relationship. Only a licensed attorney can advise you about your own situation.</p>

          <p><strong>Short answer:</strong> discovery is the stage of a lawsuit in which each side gathers facts from the other side before trial. It uses five main tools — written questions, document requests, requests for admission, depositions, and subpoenas — and most civil cases settle before trial, often because discovery has shown both sides the strength of their positions.</p>

          <p>If you are involved in a lawsuit, discovery is probably the stage that will take the most of your time and patience. The trial is what people picture, but most of the real work happens before anyone enters a courtroom: documents are exchanged, questions are answered under oath, and witnesses give their accounts.</p>

          <h2>What is discovery in a lawsuit?</h2>
          <p>Discovery is the formal exchange of information between the parties in a lawsuit. Once a case has been filed, each side must share the facts it holds and may learn the facts the other side holds. A trial should be decided on the evidence, not on who kept the best information hidden until the last moment.</p>
          <p>In the United States, discovery is governed by rules of civil procedure. In the federal courts, those are the Federal Rules of Civil Procedure, with the discovery rules sitting mainly in Rules 26 to 37. Each state has its own rules.</p>
          <p>The scope of discovery is broad. Under Federal Rule 26, a party may obtain discovery about any non-privileged matter that is relevant to a claim or defence and proportional to the needs of the case. That covers documents, emails, and witness testimony. Information protected by attorney-client privilege, or a lawyer's work product, is generally off limits.</p>

          <h2>Where does discovery fit in a lawsuit?</h2>
          <p>Discovery comes after the answer, and before trial.</p>
          <table>
            <tr><th>Stage</th><th>What happens</th></tr>
            <tr><td>Complaint and answer</td><td>The plaintiff files the complaint; the defendant answers it.</td></tr>
            <tr><td>Scheduling conference</td><td>The judge and the lawyers agree a timetable, including a deadline for finishing discovery.</td></tr>
            <tr><td>Initial disclosures</td><td>Each side shares basic information — the people and documents it may use — without being asked.</td></tr>
            <tr><td>Discovery</td><td>The parties exchange documents, answer questions, and take depositions.</td></tr>
            <tr><td>Motions</td><td>Either side may ask the court to decide the case, or part of it, on the facts discovery produced.</td></tr>
            <tr><td>Settlement or trial</td><td>Most cases settle; the rest go to trial on the record discovery built.</td></tr>
          </table>
          <p>Discovery is usually the longest stage of a civil case. Its length depends on the people, the evidence, and how cooperative the parties are.</p>

          <h2>The five tools of discovery at a glance</h2>
          <p>Discovery is carried out through five main tools. The first three can only be used against the other party; the last two can reach people who are not parties at all, such as a witness, a former employee, a bank, or a hospital.</p>
          <table>
            <tr><th>Tool</th><th>What it does</th><th>Who it targets</th><th>Federal rule</th></tr>
            <tr><td>Interrogatories</td><td>Written questions, answered in writing under oath.</td><td>The other party.</td><td>Rule 33</td></tr>
            <tr><td>Requests for production</td><td>Asks for documents and electronically stored information.</td><td>The other party.</td><td>Rule 34</td></tr>
            <tr><td>Requests for admission</td><td>Asks the other side to admit or deny specific facts.</td><td>The other party.</td><td>Rule 36</td></tr>
            <tr><td>Depositions</td><td>Oral questioning of a witness, under oath, recorded by a court reporter.</td><td>Parties and non-parties.</td><td>Rule 30</td></tr>
            <tr><td>Subpoenas</td><td>A court order requiring a person to produce documents or testify.</td><td>Non-parties, mainly.</td><td>Rule 45</td></tr>
          </table>

          <h2>1. What are interrogatories?</h2>
          <p>Interrogatories are written questions that one party sends to the other, and the other party must answer in writing, under oath. In federal court, Rule 33 limits each side to 25 interrogatories, counting subparts, unless the court allows more. Answers are due within 30 days, and the answering party signs them under oath.</p>

          <h2>2. What are requests for production?</h2>
          <p>Requests for production ask the other side to hand over documents, electronically stored information, and other tangible things. The request must describe the items sought with reasonable particularity — a party cannot simply demand "all your documents". Under Federal Rule 34, responses are due within 30 days, and the responding party must produce the documents as they are ordinarily kept. Privileged material does not have to be produced, but the party withholding it must usually provide a privilege log.</p>

          <h2>3. What are requests for admission?</h2>
          <p>Requests for admission ask the other party to admit or deny specific statements of fact, or to admit that a document is genuine. Every fact the other side admits no longer needs to be proved at trial. Under Federal Rule 36, a party has 30 days to respond, and a matter not answered or objected to within that time is treated as admitted. An admission is conclusive: the party cannot later argue the opposite at trial.</p>

          <h2>4. What is a deposition?</h2>
          <p>A deposition is the oral questioning of a witness under oath, outside the courtroom, recorded by a court reporter. Our guide to <Link href="/blog/what-happens-at-a-deposition">what happens at a deposition</Link> explains how to prepare. In a deposition, the witness — called the deponent — answers questions from the other side's lawyer, with their own lawyer present. In federal court, Rule 30 limits a deposition to one day of seven hours of questioning, unless the court orders otherwise or the parties agree.</p>

          <h2>5. What is a subpoena?</h2>
          <p>A subpoena is a court order that requires a person to produce documents, give testimony, or both. It is the tool used to get evidence from people and organisations that are not parties to the lawsuit. In federal court, Rule 45 requires that a subpoena be served on the person it targets, and that the person be given a reasonable time to comply. The person who receives it may object, and the court can modify or quash the subpoena if the objection is well founded. Do not ignore a subpoena: ignoring one can lead to a contempt order.</p>

          <h2>What are initial disclosures, and what is electronic discovery?</h2>
          <p>Before the five tools are used, the Federal Rules require each side to share some information voluntarily. These are the initial disclosures under Rule 26(a), due early in the case, usually within 14 days of the parties' first planning conference. They cover the people likely to have useful information, the documents the party may use, the damages claimed, and any relevant insurance agreement.</p>
          <p>Electronic discovery — often shortened to e-discovery — deals with electronically stored information: emails, text messages, social media posts, and files held on phones, laptops, and servers. A party need not produce electronically stored information from sources that are not reasonably accessible because of undue burden or cost, but it must show why the source is inaccessible.</p>

          <h2>What is the discovery timeline, and what is a scheduling order?</h2>
          <p>Early in the case, the judge issues a scheduling order that sets the deadlines for the whole case, including when discovery must be completed.</p>
          <table>
            <tr><th>Step</th><th>Typical timing in a federal case</th></tr>
            <tr><td>Planning conference</td><td>Within 21 days before the scheduling conference, or as the court directs.</td></tr>
            <tr><td>Initial disclosures</td><td>Within 14 days after the planning conference.</td></tr>
            <tr><td>Written discovery</td><td>Served early; responses due within 30 days.</td></tr>
            <tr><td>Depositions</td><td>Usually after documents and written answers are exchanged.</td></tr>
            <tr><td>Expert reports</td><td>At least 90 days before trial, unless the court orders otherwise.</td></tr>
            <tr><td>Discovery deadline</td><td>Set in the scheduling order; everything must be complete by that date.</td></tr>
          </table>
          <p>Deadlines in a scheduling order are taken seriously. A party that misses one may be barred from using the evidence it failed to disclose, and may have to pay the other side's costs.</p>

          <h2>What happens if a party does not cooperate?</h2>
          <p>Discovery depends on cooperation. A party may answer questions evasively, produce documents late, withhold material without a good reason, or refuse to attend a deposition. The rules provide remedies, and a party that misbehaves can face consequences ranging from a warning to losing the case.</p>
          <p>The first step is usually a motion to compel: the party seeking the information asks the court to order the other side to answer the question, produce the document, or attend the deposition. If the court grants the motion and the party still does not comply, the court may impose sanctions, including an award of the other side's expenses. In the most serious cases, a court can dismiss the case or enter a default judgment. A party that receives an overbroad request can ask for a protective order instead.</p>

          <h2>What will you personally be asked to do?</h2>
          <table>
            <tr><th>What you may be asked to do</th><th>What it involves</th></tr>
            <tr><td>Search for documents</td><td>Finding emails, letters, contracts, photos, and messages — including on your phone.</td></tr>
            <tr><td>Answer interrogatories</td><td>Providing facts, in writing, under oath, for your lawyer to draft into answers.</td></tr>
            <tr><td>Attend a deposition</td><td>Answering questions under oath for up to a day, with your lawyer present.</td></tr>
            <tr><td>Produce electronic material</td><td>Allowing your devices or accounts to be searched within agreed limits.</td></tr>
            <tr><td>Preserve evidence</td><td>Keeping documents and messages, and not deleting anything relevant.</td></tr>
          </table>
          <p><strong>Be honest and complete.</strong> Discovery is conducted under oath, and the duty to answer truthfully applies to written answers and testimony alike. An answer that is misleading, even if technically true, can damage your credibility and your case. If you do not know something, say so.</p>
          <p><strong>Take the deadlines seriously.</strong> In federal court, written discovery responses are typically due within 30 days, and missing a deadline can be serious, particularly for requests for admission, where silence counts as an admission.</p>
          <p><strong>Work with your lawyer, not around them.</strong> Your lawyer will review everything before it is produced, and will object to requests that are improper. Do not discuss the case with the other party's lawyer without your own lawyer present.</p>

          <h2>Why must you preserve evidence? The litigation hold</h2>
          <p>One of the most important duties in discovery is the duty to preserve evidence. As soon as a party knows litigation is likely, it must stop the routine destruction of relevant material. In a business, that usually means issuing a litigation hold: an instruction to employees to stop deleting material that relates to the dispute.</p>
          <p>The duty applies to individuals too: do not delete emails, text messages, photographs, or social media posts that relate to a dispute, even if no lawsuit has yet been filed. Deleting relevant material after a dispute has arisen can be treated as spoliation, and the consequences can be severe: a court may impose monetary sanctions.</p>

          <h2>What happens after discovery ends?</h2>
          <p>When discovery closes, the case moves into its final phase. The parties now know what evidence each side has, and that knowledge drives everything that follows. Settlement discussions often intensify, because both sides can now assess the likely outcome of a trial. Mediation is common at this stage.</p>
          <p>If the case does not settle, either side may file a motion for summary judgment, asking the court to decide the case — or part of it — on the basis of the discovery record, without a trial. The court will grant the motion only if there is no genuine dispute about the material facts and the moving party is entitled to judgment as a matter of law. The duty to supplement also applies: if a party learns an earlier answer was incomplete, it must correct it promptly.</p>

          <h2>Frequently asked questions</h2>
          <h3>How long does discovery take?</h3>
          <p>It depends on the case. A straightforward dispute may complete discovery in a few months; a complex case can take a year or more.</p>
          <h3>Do I have to answer every question the other side asks?</h3>
          <p>Not every question. You must answer questions that are relevant and not privileged, but your lawyer can object to questions that are overbroad or protected by privilege.</p>
          <h3>Can the other side see my emails and text messages?</h3>
          <p>Yes, if they are relevant to the case and not privileged. Emails and text messages are treated as documents for discovery purposes.</p>
          <h3>What happens if I miss a discovery deadline?</h3>
          <p>A late answer to an interrogatory may draw a motion to compel; a missed response to a request for admission is more serious, because the matter is treated as admitted.</p>
          <h3>Is everything I produce in discovery made public?</h3>
          <p>Not necessarily. Discovery material is exchanged between the parties and is not automatically filed with the court or made public.</p>
          <h3>Where can I find an attorney to help with my case?</h3>
          <p>You can <Link href="/search">search for an attorney near you</Link> on Justice Connect.</p>
        </div>
        <div className="mt-4" style={{ borderTop: "1px solid var(--line)", paddingTop: "1.5rem" }}>
          <p className="small muted">Need legal help? <Link href="/search">Find an attorney near you →</Link></p>
          <p className="small muted mt-2">Related guides: <Link href="/blog/what-happens-at-a-deposition">What Happens at a Deposition?</Link> · <Link href="/blog/what-to-do-if-you-receive-a-subpoena">What to Do If You Receive a Subpoena</Link> · <Link href="/blog/what-is-a-demand-letter">What Is a Demand Letter?</Link> · <Link href="/blog/mediation-vs-arbitration">Mediation vs Arbitration</Link> · <Link href="/blog/what-happens-if-you-lose-a-lawsuit">What Happens If You Lose a Lawsuit?</Link> · <Link href="/blog/how-attorney-fees-work">How Attorney Fees Work</Link> · <Link href="/blog/what-to-expect-first-consultation">What to Expect at Your First Consultation</Link> · <Link href="/blog/organise-documents-before-meeting-attorney">How to Organise Your Documents Before You Meet an Attorney</Link></p>
        </div>
      </div>
    </div>
  );
}
