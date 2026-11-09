# Matchstick Design Studio — structure-first website

A clean initial implementation of the approved multi-page website architecture for Matchstick Design Studio, Pune.

## Routes

- `/`
- `/work`
- `/work/[slug]`
- `/services`
- `/services/logo-design`
- `/services/graphic-design`
- `/services/publication-design`
- `/about`
- `/contact`

## What is intentionally placeholder content

- Portfolio images and client names
- Founder/team information
- Email address
- Detailed service deliverables
- Exact process/timelines
- Testimonials
- Sunday opening hours
- Map embed
- Form backend

Do not publish unverified placeholders as factual business information.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Before launch

1. Replace `https://example.com` in `app/layout.js`, `app/sitemap.js`, and `app/robots.js` with the production domain.
2. Confirm all NAP information with the owner.
3. Replace placeholder imagery with optimized real portfolio assets.
4. Connect the contact form to a real backend/provider.
5. Add the verified Google Maps embed/link.
6. Add LocalBusiness structured data only after canonical business facts are confirmed.
7. Add animations only after content and layout are stable.
