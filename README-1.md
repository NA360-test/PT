# Pranesh Trades — Website (v1 scaffold)

This is a plain website — just 3 files (`index.html`, `style.css`, `script.js`).
No build tools, no CLI needed. Works on mobile and desktop automatically
(the layout adjusts itself).

## How to get this live (all from your phone, no computer needed)

**Step 1 — Upload to GitHub**
1. Open the GitHub app → your repo (or create a new one).
2. Use "Add file" → "Upload files" → select all 4 files here.
3. Commit.

**Step 2 — Turn on GitHub Pages (free hosting)**
1. In the repo, go to Settings → Pages.
2. Under "Source", pick the `main` branch, root folder.
3. Save. GitHub will give you a live link in a minute
   (looks like `yourusername.github.io/repo-name`).
4. Later, connect your `praneshtrades.in` domain to it under the same Pages settings
   ("Custom domain" field).

## What you still need to fill in

Everything in `[ ]` square brackets inside `index.html` is a placeholder —
search for `[` to find them all:
- Your positioning line under the headline
- Real stats (years trading, traders mentored) — only publish numbers you can stand behind
- Your 4-step mentorship roadmap description
- Real testimonials, with permission from the people quoted
- Your Vimeo video ID (see below)

## Setting up the protected video

1. Upload your intro video to **Vimeo** (a paid plan — "Plus" or above — is needed
   for domain restriction and download blocking).
2. In Vimeo settings for that video:
   - Privacy → "Where can this be embedded" → add only your domain (praneshtrades.in)
   - Privacy → turn OFF "Allow downloads"
3. Copy the video ID from the Vimeo URL and paste it into `index.html`
   where it says `YOUR_VIDEO_ID`.

This is what actually stops the video from being downloaded or shared as a
standalone link — no video on any website is 100% uncopyable (someone can always
screen-record), but this closes the easy routes.

## Next steps (not built yet)

- Hooking the "Book a Call" form to Supabase so leads actually get saved
- WhatsApp click-to-chat button
- Connecting the custom domain
