import Link from "next/link";

export const metadata = {
  title: "How to Organise Your Documents Before You Meet an Attorney",
  description:
    "General information on gathering and organising the documents for your first meeting with an attorney: what to bring, what to leave out, and how a short timeline helps the attorney help you.",
  alternates: {
    canonical: "https://www.tasdi.foo/blog/organise-documents-before-meeting-attorney",
  },
};

export default function OrganiseDocumentsBeforeMeetingAttorneyPage() {
  return (
    <div className="container section">
      <div style={{ maxWidth: 760 }}>
        <Link href="/blog" className="small muted">← All articles</Link>
        <div className="meta mt-2" style={{ color: "var(--gold)" }}>Guides</div>
        <h1 className="section-title mt-1">How to Organise Your Documents Before You Meet an Attorney</h1>
        <p className="small muted mb-3">4 November 2026</p>

        <div className="prose">
          <p><strong>Please note:</strong> this guide is general information only — it is not legal advice, and it does not create an attorney-client relationship. Rules for attorneys vary by state, and only a licensed attorney in your state can advise you on your specific situation.</p>

          <p>An attorney can only advise on what they can see. A first meeting spent hunting through unsorted papers, retelling events from memory, and trying to remember dates is a meeting that could have been spent on advice. Organising your documents beforehand does not require legal knowledge — it requires a folder, an hour, and a willingness to leave the irrelevant papers at home. The aim is simple: the attorney should be able to follow what happened, in what order, and what is at stake, without having to reconstruct it from a pile.</p>

          <h2>1. Start with a one-page timeline</h2>
          <p>Before you gather a single document, write a short timeline of events in date order: what happened, when, and who was involved. Keep it factual and brief — one or two lines per event — and mark any dates you are unsure about as estimates rather than guessing silently. A timeline does two things a pile of papers cannot: it shows the attorney the shape of your matter at a glance, and it reveals the gaps — the missing date, the unnamed person, the document you thought you had — while there is still time to fill them.</p>
          <p>Note any deadlines you are aware of, such as a date by which something must be filed or answered, and flag them clearly at the top. Deadlines change the urgency of everything else, and an attorney needs to know about them at the start of the meeting, not at the end.</p>

          <h2>2. Gather the core documents first</h2>
          <p>The documents that matter most are the ones that define the matter itself: any contract or agreement at the centre of it, court papers or official notices you have received, and correspondence that shows what each side has said and promised. Add identification documents the attorney may need to open a file, and any previous legal documents connected with the same matter, such as an earlier agreement or a prior court order.</p>
          <p>For most matters, a second group of documents supports the story: receipts, invoices, photographs, medical or repair records where relevant, and notes of conversations you made at the time. Contemporaneous notes — written when events were fresh — carry more weight than recollections written months later, so include them even if they are rough. If a document exists only in digital form, such as an email or a message thread, print it or save it in a form you can hand over; do not rely on scrolling through your phone during the meeting.</p>

          <h2>3. Sort, label, and leave the rest out</h2>
          <p>Sort what you have into labelled groups that match your timeline: the agreement, the correspondence, the bills or records, and so on. Number the pages or label the sections so the attorney can find a document when you refer to it, rather than both of you searching. If you have both originals and copies, bring the copies for the attorney to keep and keep the originals safe at home, unless the attorney specifically asks for originals.</p>
          <p>Just as important is what to leave out. A carrier bag of every paper you have ever received does not help; it buries the important documents and eats into the time you paid for. If you are unsure whether something is relevant, put it in a separate "possibly relevant" pile and mention it — the attorney can decide in seconds whether it matters, and it will not slow down the rest of the meeting.</p>

          <h2>4. Prepare a short list of questions and goals</h2>
          <p>Alongside the documents, write down what you want from the meeting: the outcome you hope for, the outcome you would accept, and the questions you need answered. Be honest about your priorities — speed, cost, privacy, and outcome often pull in different directions, and the attorney can only balance them if they know which matters most to you. Also note anything you do not understand about the documents you are bringing; asking about a clause you skipped is far better than pretending you understood it.</p>
          <p>Finally, be ready to discuss fees and next steps, and bring the information the attorney will need to answer fee questions: a realistic sense of what you can afford, and any existing fee arrangement or quote from another attorney. A first meeting is not only about your case — it is about whether this attorney, at this cost, is the right fit for it, and organised documents make that judgement possible for both sides.</p>

          <h2>Quick checklist</h2>
          <p>— Have you written a one-page timeline in date order, with deadlines flagged at the top?</p>
          <p>— Have you gathered the core documents: agreements, court papers or notices, and key correspondence?</p>
          <p>— Have you added supporting records: receipts, photographs, and notes made at the time?</p>
          <p>— Are the documents sorted and labelled, with copies for the attorney and originals kept safe?</p>
          <p>— Have you set aside uncertain items in a separate pile instead of mixing them in?</p>
          <p>— Have you written down your goals, your priorities, and the questions you need answered?</p>
        </div>
      </div>
    </div>
  );
}
