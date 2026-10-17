// Turso (libSQL) client + data-access helpers.
// Tables are created automatically on first boot (CREATE TABLE IF NOT EXISTS).

import { createClient } from "@libsql/client";
import { randomUUID } from "crypto";

let _client = null;
export function client() {
  if (_client) return _client;
  const url = process.env.TURSO_DATABASE_URL;
  if (!url) throw new Error("TURSO_DATABASE_URL is not set");
  const authToken = process.env.TURSO_AUTH_TOKEN;
  _client = createClient({ url, ...(authToken ? { authToken } : {}) });
  return _client;
}

// ── Schema bootstrap (runs once per cold start) ────────────────────
const SCHEMA = [
  `CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY, name TEXT, email TEXT UNIQUE, emailVerified TEXT,
    image TEXT, passwordHash TEXT, role TEXT NOT NULL DEFAULT 'customer',
    createdAt TEXT NOT NULL DEFAULT (datetime('now')),
    updatedAt TEXT NOT NULL DEFAULT (datetime('now')))`,
  `CREATE TABLE IF NOT EXISTS attorneys (
    id TEXT PRIMARY KEY, name TEXT NOT NULL, firm TEXT, photoUrl TEXT,
    phone TEXT, email TEXT, website TEXT, address TEXT, city TEXT,
    state TEXT NOT NULL, practiceAreas TEXT NOT NULL DEFAULT '[]',
    bio TEXT, education TEXT, languages TEXT, barAdmissions TEXT,
    yearsExperience INTEGER, freeConsult INTEGER NOT NULL DEFAULT 0,
    rating REAL NOT NULL DEFAULT 0, reviewCount INTEGER NOT NULL DEFAULT 0,
    published INTEGER NOT NULL DEFAULT 1, featured INTEGER NOT NULL DEFAULT 0,
    createdAt TEXT NOT NULL DEFAULT (datetime('now')),
    updatedAt TEXT NOT NULL DEFAULT (datetime('now')))`,
  `CREATE INDEX IF NOT EXISTS idx_attorneys_state ON attorneys(state)`,
  `CREATE INDEX IF NOT EXISTS idx_attorneys_published ON attorneys(published)`,
  `CREATE TABLE IF NOT EXISTS reviews (
    id TEXT PRIMARY KEY, attorneyId TEXT NOT NULL REFERENCES attorneys(id) ON DELETE CASCADE,
    userId TEXT REFERENCES users(id) ON DELETE SET NULL, userName TEXT NOT NULL,
    rating INTEGER NOT NULL, text TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'pending',
    createdAt TEXT NOT NULL DEFAULT (datetime('now')))`,
  `CREATE INDEX IF NOT EXISTS idx_reviews_attorney ON reviews(attorneyId)`,
  `CREATE INDEX IF NOT EXISTS idx_reviews_status ON reviews(status)`,
  `CREATE TABLE IF NOT EXISTS favorites (
    id TEXT PRIMARY KEY, userId TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    attorneyId TEXT NOT NULL REFERENCES attorneys(id) ON DELETE CASCADE,
    createdAt TEXT NOT NULL DEFAULT (datetime('now')),
    UNIQUE(userId, attorneyId))`,
  `CREATE TABLE IF NOT EXISTS appointments (
    id TEXT PRIMARY KEY, attorneyId TEXT NOT NULL REFERENCES attorneys(id) ON DELETE CASCADE,
    userId TEXT REFERENCES users(id) ON DELETE SET NULL, userName TEXT NOT NULL,
    userEmail TEXT NOT NULL, userPhone TEXT, date TEXT NOT NULL, time TEXT NOT NULL,
    notes TEXT, status TEXT NOT NULL DEFAULT 'pending',
    createdAt TEXT NOT NULL DEFAULT (datetime('now')))`,
  `CREATE INDEX IF NOT EXISTS idx_appointments_attorney ON appointments(attorneyId)`,
  `CREATE INDEX IF NOT EXISTS idx_appointments_user ON appointments(userId)`,
  `CREATE TABLE IF NOT EXISTS blog_posts (
    id TEXT PRIMARY KEY, slug TEXT UNIQUE NOT NULL, title TEXT NOT NULL,
    excerpt TEXT, content TEXT NOT NULL, category TEXT, author TEXT, imageUrl TEXT,
    published INTEGER NOT NULL DEFAULT 0,
    createdAt TEXT NOT NULL DEFAULT (datetime('now')),
    updatedAt TEXT NOT NULL DEFAULT (datetime('now')))`,
  `CREATE TABLE IF NOT EXISTS site_settings (key TEXT PRIMARY KEY, value TEXT NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS password_resets (
    id TEXT PRIMARY KEY, userId TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    tokenHash TEXT NOT NULL UNIQUE, expiresAt TEXT NOT NULL, used INTEGER NOT NULL DEFAULT 0,
    createdAt TEXT NOT NULL DEFAULT (datetime('now')))`,
  `CREATE INDEX IF NOT EXISTS idx_password_resets_hash ON password_resets(tokenHash)`,
];

let _schemaPromise = null;
export function ensureSchema() {
  if (!_schemaPromise) {
    _schemaPromise = (async () => {
      const c = client();
      for (const stmt of SCHEMA) await c.execute(stmt);
      // Seed default site settings
      const defaults = {
        site_name: "Justice Connect",
        tagline: "Find a USA Attorney You Can Trust",
        announcement: "",
        contact_email: "",
        contact_phone: "",
      };
      for (const [k, v] of Object.entries(defaults)) {
        await c.execute({
          sql: "INSERT OR IGNORE INTO site_settings (key, value) VALUES (?, ?)",
          args: [k, v],
        });
      }
      // Seed admin from env if provided and no admin exists
      const adminEmail = (process.env.ADMIN_EMAIL || "").toLowerCase().trim();
      const adminPassword = process.env.ADMIN_PASSWORD || "";
      if (adminEmail && adminPassword) {
        const existing = await c.execute({
          sql: "SELECT id FROM users WHERE role = 'admin' LIMIT 1",
          args: [],
        });
        if (existing.rows.length === 0) {
          const bcrypt = await import("bcryptjs");
          const hash = await bcrypt.hash(adminPassword, 10);
          await c.execute({
            sql: "INSERT INTO users (id, name, email, passwordHash, role) VALUES (?, ?, ?, ?, 'admin')",
            args: [randomUUID(), "Site Admin", adminEmail, hash],
          });
        }
      }
    })().catch((e) => {
      _schemaPromise = null;
      throw e;
    });
  }
  return _schemaPromise;
}

// ── Row helpers ────────────────────────────────────────────────────
const toBool = (v) => v === 1 || v === true;
function mapAttorney(r) {
  if (!r) return null;
  return {
    ...r,
    practiceAreas: safeParse(r.practiceAreas, []),
    freeConsult: toBool(r.freeConsult),
    published: toBool(r.published),
    featured: toBool(r.featured),
  };
}
function safeParse(s, fb) {
  try { return JSON.parse(s || ""); } catch { return fb; }
}

// ── Users ─────────────────────────────────────────────────────────
export async function getUserByEmail(email) {
  await ensureSchema();
  const r = await client().execute({ sql: "SELECT * FROM users WHERE email = ? LIMIT 1", args: [email] });
  return r.rows[0] || null;
}
export async function getUserById(id) {
  await ensureSchema();
  const r = await client().execute({ sql: "SELECT * FROM users WHERE id = ? LIMIT 1", args: [id] });
  return r.rows[0] || null;
}
export async function createUser({ id, name, email, image, role = "customer", passwordHash = null }) {
  await ensureSchema();
  const uid = id || randomUUID();
  await client().execute({
    sql: "INSERT INTO users (id, name, email, image, role, passwordHash) VALUES (?, ?, ?, ?, ?, ?)",
    args: [uid, name || null, email, image || null, role, passwordHash],
  });
  return getUserById(uid);
}
export async function countAdmins() {
  await ensureSchema();
  const r = await client().execute({ sql: "SELECT COUNT(*) AS n FROM users WHERE role = 'admin'", args: [] });
  return Number(r.rows[0]?.n || 0);
}
export async function listUsers(limit = 100) {
  await ensureSchema();
  const r = await client().execute({
    sql: "SELECT id, name, email, image, role, createdAt FROM users ORDER BY createdAt DESC LIMIT ?",
    args: [limit],
  });
  return r.rows;
}

// ── Attorneys ─────────────────────────────────────────────────────
export async function listAttorneys({ state, practiceArea, q, publishedOnly = true, limit = 100, offset = 0, sort = "rating" } = {}) {
  await ensureSchema();
  const where = [];
  const args = [];
  if (publishedOnly) where.push("published = 1");
  if (state) { where.push("state = ?"); args.push(state.toUpperCase()); }
  if (q) { where.push("(name LIKE ? OR firm LIKE ? OR city LIKE ?)"); args.push(`%${q}%`, `%${q}%`, `%${q}%`); }
  const order = sort === "newest" ? "createdAt DESC" : sort === "name" ? "name ASC" : "rating DESC, reviewCount DESC";
  let sql = `SELECT * FROM attorneys${where.length ? " WHERE " + where.join(" AND ") : ""} ORDER BY ${order} LIMIT ? OFFSET ?`;
  args.push(limit, offset);
  const r = await client().execute({ sql, args });
  let rows = r.rows.map(mapAttorney);
  if (practiceArea) rows = rows.filter((a) => a.practiceAreas.includes(practiceArea));
  return rows;
}
export async function countAttorneys(publishedOnly = true) {
  await ensureSchema();
  const r = await client().execute({
    sql: `SELECT COUNT(*) AS n FROM attorneys${publishedOnly ? " WHERE published = 1" : ""}`, args: [],
  });
  return Number(r.rows[0]?.n || 0);
}
export async function getAttorney(id, { includeUnpublished = false } = {}) {
  await ensureSchema();
  const r = await client().execute({
    sql: `SELECT * FROM attorneys WHERE id = ?${includeUnpublished ? "" : " AND published = 1"} LIMIT 1`,
    args: [id],
  });
  return mapAttorney(r.rows[0]);
}
export async function createAttorney(data) {
  await ensureSchema();
  const id = randomUUID();
  const fields = ["id", "name", "firm", "photoUrl", "phone", "email", "website", "address", "city",
    "state", "practiceAreas", "bio", "education", "languages", "barAdmissions",
    "yearsExperience", "freeConsult", "published", "featured"];
  const vals = [
    id, data.name, data.firm || null, data.photoUrl || null, data.phone || null,
    data.email || null, data.website || null, data.address || null, data.city || null,
    (data.state || "").toUpperCase(), JSON.stringify(data.practiceAreas || []),
    data.bio || null, data.education || null, data.languages || null,
    data.barAdmissions || null, data.yearsExperience ?? null,
    data.freeConsult ? 1 : 0, data.published === false ? 0 : 1, data.featured ? 1 : 0,
  ];
  await client().execute({ sql: `INSERT INTO attorneys (${fields.join(",")}) VALUES (${fields.map(() => "?").join(",")})`, args: vals });
  return getAttorney(id, { includeUnpublished: true });
}
export async function updateAttorney(id, data) {
  await ensureSchema();
  const sets = [];
  const args = [];
  const map = {
    name: "name", firm: "firm", photoUrl: "photoUrl", phone: "phone", email: "email",
    website: "website", address: "address", city: "city", bio: "bio", education: "education",
    languages: "languages", barAdmissions: "barAdmissions",
  };
  for (const [k, col] of Object.entries(map)) {
    if (data[k] !== undefined) { sets.push(`${col} = ?`); args.push(data[k] || null); }
  }
  if (data.state !== undefined) { sets.push("state = ?"); args.push(String(data.state).toUpperCase()); }
  if (data.practiceAreas !== undefined) { sets.push("practiceAreas = ?"); args.push(JSON.stringify(data.practiceAreas)); }
  if (data.yearsExperience !== undefined) { sets.push("yearsExperience = ?"); args.push(data.yearsExperience ?? null); }
  if (data.freeConsult !== undefined) { sets.push("freeConsult = ?"); args.push(data.freeConsult ? 1 : 0); }
  if (data.published !== undefined) { sets.push("published = ?"); args.push(data.published ? 1 : 0); }
  if (data.featured !== undefined) { sets.push("featured = ?"); args.push(data.featured ? 1 : 0); }
  if (!sets.length) return getAttorney(id, { includeUnpublished: true });
  sets.push("updatedAt = datetime('now')");
  args.push(id);
  await client().execute({ sql: `UPDATE attorneys SET ${sets.join(", ")} WHERE id = ?`, args });
  return getAttorney(id, { includeUnpublished: true });
}
export async function deleteAttorney(id) {
  await ensureSchema();
  await client().execute({ sql: "DELETE FROM attorneys WHERE id = ?", args: [id] });
  return true;
}

// ── Reviews ───────────────────────────────────────────────────────
export async function listReviews({ attorneyId, status, limit = 100 } = {}) {
  await ensureSchema();
  const where = [];
  const args = [];
  if (attorneyId) { where.push("attorneyId = ?"); args.push(attorneyId); }
  if (status) { where.push("status = ?"); args.push(status); }
  const r = await client().execute({
    sql: `SELECT * FROM reviews${where.length ? " WHERE " + where.join(" AND ") : ""} ORDER BY createdAt DESC LIMIT ?`,
    args: [...args, limit],
  });
  return r.rows;
}
export async function createReview({ attorneyId, userId, userName, rating, text }) {
  await ensureSchema();
  const id = randomUUID();
  await client().execute({
    sql: "INSERT INTO reviews (id, attorneyId, userId, userName, rating, text, status) VALUES (?, ?, ?, ?, ?, ?, 'pending')",
    args: [id, attorneyId, userId || null, userName, rating, text],
  });
  return id;
}
export async function setReviewStatus(id, status) {
  await ensureSchema();
  await client().execute({ sql: "UPDATE reviews SET status = ? WHERE id = ?", args: [status, id] });
  if (status === "approved") await recomputeRating(id);
  return true;
}
export async function deleteReview(id) {
  await ensureSchema();
  const r = await client().execute({ sql: "SELECT attorneyId, status FROM reviews WHERE id = ?", args: [id] });
  const row = r.rows[0];
  await client().execute({ sql: "DELETE FROM reviews WHERE id = ?", args: [id] });
  if (row?.status === "approved") await recomputeRatingByAttorney(row.attorneyId);
  return true;
}
async function recomputeRating(reviewId) {
  const r = await client().execute({ sql: "SELECT attorneyId FROM reviews WHERE id = ?", args: [reviewId] });
  if (r.rows[0]) await recomputeRatingByAttorney(r.rows[0].attorneyId);
}
async function recomputeRatingByAttorney(attorneyId) {
  const r = await client().execute({
    sql: "SELECT COUNT(*) AS n, AVG(rating) AS avg FROM reviews WHERE attorneyId = ? AND status = 'approved'",
    args: [attorneyId],
  });
  const n = Number(r.rows[0]?.n || 0);
  const avg = n ? Number(r.rows[0].avg) : 0;
  await client().execute({
    sql: "UPDATE attorneys SET rating = ?, reviewCount = ?, updatedAt = datetime('now') WHERE id = ?",
    args: [Math.round(avg * 10) / 10, n, attorneyId],
  });
}

// ── Favorites ─────────────────────────────────────────────────────
export async function listFavorites(userId) {
  await ensureSchema();
  const r = await client().execute({
    sql: `SELECT a.* FROM favorites f JOIN attorneys a ON a.id = f.attorneyId
          WHERE f.userId = ? AND a.published = 1 ORDER BY f.createdAt DESC`,
    args: [userId],
  });
  return r.rows.map(mapAttorney);
}
export async function isFavorite(userId, attorneyId) {
  await ensureSchema();
  const r = await client().execute({
    sql: "SELECT id FROM favorites WHERE userId = ? AND attorneyId = ? LIMIT 1", args: [userId, attorneyId],
  });
  return r.rows.length > 0;
}
export async function addFavorite(userId, attorneyId) {
  await ensureSchema();
  await client().execute({
    sql: "INSERT OR IGNORE INTO favorites (id, userId, attorneyId) VALUES (?, ?, ?)",
    args: [randomUUID(), userId, attorneyId],
  });
}
export async function removeFavorite(userId, attorneyId) {
  await ensureSchema();
  await client().execute({ sql: "DELETE FROM favorites WHERE userId = ? AND attorneyId = ?", args: [userId, attorneyId] });
}

// ── Appointments ──────────────────────────────────────────────────
export async function listAppointments({ userId, attorneyId, limit = 200 } = {}) {
  await ensureSchema();
  const where = [];
  const args = [];
  if (userId) { where.push("ap.userId = ?"); args.push(userId); }
  if (attorneyId) { where.push("ap.attorneyId = ?"); args.push(attorneyId); }
  const r = await client().execute({
    sql: `SELECT ap.*, at.name AS attorneyName, at.firm AS attorneyFirm
          FROM appointments ap JOIN attorneys at ON at.id = ap.attorneyId
          ${where.length ? " WHERE " + where.join(" AND ") : ""}
          ORDER BY ap.date DESC, ap.time DESC LIMIT ?`,
    args: [...args, limit],
  });
  return r.rows;
}
export async function createAppointment(data) {
  await ensureSchema();
  const id = randomUUID();
  await client().execute({
    sql: `INSERT INTO appointments (id, attorneyId, userId, userName, userEmail, userPhone, date, time, notes, status)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')`,
    args: [id, data.attorneyId, data.userId || null, data.userName, data.userEmail,
      data.userPhone || null, data.date, data.time, data.notes || null],
  });
  return id;
}
export async function setAppointmentStatus(id, status) {
  await ensureSchema();
  await client().execute({ sql: "UPDATE appointments SET status = ? WHERE id = ?", args: [status, id] });
  return true;
}

// ── Blog ──────────────────────────────────────────────────────────
export async function listBlogPosts({ publishedOnly = true, limit = 100 } = {}) {
  await ensureSchema();
  const r = await client().execute({
    sql: `SELECT * FROM blog_posts${publishedOnly ? " WHERE published = 1" : ""} ORDER BY createdAt DESC LIMIT ?`,
    args: [limit],
  });
  return r.rows;
}
export async function getBlogPost(slug, { includeUnpublished = false } = {}) {
  await ensureSchema();
  const r = await client().execute({
    sql: `SELECT * FROM blog_posts WHERE slug = ?${includeUnpublished ? "" : " AND published = 1"} LIMIT 1`,
    args: [slug],
  });
  return r.rows[0] || null;
}
export async function getBlogPostById(id) {
  await ensureSchema();
  const r = await client().execute({ sql: "SELECT * FROM blog_posts WHERE id = ? LIMIT 1", args: [id] });
  return r.rows[0] || null;
}
export async function slugify(s) {
  return String(s || "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || randomUUID().slice(0, 8);
}
export async function createBlogPost(data) {
  await ensureSchema();
  const id = randomUUID();
  let slug = await slugify(data.slug || data.title);
  const exists = await getBlogPost(slug, { includeUnpublished: true });
  if (exists) slug = `${slug}-${id.slice(0, 6)}`;
  await client().execute({
    sql: `INSERT INTO blog_posts (id, slug, title, excerpt, content, category, author, imageUrl, published)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [id, slug, data.title, data.excerpt || null, data.content || "",
      data.category || null, data.author || null, data.imageUrl || null, data.published ? 1 : 0],
  });
  return getBlogPostById(id);
}
export async function updateBlogPost(id, data) {
  await ensureSchema();
  const sets = [];
  const args = [];
  for (const k of ["title", "excerpt", "content", "category", "author", "imageUrl"]) {
    if (data[k] !== undefined) { sets.push(`${k} = ?`); args.push(data[k] || null); }
  }
  if (data.slug !== undefined) { sets.push("slug = ?"); args.push(await slugify(data.slug)); }
  if (data.published !== undefined) { sets.push("published = ?"); args.push(data.published ? 1 : 0); }
  if (!sets.length) return getBlogPostById(id);
  sets.push("updatedAt = datetime('now')");
  args.push(id);
  await client().execute({ sql: `UPDATE blog_posts SET ${sets.join(", ")} WHERE id = ?`, args });
  return getBlogPostById(id);
}
export async function deleteBlogPost(id) {
  await ensureSchema();
  await client().execute({ sql: "DELETE FROM blog_posts WHERE id = ?", args: [id] });
  return true;
}

// ── Settings ──────────────────────────────────────────────────────
export async function getSettings() {
  await ensureSchema();
  const r = await client().execute({ sql: "SELECT key, value FROM site_settings", args: [] });
  const out = {};
  for (const row of r.rows) out[row.key] = row.value;
  return out;
}
export async function setSetting(key, value) {
  await ensureSchema();
  await client().execute({
    sql: "INSERT INTO site_settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value",
    args: [key, String(value ?? "")],
  });
}

// ── Password resets ───────────────────────────────────────────────
export async function createPasswordResetToken(userId) {
  await ensureSchema();
  const { randomBytes, createHash } = await import("crypto");
  const token = randomBytes(32).toString("hex");
  const tokenHash = createHash("sha256").update(token).digest("hex");
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString(); // 1 hour
  await client().execute({
    sql: "INSERT INTO password_resets (id, userId, tokenHash, expiresAt) VALUES (?, ?, ?, ?)",
    args: [randomUUID(), userId, tokenHash, expiresAt],
  });
  return token;
}

export async function consumePasswordResetToken(token) {
  await ensureSchema();
  const { createHash } = await import("crypto");
  const tokenHash = createHash("sha256").update(String(token)).digest("hex");
  const r = await client().execute({
    sql: "SELECT * FROM password_resets WHERE tokenHash = ? AND used = 0 LIMIT 1",
    args: [tokenHash],
  });
  const row = r.rows[0];
  if (!row) return null;
  if (new Date(row.expiresAt).getTime() < Date.now()) return null;
  return row;
}

export async function markResetUsed(id) {
  await ensureSchema();
  await client().execute({ sql: "UPDATE password_resets SET used = 1 WHERE id = ?", args: [id] });
}

export async function setUserPassword(userId, passwordHash) {
  await ensureSchema();
  await client().execute({
    sql: "UPDATE users SET passwordHash = ?, updatedAt = datetime('now') WHERE id = ?",
    args: [passwordHash, userId],
  });
}

// ── Dashboard stats ───────────────────────────────────────────────
export async function getStats() {
  await ensureSchema();
  const c = client();
  const q = async (sql) => Number((await c.execute({ sql, args: [] })).rows[0]?.n || 0);
  const [attorneys, published, pendingReviews, users, appointments, posts] = await Promise.all([
    q("SELECT COUNT(*) AS n FROM attorneys"),
    q("SELECT COUNT(*) AS n FROM attorneys WHERE published = 1"),
    q("SELECT COUNT(*) AS n FROM reviews WHERE status = 'pending'"),
    q("SELECT COUNT(*) AS n FROM users"),
    q("SELECT COUNT(*) AS n FROM appointments WHERE status = 'pending'"),
    q("SELECT COUNT(*) AS n FROM blog_posts WHERE published = 1"),
  ]);
  return { attorneys, published, pendingReviews, users, appointments, posts };
}
