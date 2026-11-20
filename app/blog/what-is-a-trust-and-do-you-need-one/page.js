import Link from "next/link";

export const metadata = {
  title: "What Is a Trust and Do You Need One? Will vs Revocable Living Trust Explained",
  description:
    "A trust is a legal arrangement in which a trustee holds assets for beneficiaries. How a revocable living trust differs from a will, what it does and does not do, how funding works, what it costs, and who actually needs one. General information, not legal advice.",
  alternates: {
    canonical: "https://www.tasdi.foo/blog/what-is-a-trust-and-do-you-need-one",
  },
};

export default function WhatIsATrustPage() {
  return (
    <div className="container section">
      <div style={{ maxWidth: 760 }}>
        <Link href="/blog" className="small muted">← All articles</Link>
        <div className="meta mt-2" style={{ color: "var(--gold)" }}>Guides</div>
        <h1 className="section-title mt-1">What Is a Trust and Do You Need One? Will vs Revocable Living Trust Explained</h1>
        <p className="small muted mb-3">20 November 2026</p>

        <div className="prose">
          <p><strong>Please note:</strong> this guide is general information only — it is not legal advice, and it does not create an attorney-client relationship. Trust law varies by state, including how a trust must be signed and witnessed, which assets can be transferred into one, and how probate works. Only a licensed attorney in your state can advise you on your situation.</p>

          <p><strong>Short answer:</strong> a trust is a legal arrangement in which one person, the trustee, holds and manages assets for the benefit of someone else, the beneficiary. A revocable living trust lets you keep control of your assets during your life, avoid probate when you die, and plan for incapacity. Most people also still need a will. Whether you need a trust depends on your family and your assets, not on how wealthy you are.</p>

          <p>Ask ten people what a trust is and you will get ten different answers — a rich person's tax trick, a way to disinherit someone, a document only lawyers understand. The reality is plainer. A trust is a container for your assets with instructions attached: who manages them, who benefits from them, and when.</p>

          <h2>What is a trust, in plain English?</h2>
          <p>A trust is a legal arrangement with three roles. The <strong>grantor</strong> — also called the settlor or trustor — creates the trust and puts assets into it. The <strong>trustee</strong> holds the legal title to those assets and manages them according to the trust's written instructions. The <strong>beneficiary</strong> is the person who benefits from the assets: they may receive income from them, live in a house owned by the trust, or receive the assets outright at a time the grantor chose.</p>
          <p>With the commonest kind of trust, the revocable living trust, one person plays all three roles at first: you create the trust, you act as your own trustee, and you are your own beneficiary while you are alive. You keep living in your house, spending your money and managing your accounts exactly as before — the only change is that the assets are now titled in the name of the trust rather than in your own name. The trust only starts to behave differently when you cannot manage things yourself, or when you die: then the person you named as successor trustee steps in and follows the instructions you wrote. That is the whole idea: a trust separates the management of assets from the benefit of them, so that someone you trust can manage things for someone you care about, under rules you wrote, without a court having to get involved.</p>

          <h2>The main types of trust</h2>
          <p>There are many kinds of trust, but four cover almost everything an ordinary family needs to know about.</p>
          <h3>Revocable living trust</h3>
          <p>The standard family trust. You create it while you are alive, you can change it or cancel it at any time, and you usually act as your own trustee. When you die, it becomes irrevocable — its terms are fixed — and the successor trustee distributes the assets as you directed. Its main benefits are avoiding probate, keeping your affairs private, and planning for incapacity. It is the type this guide focuses on.</p>
          <h3>Irrevocable trust</h3>
          <p>A trust you generally cannot change or cancel once it is created. Because you give up control, an irrevocable trust can do things a revocable one cannot — for example, it can remove assets from your taxable estate or protect them from certain creditors. The price is the loss of control: you cannot take the assets back or rewrite the terms. Irrevocable trusts are normally used for specific purposes, such as life insurance or Medicaid planning.</p>
          <h3>Testamentary trust</h3>
          <p>A trust created by your will, which only comes into existence when you die. A common example is a trust for minor children: the will says the children's inheritance goes into a trust, managed by a trustee you named, until the children reach an age you chose. Unlike a living trust, a testamentary trust goes through probate first, because it is part of the will.</p>
          <h3>Special-needs trust</h3>
          <p>A trust for a beneficiary with a disability, designed so the beneficiary can receive support from the trust without losing eligibility for means-tested government benefits. These trusts have strict rules and are normally set up with an attorney who knows the benefit programmes involved.</p>
          <table>
            <tr><th>Type</th><th>When it is created</th><th>Can you change it?</th><th>Main use</th></tr>
            <tr><td>Revocable living trust</td><td>While you are alive</td><td>Yes, any time</td><td>Avoid probate, plan for incapacity, keep privacy</td></tr>
            <tr><td>Irrevocable trust</td><td>While you are alive</td><td>Generally no</td><td>Tax planning, asset protection, life insurance</td></tr>
            <tr><td>Testamentary trust</td><td>In your will, at death</td><td>Only by changing the will</td><td>Provide for minor children after death</td></tr>
            <tr><td>Special-needs trust</td><td>While alive, or in a will</td><td>Depends on the type</td><td>Support a disabled beneficiary without losing benefits</td></tr>
          </table>

          <h2>Will vs trust: the comparison</h2>
          <p>A will and a trust do overlapping jobs, and most well-built estate plans use both. The differences are practical, and they decide which one fits your situation.</p>
          <table>
            <tr><th></th><th>Will</th><th>Revocable living trust</th></tr>
            <tr><td>Takes effect</td><td>Only when you die</td><td>As soon as it is created and funded</td></tr>
            <tr><td>Probate</td><td>Assets passing through a will generally go through probate</td><td>Assets properly titled in the trust generally avoid probate</td></tr>
            <tr><td>Privacy</td><td>A probated will becomes a public record</td><td>A trust stays private — it is not filed with a court</td></tr>
            <tr><td>Incapacity</td><td>Does nothing while you are alive</td><td>Successor trustee can step in at once, no court needed</td></tr>
            <tr><td>Guardians for minor children</td><td>Yes — only a will names a guardian</td><td>No — a trust cannot name a guardian</td></tr>
            <tr><td>Cost to set up</td><td>Usually less</td><td>Usually more, and funding takes effort</td></tr>
            <tr><td>Works only if…</td><td>It is validly signed and witnessed</td><td>It is funded — assets must be retitled into it</td></tr>
          </table>
          <p>The short version: a will says who gets what and names a guardian for minor children, but it usually goes through probate and does nothing if you become incapacitated. A revocable living trust can avoid probate, keep your affairs private and give you a built-in plan for incapacity, but it costs more to set up and only works if you fund it. Most families that create a trust also keep a will — a simple "pour-over" will that sends anything left outside the trust into the trust, and names guardians for minor children.</p>
          <p>How common is each? In Caring.com's 2025 Wills and Estate Planning Study, only 24 per cent of US adults surveyed said they had a will, and 13 per cent reported having a living trust. Most people have neither — which is why the first step, for most families, is simply to have a will, whether or not a trust follows.</p>

          <h2>What a revocable living trust does for you</h2>
          <p><strong>It avoids probate for the assets inside it.</strong> Probate is the court-supervised process of validating a will, settling debts and distributing what is left. It can be slow and expensive, and its cost and length vary widely by state. Assets properly titled in a trust pass to beneficiaries under the trust's own terms, without a court case. Our guide to <Link href="/blog/what-is-probate-and-how-long-does-it-take">what probate is and how long it takes</Link> explains the process a trust helps you skip.</p>
          <p><strong>It keeps your affairs private.</strong> A probated will is a public record: anyone can go to the probate court and read it, including what you owned and who received it. A trust is not filed with a court, so its terms and its assets stay private.</p>
          <p><strong>It plans for incapacity.</strong> A will only takes effect after death, so it offers nothing if you become unable to manage your own affairs while you are still alive — after a stroke, an accident or the onset of dementia. A trust has the plan built in: the successor trustee you named can step in and manage things right away, following your instructions, without a court appointing a guardian or conservator. A <Link href="/blog/what-is-a-power-of-attorney-and-when-do-you-need-one">power of attorney</Link> can do part of the same job, but a trust covers the assets inside it directly.</p>
          <p><strong>It lets you control the timing.</strong> A will usually hands assets to beneficiaries outright, in one go. A trust can stagger distributions: a third at 25, a third at 30, the rest at 35, for example, or income only until a beneficiary reaches an age you chose. That matters when the beneficiaries are young, or when you worry that a lump sum would be spent too quickly.</p>
          <p><strong>It works across state lines.</strong> If you own real estate in more than one state, a will generally has to be probated in each state where you own property. A trust that holds the property avoids that entirely, because the trust, not you, owns it.</p>

          <h2>What a trust does not do</h2>
          <p>A trust is useful, but it is not a cure-all, and the sales pitch sometimes oversells it.</p>
          <p><strong>It does not name guardians.</strong> Only a will names a guardian for minor children. If you have young children and you create a trust but no will, nobody has legally named who should raise them. That is the single most important reason to keep a will alongside a trust.</p>
          <p><strong>A revocable trust does not protect assets from your creditors.</strong> Because you can change it and take assets back at any time, the law treats the assets as still yours while you are alive. Your creditors can generally reach them, just as they could before the trust existed.</p>
          <p><strong>A revocable trust does not by itself avoid estate tax.</strong> For most families the federal estate tax is not the issue, because the exemption is set high and only very large estates owe it. But where tax is a concern, a revocable trust alone does not fix it — the assets are still counted as yours.</p>
          <p><strong>It does not help if it is not funded.</strong> A trust only controls the assets that are actually transferred into it. An empty trust, or one that holds only some of your assets, leaves the rest to pass through your will and through probate — exactly what the trust was meant to avoid. Funding is the step people skip, and it is covered in detail below.</p>
          <p><strong>It does not replace a will.</strong> There will almost always be something left outside the trust: a car bought after the trust was signed, a refund cheque, a small account you forgot. A pour-over will catches those leftovers and sends them into the trust. Without it, they pass under your state's intestacy rules — the default rules for people who die without a will.</p>

          <h2>Funding a trust: the step people skip</h2>
          <p>Funding means transferring your assets into the trust — changing the title or ownership so the trust, not you personally, owns them. It is the least glamorous part of the job and the one that matters most. A trust that is never funded is an expensive pile of paper: it controls nothing, avoids no probate, and leaves your family exactly where a will alone would have left them.</p>
          <p>Funding usually means retitling your house and any other real estate into the trust's name, which is done with a new deed recorded at the county office; changing the ownership of bank and brokerage accounts to the trust; and updating beneficiary designations so that life insurance and retirement accounts pay to the trust where that is the plan. Some assets should not go into a trust at all — retirement accounts, for example, are usually left in your own name with the trust named as beneficiary, because transferring them outright can trigger tax. Funding is not a one-time job either: every new asset you acquire needs to be titled in the trust's name or it falls outside it, so check the funding whenever you buy something significant, and review the whole plan every few years or after a major life change.</p>

          <h2>Who benefits most from a trust — and who probably does not need one</h2>
          <p>There is no net-worth cut-off for needing a trust. The question is whether your family's situation is complex enough to benefit from what a trust does that a will does not. Six situations tend to tip the scale toward a trust.</p>
          <p><strong>A blended family.</strong> When there are children from a previous marriage, a trust can provide for a surviving spouse during their lifetime while making sure the children eventually receive their share — a balance a simple will struggles to strike.</p>
          <p><strong>Property in more than one state.</strong> Each state's property otherwise needs its own probate. A trust holding all of it avoids the extra cases.</p>
          <p><strong>Minor or young adult beneficiaries.</strong> A trust can hold assets until beneficiaries reach an age you chose, and stagger the distributions, instead of handing a teenager a lump sum at 18.</p>
          <p><strong>A beneficiary with special needs.</strong> A special-needs trust can provide support without cutting off means-tested benefits, which an outright gift would do.</p>
          <p><strong>A family that values privacy.</strong> If you do not want your will and your assets to become a public record, a trust keeps them private.</p>
          <p><strong>A plan for incapacity matters to you.</strong> If there is no spouse or adult child nearby to step in, a trust names the person who will manage things and gives them the authority to do it without a court case.</p>
          <p>On the other side, you probably do not need a trust if your estate is simple: one house, a few accounts, all in one state, with a spouse and adult children as beneficiaries, and beneficiary designations already up to date. In that case a will, plus up-to-date beneficiary designations, is usually enough. Probate in some states is also relatively quick and inexpensive, which weakens the case for a trust there. If you are unsure, ask an estate planning attorney for a one-off review: many will tell you that you do not need a trust, and that answer is worth having.</p>

          <h2>What does a trust cost?</h2>
          <p>Costs vary widely by state and by complexity, and any figure here is a range, not a quote. A simple revocable living trust prepared by an attorney commonly costs in the low thousands of dollars, including the pour-over will and the power of attorney documents that usually go with it. A basic online form costs much less — sometimes a few hundred dollars — but it leaves the drafting, the funding and the fine print to you, and a mistake in either can cost your family far more than the saving.</p>
          <p>The drafting fee is not the whole cost. Funding has its own costs: recording a new deed for a house usually involves a county recording fee, and retitling accounts takes time even when it is free. Weigh the whole cost against what the trust saves: probate fees, the cost of a guardianship case if you become incapacitated, and the delay your family avoids.</p>

          <h2>How to set up a trust, step by step</h2>
          <ol>
            <li><strong>Decide what you need.</strong> Work out whether a trust fits your situation — the six situations above are the test. If you have minor children, remember you need a will too.</li>
            <li><strong>List your assets.</strong> Houses, accounts, vehicles, business interests, life insurance, retirement accounts. Note which ones have beneficiary designations already, and which ones would need to be retitled.</li>
            <li><strong>Choose your people.</strong> Pick a successor trustee — the person who manages the trust if you cannot — and a backup. Pick the beneficiaries and decide when and how they receive assets. Talk to the successor trustee first.</li>
            <li><strong>Have the trust drafted.</strong> An estate planning attorney in your state drafts the trust, the pour-over will and the related documents. Bring your asset list and your decisions about timing and guardians.</li>
            <li><strong>Sign it properly.</strong> Signing, witness and notary rules vary by state. Follow the attorney's instructions exactly — a trust signed the wrong way can be challenged later.</li>
            <li><strong>Fund it.</strong> Retitle the house, the accounts and the other assets into the trust's name, and update beneficiary designations. Do not leave this step for later: an unfunded trust does nothing.</li>
            <li><strong>Review it.</strong> Revisit the trust after a marriage, divorce, birth, death or move, and every few years in any case. Keep a copy where the successor trustee can find it, and tell them where it is.</li>
          </ol>
          <p>A trust works alongside the other documents in a basic estate plan. Our guide to <Link href="/blog/living-will-vs-advance-directive">living wills and advance directives</Link> explains how to record your health care wishes, and our guide to <Link href="/blog/what-is-a-power-of-attorney-and-when-do-you-need-one">what a power of attorney is</Link> explains how to appoint someone to act for you.</p>

          <h2>Frequently asked questions</h2>
          <h3>Do I need a trust if I already have a will?</h3>
          <p>Not necessarily. A will covers the basics for a simple estate. A trust earns its extra cost when your situation is more complex: a blended family, property in more than one state, young beneficiaries, a beneficiary with special needs, a need for privacy, or a plan for incapacity. Many families have both, and the will names guardians while the trust handles the assets.</p>
          <h3>Does a trust avoid estate tax?</h3>
          <p>A revocable living trust does not by itself reduce federal estate tax, because the assets are still counted as yours while you can change the trust. For most families the federal estate tax is not an issue, because the exemption is set high. Where tax planning is needed, it uses different tools — usually irrevocable trusts — and needs an attorney.</p>
          <h3>Can a trust own my house?</h3>
          <p>Yes, and for most families the house is the main reason to fund a trust: a new deed transfers the house into the trust's name, and you keep living in it as before. The trust's ownership is what keeps the house out of probate. Check with your lender and insurer first if there is a mortgage on the house, and record the deed properly.</p>

          <h2>Quick checklist</h2>
          <ul>
            <li>Have you decided whether a trust fits your situation — or whether a will alone is enough?</li>
            <li>Have you listed all your assets, including the ones with beneficiary designations?</li>
            <li>Have you chosen a successor trustee — and a backup — and talked to them first?</li>
            <li>Have you had the trust drafted by a licensed attorney in your state, with a pour-over will alongside it?</li>
            <li>Have you signed it the right way for your state — witnesses and notary as required?</li>
            <li>Have you funded it — retitled the house and the accounts, and updated the beneficiary designations?</li>
            <li>Have you told the successor trustee where the documents are kept?</li>
            <li>Have you set a reminder to review the trust after any major life change?</li>
          </ul>
          <p>So, what is a trust and do you need one? A trust is an arrangement in which a trustee holds assets for beneficiaries under rules you wrote. A revocable living trust keeps you in control while you are alive, avoids probate, keeps your affairs private and plans for incapacity — but it costs more than a will, it cannot name guardians, and it only works if you fund it. If your estate is simple, a will plus up-to-date beneficiary designations is usually enough. If your family or your assets are more complex, a trust is worth discussing with an estate planning attorney in your state. For the rest of the picture, see our guides to <Link href="/blog/what-is-probate-and-how-long-does-it-take">what probate is and how long it takes</Link>, <Link href="/blog/what-is-a-power-of-attorney-and-when-do-you-need-one">powers of attorney</Link>, and <Link href="/blog/living-will-vs-advance-directive">living wills and advance directives</Link>.</p>
        </div>
      </div>
    </div>
  );
}
