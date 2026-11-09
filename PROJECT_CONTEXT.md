# PROJECT_CONTEXT.md — Matchstick Design Studio

This document records the major research, product, architecture, SEO, design, and implementation decisions made before the project moved into Codex.

## 1. Business / use case

Matchstick Design Studio is a Pune graphic-design business serving work such as logos, graphic communication, and publication-oriented design. The website is intended to function as:
- a portfolio
- a local-business presence
- an enquiry funnel
- a strong SEO/GEO entity page for Google and AI answer engines

The user initially considered a single scrolling site, but the chosen architecture is intentionally multi-page because individual services and case studies have distinct search intent and deserve their own crawlable URLs.

## 2. Public research completed

Primary research source was the existing JustDial listing plus broader public web checks.

Important correction:
- The verified listing places Matchstick on Laxmi Road, Sadashiv Peth.
- It is not on Tilak Road.
- Tilak Road can be used as a nearby-area phrase only.

Public listing data surfaced:
- Matchstick Design Studio
- category: Computer Graphic Designers
- additional categories included Logo Designers / Corporate Logo Designing Services
- address used in prototype: 567, Sadashiv Peth, Pioneer House, 1st Floor, Bhanuvilas Talkies Chowk, Pune, Opposite Damini Saree Centre, Laxmi Road, Sadashiv Peth, Pune-411030, Maharashtra
- maps/local variant used a different landmark: opposite Kalakshetram Silks
- phone surfaced publicly: +91 96899 17451
- Mon–Fri 10:00 AM–6:00 PM
- Sat 10:00 AM–2:00 PM
- Sunday hours were inconsistent and remain unresolved

The website should not publish unresolved Sunday hours as fact.

No verified official website was found during research.

## 3. Strong credibility asset

An ISRO-hosted PDF titled:
“Mega Science Vision 2035 — Astronomy & Astrophysics”

explicitly credits:
“Cover Design: Matchstick Design Studio, Pune”

This is currently the best independently verifiable portfolio proof discovered. It is a strong candidate for the first real publication case study after placeholder content is removed.

## 4. Review themes discovered

Public reviews repeatedly suggested these themes:
- creativity / aesthetics
- understanding client intent
- patient revisions
- collaborative dialogue
- converting rough ideas into polished output
- reliability
- timeliness
- perceived reasonable pricing

These are useful positioning signals, but do not convert them into hard factual claims unless the owner approves the wording.

## 5. Positioning

Defensible positioning:
- hands-on / collaborative design process
- specialist design studio rather than a broad marketing agency
- publication/editorial capability in addition to logos
- central Pune / Sadashiv Peth / Laxmi Road location

Avoid unsupported superlatives such as:
- best graphic designer in Pune
- top studio in Pune
- award-winning
- most trusted

## 6. Competitor frame

Research looked at nearby/broader Pune competitors including:
- Sigil Advertising, Tilak Road
- Graphics World
- DESIGN WITH VAISHNAAVI

The useful strategic distinction is not “we do more services.” It is a more focused, designer-led, portfolio-first studio with credible editorial/publication work.

Do not claim in-house printing unless confirmed.

## 7. Keyword direction

Primary local-search themes:
- graphic designer in Sadashiv Peth Pune
- graphic design studio Sadashiv Peth
- graphic designer Laxmi Road Pune
- logo designer in Sadashiv Peth Pune
- logo design Pune
- graphic design services Pune
- graphic designer Pune 411030

Secondary nearby/intent themes:
- graphic designer near Tilak Road Pune
- logo designer near Tilak Road Pune
- graphic design studio near Tilak Road
- graphic designer central Pune
- publication designer Pune
- book design Pune
- book cover designer Pune
- corporate logo designer Pune
- graphic designer near Laxmi Road
- graphic designer near Bhanuvilas Talkies Chowk

Do not create thin doorway neighborhood pages.

## 8. Chosen information architecture

Core pages:
1. Home /
2. Work /work
3. Dynamic project pages /work/[slug]
4. Services /services
5. Logo & Brand Identity /services/logo-design
6. Graphic Design /services/graphic-design
7. Publication & Book Design /services/publication-design
8. About /about
9. Contact /contact

Later, when real assets are available, add real case-study URLs rather than placeholder slugs.

## 9. Initial technical implementation

The site is built in Next.js App Router.

Shared structure includes:
- Navbar
- Footer
- CTA
- ProjectCard
- ServiceTemplate
- LocalBusinessSchema
- centralized business/services/projects data
- robots.js
- sitemap.js

GitHub:
- repo: kshreya28/matchstick-design-studio
- main is the working deployment branch

Vercel:
- project name: matchstick-design-studio
- Git integration is enabled
- commits to main trigger deployments

## 10. Design-system evolution

### V1
The first concept used:
- warm cream
- terracotta / vermilion
- dark editorial type

This was later rejected after the real logo was supplied because the orange system did not belong to the identity.

### Design-skill guidance applied

External design guidance reviewed before V2 included:
- Apple-design principles: purpose, agency, familiarity, flexibility, simplicity, craft, delight, accessibility
- Impeccable: anti-template craft floor, deliberate hierarchy, avoid generic UI “slop”
- Taste Skill: image-led professional studio work, one memorable signature moment, no fake client/review content
- Emil Kowalski animation principles: purposeful motion, transform/opacity, strong ease-out, reduced motion, no gratuitous scroll effects

Conflict order used:
1. accessibility/usability
2. clarity/familiarity
3. visual craft
4. art direction
5. animation

### V2
V2 introduced:
- stronger editorial composition
- oversized typography
- floating nav
- asymmetric work grid
- abstract placeholder portfolio art
- restrained interaction feedback
- no GSAP or Lenis
- no scroll-jacking or cursor effects

## 11. Current logo-led palette

After the actual logo was supplied, the site palette changed to:

- Canvas #F6F5F0
- Surface #E7ECE7
- Primary ink #17252B
- Soft ink #455560
- Muted text #667579
- Brand teal #2587A0
- Brand sage #75B697
- Brand clay #967566
- Dark sections #24343A
- On-dark #F6F5F0
- On-dark-muted #B8C4C2

Approximate visual ratio:
70 neutral / 15 dark / 10 teal / 4 sage / 1 clay

The key rule is restraint:
- teal = main brand/CTA color
- sage = supportive background/highlight
- clay = rare editorial accent
- warm off-white remains the primary canvas

## 12. Logo usage

The supplied logo has layered organic forms in teal, sage, blue-charcoal, and muted clay.

The logo inspired a subtle recurring organic shape language.

Do not turn the site into a nature/wellness brand.

Current uploaded logo is low resolution (~small web thumbnail). It is usable in:
- nav
- footer
- compact transition mark

It should not be enlarged heavily.

## 13. Page transition

The user specifically requested a non-abrupt page transition that integrates the logo.

Current intended behavior:
1. Internal link click.
2. Dark charcoal overlay moves in.
3. Organic teal/sage shapes echo the logo.
4. Logo appears centered.
5. Next.js route changes while covered.
6. Browser lands at top of new route.
7. Transition exits upward.
8. Reduced-motion users skip the animation.

Implementation uses a client-side PageTransitionProvider plus CSS.

The transition should remain brief and functional, not a loading splash screen.

## 14. Motion philosophy

Use animation only when it communicates:
- navigation continuity
- hover affordance
- state change

Avoid:
- scroll-linked reveal stacks
- parallax text
- scroll hijacking
- tilt effects
- custom cursor
- endless loops
- “everything fades in”
- transition: all

CSS is preferred for simple motion.

## 15. SEO / AI-search strategy

Local SEO:
- maintain consistent NAP
- claim/maintain Google Business Profile
- confirm exact map pin and landmark
- add genuine photos and real project images
- collect/respond to genuine Google reviews
- maintain local citations

On-site:
- crawlable semantic HTML
- unique service pages
- clear entity facts
- internal linking
- descriptive media
- useful FAQ
- structured data that matches visible facts
- no fake rating markup

For AI search:
- make facts concise and quotable
- expose clear who/what/where/how information
- publish useful case studies
- allow OAI-SearchBot
- do not hide core content behind JS-only effects

## 16. Current placeholder strategy

Current project names are intentionally generic placeholders such as:
- Identity Study 01
- Editorial Study 02
- Campaign Study 03
- System Study 04
- Cover Study 05
- Poster Study 06

They must not be mistaken for real client work.

Current placeholder art is custom abstract SVG artwork created for the prototype, not stock client imagery.

## 17. Known production gaps

Still to fix before calling the site production-ready:
- replace example.com metadata/sitemap/robots base
- add actual production domain
- add page-specific canonicals
- finalize service metadata
- confirm canonical phone
- confirm exact address landmark
- confirm Sunday hours
- replace placeholder email
- add official socials
- add verified founder/team details if desired
- replace placeholder project content
- add real case studies
- add real high-res logo
- connect contact form backend
- fix checkbox names/values if form is connected
- switch real production imagery to next/image
- add OG image
- expand sitemap with real case-study slugs
- validate structured data after final facts
- visually test responsive layouts at common mobile widths
- run a final production build and Lighthouse/accessibility pass

## 18. Working principle for future Codex tasks

When asked to improve the site:
- inspect the real implementation first
- preserve the chosen architecture unless a change is justified
- do not invent business facts
- do not add dependencies just for visual novelty
- prioritize real portfolio content over decorative UI
- maintain SEO crawlability and accessibility
- keep the logo-led palette restrained
- treat the current design system as a coherent whole rather than redesigning each page independently
