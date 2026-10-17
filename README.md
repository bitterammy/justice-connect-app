# Justice Connect — USA Attorney Directory

A full-stack Next.js attorney directory with a charcoal-black + champagne-gold luxury design.

**Features**
- Public directory: search by state + practice area, 16 practice-area guides, 50 state pages, blog, contact
- **List Your Firm** — free submissions go **live instantly** (auto-approved)
- **Admin panel** (`/admin`): dashboard stats, attorney CRUD, review moderation, appointment management, blog editor, user list, site settings
- **Customer accounts**: Continue with Google (NextAuth), favorites, reviews (admin-approved), appointment booking, profile
- **No fake data**: the directory starts empty with an honest "coming soon" state

**Stack**: Next.js 14 (App Router) · NextAuth.js · Turso (libSQL/SQLite) via `@libsql/client` · bcryptjs

---

## 1. Database — Turso

1. Create an account at [turso.tech](https://turso.tech) and create a database:
   ```bash
   turso db create justice-connect
   ```
2. Get the connection URL and a token:
   ```bash
   turso db show justice-connect --url
   turso db tokens create justice-connect
   ```
3. Copy `.env.example` → `.env.local` and fill in `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN`.
4. Create tables + seed content:
   ```bash
   npm install
   npm run db:init
   ```
   (Tables are also auto-created on first app boot as a fallback.)

## 2. Google OAuth (customer login)

1. Go to [Google Cloud Console → Credentials](https://console.cloud.google.com/apis/credentials)
2. Create **OAuth client ID** → **Web application**
3. Add authorized redirect URI:
   - Production: `https://tasdi.foo/api/auth/callback/google`
   - Local dev: `http://localhost:3000/api/auth/callback/google`
4. Put the client ID + secret in `.env.local` (`GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`).
5. Generate `NEXTAUTH_SECRET`: `openssl rand -base64 32`

> Without Google credentials the site still works — the Google button is hidden until they're set. Admin login (email + password) always works.

## 3. Run locally

```bash
npm install
npm run db:init   # needs .env.local with Turso vars
npm run dev       # → http://localhost:3000
```

Then open **http://localhost:3000/admin/setup** to create your admin account.

## 4. Deploy to Vercel

### Option A — Vercel CLI / dashboard (recommended)

1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project → Import** the repo.
3. Add environment variables (same as `.env.local`):
   - `TURSO_DATABASE_URL`
   - `TURSO_AUTH_TOKEN`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` = `https://tasdi.foo`
   - `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
4. Deploy. Then visit `https://tasdi.foo/admin/setup` to create the admin account.

### Option B — Vercel Postgres instead of Turso

The code uses `@libsql/client`, which also talks to any libSQL-compatible endpoint. Turso is recommended; if you prefer Vercel Postgres you would need to swap `lib/db.js` for a Postgres client (e.g. `@vercel/postgres`) — the SQL is standard and ports directly.

## 5. Custom domain (tasdi.foo)

1. Vercel dashboard → your project → **Settings → Domains** → add `tasdi.foo`.
2. At your registrar (name.com), add:
   - **A** record: Name `@`, Value `216.198.79.1`
   - **CNAME** record: Name `www`, Value `<your-id>.vercel-dns-017.com` (Vercel shows the exact value)
3. DNS propagates in minutes–hours. Also add the production redirect URI in Google Cloud Console (step 2 above).

## 6. Admin bootstrap & password reset

- **First run**: open `/admin/setup` and create the owner account (email + password). The page disables itself once an admin exists.
- **Shortcut**: set `ADMIN_EMAIL` + `ADMIN_PASSWORD` env vars before first boot to seed the admin automatically.
- Admin login lives at `/admin/login` (also linked discreetly in the footer).
- **Forgot password?** — the login page has a "Forgot password?" link:
  1. Enter the admin email at `/admin/forgot-password`.
  2. A single-use reset link (valid 1 hour) is generated.
  3. If `SMTP_*` env vars are set, the link is **emailed** to the admin.
     Otherwise it is written to the **server logs** (Vercel → your project → Logs) so you can copy it from there.
  4. Open the link (`/admin/reset-password?token=…`) and set a new password.

## Project map

```
app/
  page.js                    homepage (hero search, practice areas, listings)
  search/                    directory search + filters
  attorneys/[id]/            attorney profile, reviews, booking
  practice-areas/…  states/… guides
  blog/…  contact/  list-firm/  login/
  favorites/ appointments/ profile/      (signed-in users)
  admin/                     login, setup, dashboard, attorneys, reviews,
                             appointments, blog, users, settings
  api/…                      REST endpoints for all of the above
components/                  header, footer, cards, forms, admin tables
lib/
  db.js        Turso client, schema bootstrap, all data-access helpers
  auth.js      NextAuth config (Google + admin credentials, JWT sessions)
  content.js   16 practice areas + 50 states editorial content
  schema.sql   raw SQL schema (for Turso dashboard / CLI)
middleware.js                protects /admin/* and user pages
scripts/init-db.mjs          one-command DB setup + seed
```

## Notes

- Reviews are held as **pending** until an admin approves them; approval recomputes the attorney's rating.
- Attorney submissions via **List Your Firm are auto-published**; the admin can unpublish/edit/delete afterwards.
- The directory ships with **zero attorney listings** by design — only real submitted firms appear.
