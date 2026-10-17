-- Justice Connect — Turso (libSQL/SQLite) schema
-- Run once: paste into the Turso dashboard SQL editor, or
-- run `turso db shell <db-name> < schema.sql`, or let the app
-- auto-create tables on first boot (see lib/db.js ensureSchema).

CREATE TABLE IF NOT EXISTS users (
  id           TEXT PRIMARY KEY,
  name         TEXT,
  email        TEXT UNIQUE,
  emailVerified TEXT,
  image        TEXT,
  passwordHash TEXT,
  role         TEXT NOT NULL DEFAULT 'customer',
  createdAt    TEXT NOT NULL DEFAULT (datetime('now')),
  updatedAt    TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS attorneys (
  id              TEXT PRIMARY KEY,
  name            TEXT NOT NULL,
  firm            TEXT,
  photoUrl        TEXT,
  phone           TEXT,
  email           TEXT,
  website         TEXT,
  address         TEXT,
  city            TEXT,
  state           TEXT NOT NULL,
  practiceAreas   TEXT NOT NULL DEFAULT '[]',
  bio             TEXT,
  education       TEXT,
  languages       TEXT,
  barAdmissions   TEXT,
  yearsExperience INTEGER,
  freeConsult     INTEGER NOT NULL DEFAULT 0,
  rating          REAL NOT NULL DEFAULT 0,
  reviewCount     INTEGER NOT NULL DEFAULT 0,
  published       INTEGER NOT NULL DEFAULT 1,
  featured        INTEGER NOT NULL DEFAULT 0,
  createdAt       TEXT NOT NULL DEFAULT (datetime('now')),
  updatedAt       TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_attorneys_state ON attorneys(state);
CREATE INDEX IF NOT EXISTS idx_attorneys_published ON attorneys(published);

CREATE TABLE IF NOT EXISTS reviews (
  id         TEXT PRIMARY KEY,
  attorneyId TEXT NOT NULL REFERENCES attorneys(id) ON DELETE CASCADE,
  userId     TEXT REFERENCES users(id) ON DELETE SET NULL,
  userName   TEXT NOT NULL,
  rating     INTEGER NOT NULL,
  text       TEXT NOT NULL,
  status     TEXT NOT NULL DEFAULT 'pending',
  createdAt  TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_reviews_attorney ON reviews(attorneyId);
CREATE INDEX IF NOT EXISTS idx_reviews_status ON reviews(status);

CREATE TABLE IF NOT EXISTS favorites (
  id         TEXT PRIMARY KEY,
  userId     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  attorneyId TEXT NOT NULL REFERENCES attorneys(id) ON DELETE CASCADE,
  createdAt  TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(userId, attorneyId)
);

CREATE TABLE IF NOT EXISTS appointments (
  id         TEXT PRIMARY KEY,
  attorneyId TEXT NOT NULL REFERENCES attorneys(id) ON DELETE CASCADE,
  userId     TEXT REFERENCES users(id) ON DELETE SET NULL,
  userName   TEXT NOT NULL,
  userEmail  TEXT NOT NULL,
  userPhone  TEXT,
  date       TEXT NOT NULL,
  time       TEXT NOT NULL,
  notes      TEXT,
  status     TEXT NOT NULL DEFAULT 'pending',
  createdAt  TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_appointments_attorney ON appointments(attorneyId);
CREATE INDEX IF NOT EXISTS idx_appointments_user ON appointments(userId);

CREATE TABLE IF NOT EXISTS blog_posts (
  id        TEXT PRIMARY KEY,
  slug      TEXT UNIQUE NOT NULL,
  title     TEXT NOT NULL,
  excerpt   TEXT,
  content   TEXT NOT NULL,
  category  TEXT,
  author    TEXT,
  imageUrl  TEXT,
  published INTEGER NOT NULL DEFAULT 0,
  createdAt TEXT NOT NULL DEFAULT (datetime('now')),
  updatedAt TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS site_settings (
  key   TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS password_resets (
  id        TEXT PRIMARY KEY,
  userId    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  tokenHash TEXT NOT NULL UNIQUE,
  expiresAt TEXT NOT NULL,
  used      INTEGER NOT NULL DEFAULT 0,
  createdAt TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_password_resets_hash ON password_resets(tokenHash);
