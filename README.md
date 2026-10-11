# Rachel Regnell — UX/UI Portfolio

A playful, interactive portfolio built with React, [Vite](https://vite.dev) and
[Framer Motion](https://motion.dev).

## What's inside

Built from the "Rachel Regnell Portfolio Mockup" design canvas, with Framer Motion interactions added:

- **Hero**: giant RACHEL / REGNELL blocks whose letters rise into place, swap colors on hover and drift apart as you scroll. The "Open to CX + GTM roles" sticker spins and can be dragged.
- **Pick a story**: 5 case studies (Fresh Start, Ondus on the Waterfront, Bonita Paws, Scio-gro, rachelregnell.com). Each has 4 steps you can flip through, with animated transitions, tap-to-zoom images and count-up results.
- **Problem / Approach / Result / If I had more time** panels that update with the chosen project
- **Proof** (18 TripAdvisor reviews, counted up), **Built for a GTM team** concept cards, a **Next project** button and the **Let's talk** footer
- Honors the visitor's "reduce motion" setting

## Editing content

All copy, links, images and projects live in [`src/content.js`](src/content.js). Contact links
(email, LinkedIn, résumé) are set there too; the résumé PDF lives in `public/`, so to update it
replace `public/Rachel_Regnell_Resume.pdf` with a file of the same name. Project images are in `src/assets/projects/`.

Older full-size design exports are in `design-files/`.

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Deploying

Pushing to `main` builds the site and deploys it to GitHub Pages through
`.github/workflows/deploy.yml`. One-time setup: **Settings → Pages → Source: GitHub Actions**.
To use rachelregnell.com, add it under **Settings → Pages → Custom domain** and point your DNS at GitHub Pages.
