// Initialize the Turso database: create tables, default settings, seed blog posts.
// Usage: npm run db:init   (requires TURSO_DATABASE_URL + TURSO_AUTH_TOKEN in .env.local)
import { createClient } from "@libsql/client";
import { randomUUID } from "crypto";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const url = process.env.TURSO_DATABASE_URL;
if (!url) {
  console.error("TURSO_DATABASE_URL is not set. Copy .env.example to .env.local and fill it in.");
  process.exit(1);
}
const db = createClient({ url, ...(process.env.TURSO_AUTH_TOKEN ? { authToken: process.env.TURSO_AUTH_TOKEN } : {}) });

// 1. Schema
const schema = readFileSync(join(root, "lib", "schema.sql"), "utf8");
const statements = schema.split(";").map((s) => s.trim()).filter((s) => s && !s.startsWith("--"));
for (const stmt of statements) await db.execute(stmt);
console.log(`✓ schema ready (${statements.length} statements)`);

// 2. Default settings
const defaults = {
  site_name: "Justice Connect",
  tagline: "Find a USA Attorney You Can Trust",
  announcement: "",
  contact_email: "",
  contact_phone: "",
};
for (const [k, v] of Object.entries(defaults)) {
  await db.execute({ sql: "INSERT OR IGNORE INTO site_settings (key, value) VALUES (?, ?)", args: [k, v] });
}
console.log("✓ default settings");

// 3. Seed informational blog posts (educational content, not listings)
const posts = [
  {
    title: "How to Choose the Right Personal Injury Attorney",
    category: "Guides",
    author: "Justice Connect",
    excerpt: "Contingency fees, track records, and the questions to ask before you sign anything.",
    content: `Choosing a personal injury attorney is one of the most important decisions you'll make after an accident. Here's how to do it right.

Most personal injury lawyers work on contingency, meaning they take 33–40% of your settlement and you pay nothing upfront. That makes the initial consultation — which is usually free — the perfect time to interview them.

Ask about their track record with cases like yours, who will actually handle your file day to day, and how they communicate. A lawyer who won't return your calls before you sign won't return them after.

Check their standing with your state bar, read client reviews critically, and be wary of anyone who guarantees a specific outcome. No honest attorney can promise a result.

Finally, act quickly. Every state has a statute of limitations — often two to three years — and evidence gets harder to gather with time.`,
  },
  {
    title: "What to Expect at a Free Legal Consultation",
    category: "Guides",
    author: "Justice Connect",
    excerpt: "How to prepare, what to bring, and how to tell if the lawyer is right for you.",
    content: `Many attorneys offer free initial consultations. Knowing what to expect helps you make the most of it.

Before the meeting, write a one-page timeline of what happened, gather relevant documents (police reports, medical bills, contracts, correspondence), and list your questions. The lawyer needs facts to evaluate your case.

During the consultation, the attorney will assess whether you have a viable claim, explain your options, and discuss fees. This is also your interview of them — notice whether they listen, explain clearly, and treat you with respect.

You are under no obligation to hire them. Take notes, and if you meet with several lawyers, compare not just fees but responsiveness and clarity.

Afterward, a good attorney sends a written fee agreement before doing any work. Never pay a retainer without one.`,
  },
  {
    title: "Understanding Attorney Fees: Contingency, Hourly, and Flat Rates",
    category: "Guides",
    author: "Justice Connect",
    excerpt: "The three ways lawyers charge — and which one fits your case.",
    content: `Legal fees generally fall into three structures. Knowing them helps you compare attorneys fairly.

Contingency fees are common in personal injury, medical malpractice, and workers' compensation. The lawyer takes a percentage of your winnings — typically 33–40% — and you pay nothing if you lose. Ask whether case costs are deducted before or after the percentage.

Hourly rates dominate criminal defense, family law, and business matters, ranging widely by market and experience. Always ask for an estimate of total hours and get the rate in writing.

Flat fees are typical for routine work like uncontested divorces, simple wills, or DUI first offenses. Confirm exactly what the flat fee covers so add-ons don't surprise you.

Whatever the structure, get the fee agreement in writing before work begins, and don't be afraid to negotiate or get a second quote.`,
  },
];

for (const p of posts) {
  const slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const existing = await db.execute({ sql: "SELECT id FROM blog_posts WHERE slug = ?", args: [slug] });
  if (existing.rows.length === 0) {
    await db.execute({
      sql: `INSERT INTO blog_posts (id, slug, title, excerpt, content, category, author, published)
            VALUES (?, ?, ?, ?, ?, ?, ?, 1)`,
      args: [randomUUID(), slug, p.title, p.excerpt, p.content, p.category, p.author],
    });
    console.log(`✓ seeded post: ${slug}`);
  } else {
    console.log(`– post exists: ${slug}`);
  }
}

console.log("\nDone. Your Turso database is ready.");
