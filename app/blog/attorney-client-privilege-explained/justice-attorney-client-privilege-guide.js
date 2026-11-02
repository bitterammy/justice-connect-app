import Link from "next/link";

export const metadata = {
  title: "What Attorney-Client Privilege Protects — and What It Does Not",
  description:
    "General information on attorney-client privilege: which communications it covers, how it can be lost, and its limits — including communications shared with others and the crime-fraud exception.",
  alternates: {
    canonical: "https://www.tasdi.foo/blog/attorney-client-privilege-explained",
  },
};

export default function AttorneyClientPrivilegeGuidePage() {
  return (
    <div className="container section">
      <div style={{ maxWidth: 760 }}>
        <Link href="/blog" className="small muted">← All articles</Link>
        <div className="meta mt-2" style={{ color: "var(--gold)" }}>Guides</div>
        <h1 className="section-title mt-1">What Attorney-Client Privilege Protects — and What It Does Not</h1>
        <p className="small muted mb-3">2 November 2026</p>

        <div className="prose">
          <p><strong>Please note:</strong> this guide is general information only — it is not legal advice, and it does not create an attorney-client relationship. Privilege rules vary by state and by the kind of matter, and only a licensed attorney in your state can advise you on your specific situation.</p>

          <p>Attorney-client privilege is one of the reasons people can speak openly to an attorney. In general terms, it protects confidential communications between a client and an attorney that are made for the purpose of seeking or giving legal advice, so that the attorney cannot be forced to disclose them and the client can refuse to disclose them. That protection is powerful, but it is narrower than many people assume. Understanding its edges before you talk to an attorney helps you avoid accidentally giving the protection away.</p>

          <h2>1. What it generally covers</h2>
          <p>Privilege generally covers communications, not everything connected to a case. A private conversation with your attorney about your situation, an email asking for legal advice, and a letter your attorney writes to you explaining your options are the classic examples. The key elements are that the communication is between client and attorney, that it is confidential, and that it is made for the purpose of legal advice. A conversation that meets all three is, in general, protected.</p>
          <p>It is worth noting what privilege does not cover even within a case: the underlying facts themselves are not privileged just because you told them to your attorney. If a fact exists independently — a date, an address, a document — the other side may still be able to prove it from another source. What is protected is your communication about it, not the fact itself. So telling your attorney something does not make that fact disappear from the case.</p>

          <h2>2. Confidentiality is the condition</h2>
          <p>Privilege depends on confidentiality. A conversation held in a way that others can overhear, or a message sent on a shared or employer-monitored account, may not count as confidential. The practical lesson is simple: when you are communicating with your attorney, use a private channel, keep the conversation between you and the attorney, and do not forward the attorney's advice to other people. Forwarding a privileged email, or discussing its contents with friends or family, can be treated as waiving the privilege for that communication — meaning it may no longer be protected.</p>
          <p>The same caution applies to other people being present. If a third person sits in on a meeting with your attorney, or is copied on an email, the communication may lose its confidential character. There are exceptions — for example, people who are genuinely needed to help the attorney advise you, such as an interpreter — but a casual extra person is not one of them. If someone else needs to be involved, ask your attorney first whether their presence affects privilege.</p>

          <h2>3. It must be for legal advice</h2>
          <p>Privilege protects communications made for the purpose of seeking or giving legal advice. A conversation with an attorney about a business decision that has nothing to do with legal advice, or a purely social conversation, is not automatically privileged just because the other person happens to be an attorney. The purpose matters. When you contact an attorney, it helps to be clear that you are seeking legal advice, and to keep the communication focused on the legal question.</p>
          <p>Similarly, documents you create for other purposes do not become privileged simply by sending a copy to your attorney. A business record, a report, or a message written before you ever contacted an attorney does not gain protection by being forwarded to one afterwards. Privilege attaches to the communication seeking advice, not to every document that passes through an attorney's hands.</p>

          <h2>4. The crime-fraud exception</h2>
          <p>Privilege does not protect communications made to further a crime or a fraud. If a client consults an attorney in order to commit or conceal wrongdoing, that communication is generally not protected under what is known as the crime-fraud exception. This is a narrow but important limit: privilege exists so that people can get honest legal advice, including advice that they may have done something wrong, but not so that an attorney can be used as a tool to commit a new wrong.</p>
          <p>There is a real difference between those two situations. Telling your attorney honestly about something that already happened, so that you can understand your position and your options, is the normal purpose of legal advice. Asking an attorney to help you carry out or hide an ongoing or future wrong is not. If you are unsure which side of the line a question falls on, that uncertainty is itself a reason to ask the attorney directly and let them advise you.</p>

          <h2>5. Waiver: how protection can be lost</h2>
          <p>Privilege belongs, in general, to the client, and the client can give it up — sometimes without intending to. The common ways this happens are sharing the communication with someone else, quoting from it publicly, or relying on the attorney's advice as part of your own argument in a dispute. Once waived for a particular communication, the protection for that communication is generally gone, and it cannot easily be taken back.</p>
          <p>The safest habit is to treat anything your attorney tells you in confidence as private by default: do not post it, do not forward it, and do not summarise it to other people involved in the matter. If you need to share something for a practical reason — for example, with a spouse, a business partner, or another professional — ask your attorney first whether sharing it, and how you share it, would waive the privilege.</p>

          <h2>6. Privilege is not the same as confidentiality duties</h2>
          <p>Attorneys also have a separate professional duty of confidentiality, which is broader than privilege in some ways: it generally requires an attorney not to reveal client information even outside a courtroom, and even after the representation ends. Privilege, by contrast, is the specific rule about what can be compelled in legal proceedings. The two overlap, but they are not the same thing, and neither one is absolute. Court orders, the client's own consent, and the need to defend against a claim by the client can all create exceptions to confidentiality, just as the limits above create exceptions to privilege.</p>
          <p>None of this should discourage you from speaking openly to an attorney — that openness is exactly what the system is designed to encourage. It should simply shape how you do it: privately, directly with your attorney, and for the purpose of legal advice.</p>

          <h2>Quick checklist</h2>
          <p>— Communicate with your attorney privately, on a channel only you control</p>
          <p>— Keep third people out of attorney communications unless your attorney says their presence is needed</p>
          <p>— Do not forward, quote, or summarise your attorney's advice to others without asking first</p>
          <p>— Remember that facts themselves are not privileged, only your confidential communications about them</p>
          <p>— Remember that communications to further a crime or fraud are not protected</p>
          <p>— If you are unsure whether something is protected, ask your attorney before you share it</p>
        </div>

        <div className="mt-4" style={{ borderTop: "1px solid var(--line)", paddingTop: "1.5rem" }}>
          <p className="small muted">Need legal help? <Link href="/search">Find an attorney near you →</Link></p>
        </div>
      </div>
    </div>
  );
}
