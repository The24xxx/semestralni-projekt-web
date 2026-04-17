# Google Setup

Public URL:
`https://the24xxx.github.io/semestralni-projekt-web/`

## What is already ready

- GitHub Pages is live.
- `robots.txt` exists in the site root.
- `sitemap.xml` exists in the site root.
- GA4 loading is prepared in one place via `js/site-config.js`.

## Google Search Console

Use a URL-prefix property for:
`https://the24xxx.github.io/semestralni-projekt-web/`

Recommended next steps:

1. Open Google Search Console.
2. Add a new property as URL prefix.
3. Enter `https://the24xxx.github.io/semestralni-projekt-web/`
4. Verify ownership.
5. Submit sitemap:
   `https://the24xxx.github.io/semestralni-projekt-web/sitemap.xml`
6. Request indexing for:
   - homepage
   - `o-mne.html`
   - `galerie.html`
   - `rezervace.html`
   - `cenik.html`
   - `faq.html`
   - `kontakt.html`

If Google gives you an HTML file verification token, add that exact file to the repo root and redeploy.
If Google gives you a meta tag verification token, paste it into the `<head>` of `index.html`.

## Google Analytics 4

1. Open Google Analytics.
2. Create a GA4 property.
3. Create a Web data stream for:
   `https://the24xxx.github.io/semestralni-projekt-web/`
4. Copy the Measurement ID in the format `G-XXXXXXXXXX`.
5. Open `js/site-config.js`.
6. Replace the empty value of `googleAnalyticsId` with your real ID.
7. Push the change to GitHub Pages.

After deployment, verify data in GA4 Realtime.

## Notes for the PDF

- Mention that the project is hosted on GitHub Pages.
- Add screenshots from:
  - Google Search Console property setup
  - sitemap submission
  - indexing / URL inspection
  - Google Analytics property and Realtime report
