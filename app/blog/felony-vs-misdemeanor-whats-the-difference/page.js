import Link from "next/link";

export const metadata = {
  title: "Felony vs Misdemeanor: What's the Difference? Charges, Penalties and Consequences Explained",
  description:
    "Felony vs misdemeanor: a felony is a crime punishable by more than one year in prison, a misdemeanor by up to one year, usually in a county jail. How the charge is decided, the court process, and the long-term consequences. General information, not legal advice.",
  alternates: {
    canonical: "https://www.tasdi.foo/blog/felony-vs-misdemeanor-whats-the-difference",
  },
};

export default function FelonyVsMisdemeanorWhatsTheDifferencePage() {
  return (
    <div className="container section">
      <div style={{ maxWidth: 760 }}>
        <Link href="/blog" className="small muted">← All articles</Link>
        <div className="meta mt-2" style={{ color: "var(--gold)" }}>Guides</div>
        <h1 className="section-title mt-1">Felony vs Misdemeanor: What&apos;s the Difference? Charges, Penalties and Consequences Explained</h1>
        <p className="small muted mb-3">25 November 2026</p>

        <div className="prose">
          <p><strong>Please note:</strong> this guide is general information only — it is not legal advice, and it does not create an attorney-client relationship. Criminal law is set state by state, so the definitions, classes and consequences where you live may differ from what is described here. Only a licensed attorney can advise you about your own situation.</p>

          <p><strong>Short answer:</strong> the difference is mainly the maximum punishment. A felony is a crime punishable by more than one year in prison, or by death, and the sentence is usually served in a state or federal prison. A misdemeanor is a crime punishable by up to one year, usually served in a county jail. The label decides how the case moves through court, how long the sentence can be, and what a conviction costs you afterwards — including your right to vote, to own a firearm, and to pass a background check.</p>

          <p>If you or someone you know has been charged with a crime, the first question is usually which category the charge falls into — because that one word, felony or misdemeanor, shapes almost everything that follows. This guide explains what each term means, how the line is drawn, the classes within each category, the crimes that can be charged either way, how the court process differs, and what a conviction means for your life after the case ends.</p>

          <h2>What is a misdemeanor?</h2>
          <p>A misdemeanor is the less serious category of crime. Under federal law and in most states, a misdemeanor is a criminal offence that carries a potential jail term of one year or less. The sentence, if there is one, is usually served in a local county jail rather than a prison, and the fine is smaller than for a felony. Misdemeanors are still crimes — a conviction creates a criminal record — but the punishment and the long-term consequences are lighter.</p>
          <p>Typical misdemeanors include petty theft or shoplifting, simple assault, vandalism, trespassing, disorderly conduct, and a first-offence drink-driving charge in most states. What makes them misdemeanors is not that they are harmless — a simple assault can still hurt someone badly — but that the law puts a ceiling on the punishment: no more than a year behind bars.</p>
          <p>Misdemeanors are themselves divided into classes. Under the federal system there are three: a Class A misdemeanor carries more than six months but no more than one year in jail; a Class B misdemeanor carries more than 30 days but no more than six months; and a Class C misdemeanor carries more than five days but no more than 30 days. States use their own class systems, and the names and limits differ, but the idea is the same: the more serious the misdemeanor, the longer the possible sentence.</p>
          <p>Misdemeanor cases also move faster than felony cases. There is usually no preliminary hearing, and the case goes from the first court appearance to pretrial conferences and then to a resolution — often a plea agreement — without the extra steps a felony requires.</p>

          <h2>What is a felony?</h2>
          <p>A felony is the most serious category of crime. Under federal law, a felony is a crime punishable by death or by imprisonment for more than one year. Most states use a similar test: either the length of the sentence, or the place where it is served. As a rule of thumb, a sentence of more than one year, served in a state or federal prison rather than a county jail, marks a crime as a felony.</p>
          <p>Typical felonies include murder, rape, robbery, burglary, arson, aggravated assault, and drug trafficking. The common thread is not the type of act alone but the seriousness the law attaches to it: these are the offences the law punishes with years in prison rather than months in jail.</p>
          <p>Felonies are also divided into classes, and the federal system uses five: Class A felonies carry life imprisonment or death; Class B carries 25 years or more; Class C carries at least 10 but less than 25 years; Class D carries at least 5 but less than 10 years; and Class E carries more than one year but less than five. States have their own class systems — some use letters, some use numbered levels — and the maximum sentence for each class is set by state law, so the same crime can carry a different maximum in different states.</p>
          <p>A felony conviction brings consequences that reach far beyond the sentence itself. A person convicted of a felony may lose the right to vote, at least for a time, may be barred from owning a firearm under federal law, and will face a criminal record that shows up on employment and housing background checks. Those consequences are covered in detail below.</p>

          <h2>What is an infraction?</h2>
          <p>Below misdemeanors sits a third, lighter category: infractions, sometimes called violations. An infraction is a breach of a rule or ordinance — most often a traffic offence such as speeding or running a red light — that is punished only by a fine. There is no jail time, and in most places an infraction does not appear on a criminal record and does not carry a right to a jury trial.</p>
          <p>The three categories form a ladder: infractions at the bottom, punished by fines; misdemeanors in the middle, punished by up to a year in jail; felonies at the top, punished by more than a year in prison. Knowing which rung a charge sits on tells you how seriously the system treats it.</p>

          <h2>Felony vs misdemeanor at a glance</h2>
          <table>
            <tr><th></th><th>Misdemeanor</th><th>Felony</th></tr>
            <tr><td>Maximum punishment</td><td>One year in jail or less</td><td>More than one year in prison, or death</td></tr>
            <tr><td>Where the sentence is served</td><td>County or local jail</td><td>State or federal prison</td></tr>
            <tr><td>Typical examples</td><td>Petty theft, simple assault, vandalism, trespassing, first-offence drink-driving in most states</td><td>Murder, rape, robbery, burglary, arson, aggravated assault, drug trafficking</td></tr>
            <tr><td>Preliminary hearing</td><td>Usually none</td><td>Usually yes, before trial</td></tr>
            <tr><td>Grand jury</td><td>No</td><td>Required for federal felonies; used in many states</td></tr>
            <tr><td>Speed of the case</td><td>Usually faster</td><td>Usually slower, with more steps</td></tr>
            <tr><td>Right to vote</td><td>Generally unaffected</td><td>Often suspended, at least while in prison; rules vary by state</td></tr>
            <tr><td>Firearms</td><td>Generally unaffected, with an exception for misdemeanor domestic violence convictions</td><td>Federal law bars a person convicted of a felony from possessing a firearm</td></tr>
            <tr><td>Criminal record</td><td>Yes, but often easier to seal or expunge</td><td>Yes, and harder to clear</td></tr>
          </table>

          <h2>What are the classes of felonies and misdemeanors?</h2>
          <p>Each category is split into classes so that the punishment fits the seriousness of the offence. The federal system is the clearest example: felonies run from Class A (life or death) down to Class E (more than one year but less than five), and misdemeanors run from Class A (more than six months up to one year) down to Class C (more than five days up to 30 days). The class is set by the maximum sentence the law allows for that offence, not by the sentence a particular person actually receives.</p>
          <p>States use their own systems, and they differ widely. Some states use letters, some use numbers, and some use names such as &quot;first degree&quot; and &quot;second degree&quot;. A Class A felony in one state may carry a different maximum from a Class A felony in another. That is why a guide can explain the structure but cannot tell you the maximum for a specific charge in your state — for that you need the statute in your state, or an attorney who practices there.</p>
          <p>The class also matters for sentencing. Judges usually sentence within the range set for the class, and repeat offences, the use of a weapon, or harm to a victim can push a sentence toward the top of the range or add extra time. Aggravating factors like these are one reason two people convicted of the same class of offence can receive very different sentences.</p>

          <h2>What is a wobbler?</h2>
          <p>Not every crime sits neatly in one category. Some offences are &quot;wobblers&quot;: crimes the law allows to be charged either as a felony or as a misdemeanor. California is the best-known example — its law lists a large group of wobbler offences — but other states have similar arrangements under different names.</p>
          <p>With a wobbler, the prosecutor chooses first, when the charge is filed. The judge can disagree: in California, for example, a judge can declare a wobbler a misdemeanor at sentencing, or when granting probation without imposing a sentence. The decision turns on the facts of the case, the defendant&apos;s record, and the circumstances of the offence — the same act can be a misdemeanor for a first-time offender and a felony for someone with a record.</p>
          <p>Wobblers matter because they give both sides room to negotiate. A defence attorney may argue that a wobbler should be filed or reduced to a misdemeanor, and that argument can be the difference between a prison sentence with lasting consequences and a jail sentence that can later be cleared from the record.</p>

          <h2>Who decides whether a charge is a felony or a misdemeanor?</h2>
          <p>Three people, in practice, shape the answer. First, the legislature: the statute that defines the offence sets the maximum punishment, and that maximum is what puts the offence in one category or the other. Second, the prosecutor: the prosecutor chooses which charges to file, and where the law allows a choice — as with wobblers — the prosecutor&apos;s decision sets the category. Third, the judge: in some states a judge can reduce a felony to a misdemeanor, usually at sentencing or when granting probation.</p>
          <p>Plea bargaining can also change the category. A prosecutor may agree to reduce a felony charge to a misdemeanor in exchange for a guilty plea, and that reduction is often the main goal of the negotiation for a defendant — because the difference between the two labels follows the person long after the sentence ends.</p>
          <p>One point that surprises people: the category is decided by the maximum punishment the law allows, not by the sentence actually imposed. A person convicted of a felony who receives probation and no prison time still has a felony conviction on their record. The label comes from what the law could have imposed, not from what the judge did impose.</p>

          <h2>How does the court process differ?</h2>
          <p>Felony cases have more steps, and they take longer. Before a felony goes to trial, the prosecution usually has to show a judge at a preliminary hearing that there is probable cause to believe the defendant committed the crime. Federal felonies also require a grand jury indictment under the Fifth Amendment, and many states use grand juries too, while others rely on the preliminary hearing instead. Misdemeanor cases usually skip both steps and move straight from the first appearance to pretrial conferences and resolution.</p>
          <p>Both categories carry the right to a jury trial, but the line is drawn by the possible sentence. The Supreme Court held in Baldwin v. New York in 1970 that a jury trial is required for offences punishable by more than six months&apos; imprisonment, which covers all felonies and the more serious misdemeanors. For the least serious misdemeanors and infractions, a judge alone may decide the case.</p>
          <p>Bail also works differently in practice. A person charged with a misdemeanor is often released on a citation or on their own recognizance — a written promise to appear — while a felony charge usually means a bail amount set by a schedule or by a judge, and a higher one. How bail is set, what it costs, and what happens if a court date is missed are explained in our guide to <Link href="/blog/what-is-bail-and-how-does-it-work">what bail is and how it works</Link>.</p>

          <h2>What happens after a conviction?</h2>
          <p>The sentence is only part of the cost of a conviction. The label — felony or misdemeanor — keeps affecting a person&apos;s life long after the case ends, and the difference between the two is sharpest here.</p>
          <p><strong>Voting.</strong> In most states, a felony conviction suspends the right to vote at least while the person is in prison. Many states restore it once the sentence is complete, including probation or parole; a few restrict it for longer, and the rules differ from state to state. Two states, Maine and Vermont, allow people to vote even while in prison. A misdemeanor conviction generally does not affect the right to vote at all.</p>
          <p><strong>Firearms.</strong> Federal law makes it unlawful for a person convicted of a crime punishable by more than one year in prison to possess a firearm — in practice, anyone with a felony conviction. A misdemeanor conviction does not usually trigger that ban, with one important exception: a conviction for a misdemeanor crime of domestic violence also bars the person from possessing a firearm under federal law.</p>
          <p><strong>Employment and housing.</strong> Both kinds of conviction appear on a criminal record, and both can show up on background checks. A felony is harder to explain to an employer or a landlord, and some jobs — particularly licensed professions, work with children, and government positions — are closed to people with felony convictions. A misdemeanor is less damaging, but it is not invisible: it still has to be disclosed on applications that ask about criminal history.</p>
          <p><strong>Professional licences.</strong> Doctors, nurses, lawyers, teachers and other licensed professionals can lose their licence, or be refused one, after a conviction. Licensing boards usually treat felonies more seriously, but some misdemeanors — particularly those involving dishonesty or drugs — can also end a career.</p>
          <p><strong>Immigration.</strong> For a person who is not a United States citizen, the consequences can be the most serious of all. Certain offences classified as &quot;aggravated felonies&quot; under immigration law can lead to deportation even for a lawful permanent resident, and some misdemeanors can also carry immigration consequences. Anyone in this position should speak to an immigration attorney before making any decision about a criminal case.</p>
          <p><strong>Public benefits and other rights.</strong> A felony conviction can affect eligibility for some public benefits, student aid, public housing and the right to serve on a jury or hold public office, depending on the state and the offence. These are sometimes called the collateral consequences of a conviction, and they are one reason the felony-misdemeanor distinction matters so much.</p>

          <h2>Can a felony be reduced to a misdemeanor?</h2>
          <p>Sometimes. If the charge is a wobbler, a judge may reduce it to a misdemeanor, usually at sentencing or when granting probation. A prosecutor may also agree to reduce a felony to a misdemeanor as part of a plea agreement. Both routes depend on the law of the state, the facts of the case and the defendant&apos;s record, and neither is available for every offence — serious violent felonies, for example, are not reducible.</p>
          <p>A separate question is whether a conviction can be cleared from the record afterwards. Many states allow some misdemeanors to be sealed or expunged after a waiting period, and a few allow the same for some lower-level felonies. The rules vary widely: some states limit expungement to first offences, some require a clean record for a set number of years, and some exclude whole categories of crime. If clearing your record matters to you, ask an attorney in your state what is possible — the answer is different in every state.</p>

          <h2>What should you do if you are charged?</h2>
          <p>The category of the charge should not change the first step: speak to a criminal defence attorney as early as possible, and do not discuss the facts of the case with anyone else — including the police — until you have. Anything you say can be used in the case, and early advice often shapes whether a charge is filed as a felony or a misdemeanor, and whether a plea agreement is possible.</p>
          <p>Our guide to <Link href="/blog/what-to-expect-first-consultation">what to expect at your first consultation with an attorney</Link> explains how that first meeting works, and our guide to <Link href="/blog/choose-right-type-attorney">choosing the right type of attorney</Link> explains how to find a criminal defence attorney for your situation. If you are unsure whether an attorney is the right fit, the <Link href="/blog/red-flags-choosing-attorney">red flags to watch for when choosing an attorney</Link> are worth reading before you commit.</p>
          <p>Do not ignore the charge, and do not miss a court date. Missing court can lead to a warrant, a forfeited bail, and a new charge on top of the old one — and for a felony, the consequences of a missed date are worse than for a misdemeanor. What happens when a court date is missed, and what a summons requires, are covered in our guides to <Link href="/blog/what-happens-if-you-ignore-a-court-summons">what happens if you ignore a court summons</Link> and <Link href="/blog/what-is-bail-and-how-does-it-work">what bail is and how it works</Link>.</p>

          <h2>Frequently asked questions</h2>
          <h3>Is a DUI a felony or a misdemeanor?</h3>
          <p>In most states, a first-offence drink-driving charge is a misdemeanor. It can become a felony when there are aggravating factors — for example, a very high blood alcohol level, a child in the car, an accident causing injury, or repeat offences within a set number of years. The exact line is drawn by state law.</p>
          <h3>Can a misdemeanor turn into a felony?</h3>
          <p>Yes, in two ways. First, if the offence is a wobbler, the prosecutor or the judge can treat it as a felony. Second, repeat offending can raise the category: in many states, a second or third conviction for the same offence — such as petty theft or drink-driving — can be charged as a felony even though the first offence was a misdemeanor.</p>
          <h3>Do misdemeanors show up on background checks?</h3>
          <p>Yes. A misdemeanor conviction creates a criminal record, and it usually appears on the same background checks that show felonies. It is less damaging than a felony, and in many states it is easier to have sealed or expunged, but it is not invisible — applications that ask about criminal history should be answered honestly.</p>
          <h3>How long does a felony stay on your record?</h3>
          <p>In most states, a felony conviction stays on your record permanently unless it is sealed, expunged or pardoned — and many states do not allow felonies to be expunged at all. A few states allow some lower-level felonies to be cleared after a waiting period. The rules are set state by state, so an attorney in your state can tell you what is possible.</p>
          <h3>What is the difference between a felony and an infraction?</h3>
          <p>An infraction is the lightest category: a breach of a rule or ordinance, such as a traffic offence, punished only by a fine, with no jail time and usually no jury trial. A felony is the heaviest: a crime punishable by more than one year in prison. A misdemeanor sits between the two, punishable by up to one year in a county jail.</p>
          <h3>Does a felony always mean prison time?</h3>
          <p>No. The category is decided by the maximum punishment the law allows, not by the sentence actually imposed. A person convicted of a felony may receive probation, a suspended sentence, or a shorter jail term instead of prison — but the conviction on their record is still a felony, with the consequences that follow from that label.</p>
        </div>
      </div>
    </div>
  );
}
