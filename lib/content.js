// Static editorial content: practice areas + states.
// Attorney listings themselves live in the database (no fake listings).

export const PRACTICE_AREAS = [
  {
    slug: "personal-injury",
    name: "Personal Injury",
    tagline: "Compensation after accidents and negligence",
    description:
      "Personal injury law covers cases where someone is harmed by another party's negligence or intentional actions — car accidents, slip-and-fall injuries, dog bites, and more. Most personal injury attorneys work on contingency, meaning you pay nothing unless you win.",
    whenToHire: ["You were injured in a car, truck, or motorcycle accident", "You slipped, tripped, or fell on someone else's property", "A defective product caused you harm", "An insurance company is pressuring you to settle fast"],
    faqs: [
      { q: "How much does a personal injury lawyer cost?", a: "Most work on a contingency fee — typically 33–40% of your settlement — so there is no upfront cost." },
      { q: "How long do I have to file a claim?", a: "Every state has a statute of limitations, usually 2–3 years from the injury date. Act quickly to protect your rights." },
      { q: "What is my case worth?", a: "It depends on medical bills, lost wages, pain and suffering, and long-term impact. A free consultation can give you a realistic range." },
    ],
  },
  {
    slug: "criminal-defense",
    name: "Criminal Defense",
    tagline: "Protecting your rights against criminal charges",
    description:
      "Criminal defense attorneys represent people accused of crimes, from misdemeanors like petty theft to serious felonies. They challenge evidence, negotiate plea deals, and defend you at trial — because everyone deserves a fair defense.",
    whenToHire: ["You have been arrested or charged with a crime", "Police want to question you", "You received a DUI/DWI citation", "You need to clear or expunge a record"],
    faqs: [
      { q: "Should I talk to police without a lawyer?", a: "No. You have the right to remain silent and the right to an attorney. Use both." },
      { q: "What is the difference between a misdemeanor and a felony?", a: "Misdemeanors carry up to a year in jail; felonies carry a year or more in prison and bigger long-term consequences." },
      { q: "Can a public defender handle my case?", a: "Public defenders are licensed attorneys, but heavy caseloads mean less personal attention than a private lawyer." },
    ],
  },
  {
    slug: "family-law",
    name: "Family Law",
    tagline: "Divorce, custody, and family matters",
    description:
      "Family lawyers handle divorce, child custody and support, alimony, adoption, and prenuptial agreements. These cases are emotional — a good family attorney protects both your interests and your children's wellbeing.",
    whenToHire: ["You are considering or facing divorce", "You need a custody or visitation arrangement", "Child support needs to be set or modified", "You are adopting a child"],
    faqs: [
      { q: "How is property divided in divorce?", a: "It depends on your state — community property states split marital assets 50/50, while equitable distribution states divide fairly but not necessarily equally." },
      { q: "How is child custody decided?", a: "Courts decide based on the child's best interests, considering stability, parental involvement, and the child's wishes at a certain age." },
      { q: "Do I need a lawyer for an uncontested divorce?", a: "Even uncontested divorces benefit from legal review to make sure the agreement is fair and enforceable." },
    ],
  },
  {
    slug: "estate-planning",
    name: "Estate Planning",
    tagline: "Wills, trusts, and protecting your legacy",
    description:
      "Estate planning attorneys help you draft wills, create trusts, assign powers of attorney, and plan for incapacity — so your assets go where you intend and your family avoids probate battles.",
    whenToHire: ["You need a will or want to update one", "You want to set up a trust for children or assets", "You need powers of attorney or healthcare directives", "You are managing a loved one's estate"],
    faqs: [
      { q: "Do I need a will if I don't own much?", a: "Yes — a will also names guardians for minor children and an executor, which matters at any asset level." },
      { q: "Will vs. trust — what's the difference?", a: "A will takes effect after death and goes through probate; a trust can avoid probate and manage assets during incapacity too." },
      { q: "How often should I update my estate plan?", a: "Review it every 3–5 years and after major life events: marriage, divorce, births, or big asset changes." },
    ],
  },
  {
    slug: "immigration",
    name: "Immigration",
    tagline: "Visas, green cards, and citizenship",
    description:
      "Immigration attorneys guide individuals and families through visas, green cards, asylum, deportation defense, and naturalization. Immigration law is federal and highly technical — mistakes can cost years.",
    whenToHire: ["You are applying for a visa or green card", "You face deportation or removal proceedings", "You are seeking asylum", "You want to become a U.S. citizen"],
    faqs: [
      { q: "How long does a green card take?", a: "Family-based cases can take months to years; employment-based timelines vary by country and category." },
      { q: "Can I be deported for a minor offense?", a: "Some offenses trigger removal proceedings. Never plead to a criminal charge without immigration advice." },
      { q: "What happens at a naturalization interview?", a: "USCIS tests English and civics knowledge and reviews your application history." },
    ],
  },
  {
    slug: "employment-law",
    name: "Employment Law",
    tagline: "Workplace rights and wrongful termination",
    description:
      "Employment lawyers handle wrongful termination, discrimination, harassment, wage theft, and severance negotiations — protecting workers' rights on the job.",
    whenToHire: ["You were fired unfairly or faced discrimination", "You experienced workplace harassment", "Your employer owes you unpaid wages or overtime", "You were asked to sign a severance or non-compete"],
    faqs: [
      { q: "What counts as wrongful termination?", a: "Being fired for discriminatory reasons, retaliation, or in violation of a contract — not every unfair firing is illegal." },
      { q: "How do I prove workplace discrimination?", a: "Documentation is key: emails, reviews, witness names, and a timeline of events." },
      { q: "Am I owed overtime?", a: "Most hourly workers are; many salaried workers are misclassified. An attorney can review your situation." },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "Buying, selling, and property disputes",
    description:
      "Real estate attorneys review contracts, clear title issues, handle closings, and resolve landlord-tenant and boundary disputes — making sure your biggest transaction is a safe one.",
    whenToHire: ["You are buying or selling property", "A title or boundary dispute arose", "Your landlord or tenant violated the lease", "You need a zoning or land-use approval"],
    faqs: [
      { q: "Do I need a lawyer to buy a house?", a: "Some states require it; everywhere else it's strongly recommended for contract review and title issues." },
      { q: "What is title insurance?", a: "It protects against ownership claims, liens, or errors in public records affecting your property." },
      { q: "Can my landlord raise rent mid-lease?", a: "Generally no — lease terms lock rent until renewal, unless the lease says otherwise." },
    ],
  },
  {
    slug: "bankruptcy",
    name: "Bankruptcy",
    tagline: "Fresh start from overwhelming debt",
    description:
      "Bankruptcy attorneys help individuals and businesses eliminate or restructure debt through Chapter 7, 13, or 11 — stopping collections, lawsuits, and wage garnishments.",
    whenToHire: ["Debt collectors won't stop calling", "You are facing foreclosure or repossession", "Wages are being garnished", "You can't keep up with minimum payments"],
    faqs: [
      { q: "Will bankruptcy wipe out all my debt?", a: "Most unsecured debts (credit cards, medical bills) — but not student loans, recent taxes, or child support in most cases." },
      { q: "Chapter 7 vs. Chapter 13?", a: "Chapter 7 liquidates eligible assets for a fast discharge; Chapter 13 sets a 3–5 year repayment plan." },
      { q: "Will I lose my house?", a: "Often not — exemptions protect equity up to state limits, especially in Chapter 13." },
    ],
  },
  {
    slug: "business-law",
    name: "Business Law",
    tagline: "Formation, contracts, and disputes",
    description:
      "Business attorneys help form LLCs and corporations, draft contracts, handle partnerships, and resolve commercial disputes — the legal backbone of your company.",
    whenToHire: ["You are starting a business and need the right structure", "You need contracts drafted or reviewed", "A partner or vendor dispute threatens operations", "You are buying or selling a business"],
    faqs: [
      { q: "LLC vs. corporation?", a: "LLCs offer flexible taxation and simpler governance; corporations suit businesses planning to raise investment." },
      { q: "Do I need a lawyer for a simple contract?", a: "Yes — boilerplate templates often miss state-specific rules and liability traps." },
      { q: "How do I protect my business name?", a: "State registration protects the name locally; a federal trademark protects it nationally." },
    ],
  },
  {
    slug: "tax-law",
    name: "Tax Law",
    tagline: "IRS disputes, audits, and planning",
    description:
      "Tax attorneys resolve IRS audits and back taxes, negotiate offers in compromise, and plan transactions to minimize liability — when the numbers get serious.",
    whenToHire: ["The IRS is auditing you", "You owe back taxes you can't pay", "You received a scary IRS notice", "You need tax planning for a business or estate"],
    faqs: [
      { q: "What's an Offer in Compromise?", a: "An IRS program letting you settle tax debt for less than owed if you genuinely can't pay in full." },
      { q: "How long can the IRS collect?", a: "Generally 10 years from assessment — but actions like installment agreements can extend it." },
      { q: "CPA vs. tax attorney?", a: "CPAs handle compliance and planning; attorneys add attorney-client privilege — critical in disputes." },
    ],
  },
  {
    slug: "intellectual-property",
    name: "Intellectual Property",
    tagline: "Patents, trademarks, and copyrights",
    description:
      "IP attorneys protect inventions, brands, and creative works through patents, trademarks, and copyrights — and enforce those rights against infringers.",
    whenToHire: ["You invented something worth patenting", "You need to trademark a brand or logo", "Someone copied your work", "You received a cease-and-desist letter"],
    faqs: [
      { q: "How long does a patent take?", a: "Utility patents typically take 2–3 years from filing to grant." },
      { q: "Do I own what my employees create?", a: "Not automatically — use written IP assignment agreements." },
      { q: "Trademark vs. copyright?", a: "Trademarks protect brand identifiers; copyrights protect creative expression." },
    ],
  },
  {
    slug: "medical-malpractice",
    name: "Medical Malpractice",
    tagline: "When healthcare causes harm",
    description:
      "Medical malpractice attorneys represent patients harmed by misdiagnosis, surgical errors, or negligent care — cases that require both legal skill and medical expertise.",
    whenToHire: ["A misdiagnosis or delayed diagnosis harmed you", "A surgical error caused injury", "A birth injury affected your child", "Medication errors led to serious harm"],
    faqs: [
      { q: "Is a bad outcome always malpractice?", a: "No — you must prove the provider's care fell below the accepted standard and caused the harm." },
      { q: "Do I need a medical expert?", a: "Almost always — most states require an expert affidavit just to file." },
      { q: "How are these cases paid for?", a: "Usually contingency fees, like personal injury — no upfront cost." },
    ],
  },
  {
    slug: "workers-compensation",
    name: "Workers' Compensation",
    tagline: "Injured on the job",
    description:
      "Workers' comp attorneys help injured employees get medical care and wage benefits when employers or insurers deny or underpay claims.",
    whenToHire: ["Your workplace injury claim was denied", "Benefits stopped too soon", "Your employer retaliated after you filed", "A third party also caused your injury"],
    faqs: [
      { q: "Can I sue my employer instead?", a: "Usually no — workers' comp is the exclusive remedy, with narrow exceptions." },
      { q: "What if my injury developed over time?", a: "Repetitive-stress and occupational diseases are covered; report them promptly." },
      { q: "Do I get paid while I can't work?", a: "Temporary disability benefits typically pay a portion of lost wages." },
    ],
  },
  {
    slug: "social-security-disability",
    name: "Social Security Disability",
    tagline: "SSDI and SSI claims",
    description:
      "Disability attorneys help with SSDI and SSI applications and appeals — most initial claims are denied, and representation sharply improves approval odds.",
    whenToHire: ["Your disability claim was denied", "You need help with the initial application", "You have a hearing before a judge", "Benefits were cut off"],
    faqs: [
      { q: "How long does approval take?", a: "Initial decisions take 3–5 months; appeals can take a year or more." },
      { q: "What does a disability lawyer charge?", a: "Fees are capped by law — typically 25% of backpay, max $7,200, only if you win." },
      { q: "Can I work while applying?", a: "Limited earnings are allowed, but substantial work can disqualify you." },
    ],
  },
  {
    slug: "dui-defense",
    name: "DUI / DWI Defense",
    tagline: "Fighting impaired-driving charges",
    description:
      "DUI attorneys challenge breath and blood tests, negotiate reduced charges, and protect your license — because a conviction affects driving, work, and insurance for years.",
    whenToHire: ["You were arrested for DUI/DWI", "You refused a breathalyzer", "Your license is at risk of suspension", "This isn't your first offense"],
    faqs: [
      { q: "Should I refuse the breath test?", a: "Refusal has automatic license consequences in most states — know your state's implied-consent law." },
      { q: "Can a DUI be dismissed?", a: "Yes — faulty stops, bad test calibration, and procedural errors all lead to dismissals." },
      { q: "Will I lose my license?", a: "Administrative suspension is separate from the criminal case — act within days to request a hearing." },
    ],
  },
  {
    slug: "civil-rights",
    name: "Civil Rights",
    tagline: "Discrimination and constitutional violations",
    description:
      "Civil rights attorneys fight discrimination and government overreach — police misconduct, housing and employment discrimination, and violations of constitutional rights.",
    whenToHire: ["You faced discrimination in housing or employment", "Police used excessive force", "A government agency violated your rights", "You need to challenge an unconstitutional policy"],
    faqs: [
      { q: "What is a Section 1983 claim?", a: "A federal lawsuit against state actors who violate your constitutional rights." },
      { q: "How do I prove discrimination?", a: "Patterns, comparators, documents, and timelines build the case." },
      { q: "Are there deadlines?", a: "Yes — EEOC charges often must be filed within 180–300 days." },
    ],
  },
];

export const practiceAreaBySlug = (slug) => PRACTICE_AREAS.find((p) => p.slug === slug);

export const STATES = [
  ["AL", "Alabama"], ["AK", "Alaska"], ["AZ", "Arizona"], ["AR", "Arkansas"], ["CA", "California"],
  ["CO", "Colorado"], ["CT", "Connecticut"], ["DE", "Delaware"], ["FL", "Florida"], ["GA", "Georgia"],
  ["HI", "Hawaii"], ["ID", "Idaho"], ["IL", "Illinois"], ["IN", "Indiana"], ["IA", "Iowa"],
  ["KS", "Kansas"], ["KY", "Kentucky"], ["LA", "Louisiana"], ["ME", "Maine"], ["MD", "Maryland"],
  ["MA", "Massachusetts"], ["MI", "Michigan"], ["MN", "Minnesota"], ["MS", "Mississippi"], ["MO", "Missouri"],
  ["MT", "Montana"], ["NE", "Nebraska"], ["NV", "Nevada"], ["NH", "New Hampshire"], ["NJ", "New Jersey"],
  ["NM", "New Mexico"], ["NY", "New York"], ["NC", "North Carolina"], ["ND", "North Dakota"], ["OH", "Ohio"],
  ["OK", "Oklahoma"], ["OR", "Oregon"], ["PA", "Pennsylvania"], ["RI", "Rhode Island"], ["SC", "South Carolina"],
  ["SD", "South Dakota"], ["TN", "Tennessee"], ["TX", "Texas"], ["UT", "Utah"], ["VT", "Vermont"],
  ["VA", "Virginia"], ["WA", "Washington"], ["WV", "West Virginia"], ["WI", "Wisconsin"], ["WY", "Wyoming"],
  ["DC", "District of Columbia"],
];

export const stateName = (code) => {
  const s = STATES.find(([c]) => c === String(code || "").toUpperCase());
  return s ? s[1] : code;
};

export const stateSlug = (code) => stateName(code).toLowerCase().replace(/[^a-z]+/g, "-");
export const stateFromSlug = (slug) => {
  const s = STATES.find(([, name]) => name.toLowerCase().replace(/[^a-z]+/g, "-") === slug);
  return s ? s[0] : null;
};
