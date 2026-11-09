# AGENTS.md — Matchstick Design Studio

This repository is the source of truth for the Matchstick Design Studio website. Before changing architecture, routes, content structure, design tokens, or motion, inspect the existing implementation first.

## Product goal

Build a polished multi-page portfolio/business website for Matchstick Design Studio, a local graphic design studio in Sadashiv Peth, Pune. The site should work as both a strong design portfolio and a local-search / AI-search business presence.

Primary goals:
- Present real design work clearly.
- Generate enquiries.
- Rank for relevant Pune / Sadashiv Peth / Laxmi Road graphic-design searches.
- Be easy for search engines and AI answer engines to understand and cite.
- Feel like a professional design studio, not a generic agency template.

## Tech stack

- Next.js App Router.
- React.
- CSS-first styling.
- GitHub repository: kshreya28/matchstick-design-studio.
- Vercel Git integration is enabled.
- Main branch auto-deploys to Vercel.

Do not add libraries unless they solve a real problem. In particular, do not add GSAP, Lenis, a component framework, or animation libraries for effects that can be handled cleanly with CSS.

## Current route architecture

Keep the site multi-page.

- /
- /work
- /work/[slug]
- /services
- /services/logo-design
- /services/graphic-design
- /services/publication-design
- /about
- /contact

Do not collapse the site into a single scrolling page.

## Content truth rules

Never invent:
- clients
- testimonials
- prices
- founder identity or biography
- founding year
- team size
- project outcomes
- turnaround times
- revision counts
- printing capabilities
- awards
- rankings such as "best in Pune"

Placeholder content is allowed during design iteration but must be visibly treated as placeholder content and must not be presented as fact.

Known business information currently used in the prototype:
- Name: Matchstick Design Studio
- Location: Sadashiv Peth, Pune
- Address currently used: 567, Sadashiv Peth, Pioneer House, 1st Floor, Bhanuvilas Talkies Chowk, Laxmi Road, Sadashiv Peth, Pune 411030, Maharashtra
- Phone currently used: +91 96899 17451
- Mon–Fri hours: 10:00 AM–6:00 PM
- Saturday: 10:00 AM–2:00 PM
- Sunday: not yet verified
- Email: placeholder until owner provides the real address

The address landmark and phone should still be owner-confirmed before launch.

A strong independently verifiable portfolio proof found during research is:
“Mega Science Vision 2035 — Astronomy & Astrophysics” credits “Cover Design: Matchstick Design Studio, Pune” in an ISRO-hosted PDF. When real case studies replace placeholders, this is a strong candidate for a publication-design case study.

## Geographic positioning

Canonical geographic language:
- Sadashiv Peth
- Laxmi Road
- Pune
- Pune 411030

Tilak Road is nearby and can be mentioned as an adjacent area, but do not state that the studio is physically located on Tilak Road.

Good phrasing:
“Located on Laxmi Road in Sadashiv Peth, convenient for clients around Tilak Road and central Pune.”

Avoid doorway-style neighborhood pages.

## SEO / GEO principles

The site should expose important business facts as plain crawlable HTML.

Priorities:
- descriptive page titles and meta descriptions
- strong internal links
- descriptive alt text for real project imagery
- clear service pages
- real case studies with project, problem, scope, deliverables, year, and outcome when verified
- local business facts on About / Contact
- sitemap and robots
- allow OAI-SearchBot
- accurate structured data only

Do not add fake schema data.

Do not copy ratings from JustDial or Google into LocalBusiness aggregateRating schema.

There is no need to add special “AI schema” or llms.txt solely for Google AI search.

## Visual direction

The old vermilion/orange palette has been retired.

Current logo-led palette:
- Canvas: #F6F5F0
- Surface: #E7ECE7
- Primary ink: #17252B
- Soft ink: #455560
- Muted text: #667579
- Brand teal: #2587A0
- Brand sage: #75B697
- Brand clay: #967566
- Dark sections: #24343A
- On-dark text: #F6F5F0
- On-dark muted: #B8C4C2

Approximate intended visual balance:
- 70% warm neutral
- 15% dark charcoal
- 10% teal
- 4% sage
- 1% clay

Do not use all logo colors equally.

Primary CTA color is teal.
Sage is a supporting surface/highlight color.
Clay is a rare accent, not a primary CTA color.

## Brand character

Target feel:
- editorial
- thoughtful
- creative
- established
- image-led
- confident but restrained

Avoid:
- generic AI-generated landing-page look
- card soup
- SaaS styling
- fake glassmorphism
- excessive rounded cards
- rainbow use of the logo palette
- “eco / wellness” visual language despite the leaf-like logo
- copying Apple.com

The logo contains layered organic forms. Use that as a subtle signature motif, not as blobs everywhere.

## Design hierarchy

When design guidelines conflict, use this order:
1. Accessibility and usability.
2. Clear hierarchy and familiar interaction patterns.
3. Anti-template visual craft.
4. Distinctive Matchstick art direction.
5. Motion, only when it improves understanding or continuity.

## Motion rules

Motion must have a purpose.

Current page transition:
- internal navigation briefly covers the page
- dark charcoal transition surface
- teal + sage organic forms echo the logo
- Matchstick logo appears in the center
- new route loads behind the transition
- overlay exits upward
- navigation lands at the top of the new page
- reduced-motion users should not receive the animated transition

Keep this fast. It should feel like continuity, not like a loading splash screen.

For ordinary interactions:
- prefer transform and opacity
- prefer ease-out
- avoid ease-in
- avoid transition: all
- hover motion only for hover-capable fine pointers
- no scroll-jacking
- no parallax text
- no cursor gimmicks
- no automatic looping carousels
- no repetitive reveal animation on every section

## Accessibility

Preserve:
- semantic headings
- skip link
- visible focus states
- minimum practical touch targets
- keyboard navigation
- reduced-motion support
- meaningful alt text for real content
- adequate color contrast

Do not sacrifice accessibility for art direction.

## Images

Current project imagery is abstract placeholder artwork and should eventually be replaced with approved real Matchstick projects.

The supplied logo asset is low-resolution. It is acceptable at small nav/transition sizes, but do not enlarge it heavily. Replace it with a higher-resolution PNG/SVG/PDF-derived asset when available.

For production real imagery, prefer optimized Next.js image handling and explicit dimensions/sizes.

## Homepage role

The homepage should summarize the studio rather than duplicate detail pages.

Current narrative:
- studio / location intro
- large point-of-view hero
- concise studio positioning
- selected work
- services overview
- one featured case
- process preview
- location
- FAQ
- CTA

Inner pages carry depth.

## Coding expectations

- Keep components focused and readable.
- Prefer data-driven repeated content.
- Avoid unnecessary client components.
- Keep business data centralized.
- Avoid inline business facts duplicated across files when they can come from shared data.
- Preserve current route structure unless there is a strong reason to change it.
- Before major refactors, inspect all consumers.
- Do not introduce breaking changes just to satisfy stylistic preferences.

## Before production launch

Still unresolved:
- real domain
- canonical email
- final phone confirmation
- final landmark / address confirmation
- Sunday hours
- founder / team details
- real service list and deliverables
- real case-study content and approved project assets
- official social links
- Google Business Profile / map pin confirmation
- contact form backend
- proper OG image
- page-specific canonicals
- final schema fields
- real portfolio assets
