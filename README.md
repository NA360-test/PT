# Pranesh Trades — Website + Admin Panel

Plain files, no build tools, no CLI. Works on mobile and desktop automatically.

## Files

- `index.html` / `style.css` / `script.js` — the public website
- `admin.html` / `admin.js` — private page to view everyone who filled the contact form
- `supabase-config.js` — where your backend keys go (shared by both pages)

## Step 1 — Upload to GitHub

1. Open the GitHub app → your repo.
2. "Add file" → "Upload files" → select all 6 files here.
3. Commit.

## Step 2 — Turn on GitHub Pages (free hosting)

1. Repo → Settings → Pages.
2. Source: `main` branch, root folder. Save.
3. You'll get a live link in a minute. Connect `praneshtrades.in` later from the same screen.

## Step 3 — Set up the backend (Supabase), so the contact form + admin panel work

1. Go to supabase.com → sign up → "New project". Pick any name/region, set a database password (save it somewhere).
2. Once the project is ready, go to **Project Settings → API**.
   - Copy the **Project URL**
   - Copy the **anon public** key
3. Open `supabase-config.js` in this folder and paste them in:
   ```
   const SUPABASE_URL = "https://xxxxx.supabase.co";
   const SUPABASE_ANON_KEY = "eyJ...";
   ```
4. In Supabase, go to the **Table Editor** → "New table". Name it `leads`. Add these columns (Supabase adds `id` and `created_at` automatically — keep those):
   - `name` — type `text`
   - `phone` — type `text`
   - `stage` — type `text`
5. Still in Supabase, go to **Authentication** → the table's RLS (Row Level Security) is ON by default — that's correct, keep it on. Go to the `leads` table → **RLS Policies** → add two policies:
   - One policy: allow **INSERT** for role `anon` (so the public website can submit the form)
   - One policy: allow **SELECT** for role `authenticated` (so only logged-in admins can view leads)
   Supabase's policy editor has templates for both — pick "Enable insert for anon" and "Enable read access for authenticated users only".
6. Create your own admin login: **Authentication → Users → Add user**. Enter your email + a password. This is what you'll use to log into `admin.html`.

## Step 4 — Using the admin panel

Go to `yoursite.com/admin.html`, log in with the email/password from Step 3.6.
You'll see every form submission with name, phone, and trading stage, newest first.

This page is not linked from the public site and is marked "noindex" so search
engines won't show it — but the real security is the login, not the hidden URL.

## What you still need to fill in

Search `index.html` for `[` — placeholders for your positioning line, real stats,
roadmap steps, and testimonials (only publish stats/testimonials you can stand behind).

## Setting up the protected video

1. Upload your intro video to **Vimeo** (Plus plan or above, for domain restriction + download blocking).
2. Vimeo video settings → Privacy → "Where can this be embedded" → your domain only.
3. Vimeo video settings → Privacy → turn OFF "Allow downloads".
4. Copy the video ID from the Vimeo URL into `index.html` where it says `YOUR_VIDEO_ID`.

No video is 100% uncopyable (screen recording always exists), but this closes the easy routes — no direct download, no shareable link outside your site.

## What changed in this version

- **Theme:** neon/futuristic trading-terminal look — dark background, cyan/magenta glow accents, monospace data labels, faint grid backdrop.
- **Bug fix:** the contact form was overflowing off-screen on some phones. Cause: CSS grid/flex items don't shrink below their content size by default, and the dropdown's text was wide enough to push the layout past the screen edge. Fixed by forcing all form elements to respect their container width.
- **Backend:** form submissions now save to Supabase instead of just showing a message.
- **New:** `admin.html` — password-protected page to view all submitted leads.
