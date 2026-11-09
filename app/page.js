import Link from "next/link";
import CTA from "../components/CTA";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { services } from "../data/services";
import { business } from "../data/business";
import LocalBusinessSchema from "../components/LocalBusinessSchema";

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <main id="main-content">
        <section className="hero">
          <div className="container hero-shell">
            <div className="hero-topline hero-enter hero-enter-1">
              <span>Independent graphic design studio</span>
              <span>Sadashiv Peth · Pune</span>
            </div>
            <div className="hero-grid">
              <div className="hero-copy">
                <h1 className="hero-enter hero-enter-2">Ideas need<br /><span>a point of view.</span></h1>
                <p className="hero-lead hero-enter hero-enter-3">Identity, graphic design and publication work for people who care how things look, read and feel.</p>
                <div className="hero-actions hero-enter hero-enter-4">
                  <Link href="/work" className="button">View selected work</Link>
                  <Link href="/contact" className="text-link">Start a project <span aria-hidden="true">↗</span></Link>
                </div>
              </div>
              <div className="hero-visual hero-enter hero-enter-3">
                <img src="/placeholders/hero.svg" alt="Abstract placeholder artwork for future featured project imagery" />
                <div className="hero-visual-label"><span>Featured work</span><span>Placeholder image · 01</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="intro-band">
          <div className="container intro-grid">
            <p className="kicker">What Matchstick is for</p>
            <p className="intro-statement">A small design studio for visual identities, communication pieces and publications that need more thought than decoration.</p>
          </div>
        </section>

        <section className="section" aria-labelledby="selected-work-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div><p className="kicker">Selected work</p><h2 id="selected-work-title">Work should do the explaining.</h2></div>
              <Link href="/work" className="text-link">See all projects <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="home-project-grid">
              <ProjectCard project={projects[0]} index={0} featured />
              <ProjectCard project={projects[1]} index={1} />
              <ProjectCard project={projects[2]} index={2} />
            </div>
          </div>
        </section>

        <section className="services-band" aria-labelledby="services-title">
          <div className="container services-grid">
            <div className="services-intro">
              <p className="kicker">Services</p>
              <h2 id="services-title">Different outputs.<br />One visual language.</h2>
              <p>Placeholder service descriptions will be replaced after owner confirmation.</p>
            </div>
            <div className="service-stack">
              {services.map((service) => (
                <Link href={`/services/${service.slug}`} className="service-row" key={service.slug}>
                  <span className="service-number">{service.number}</span>
                  <div><h3>{service.name}</h3><p>{service.eyebrow}</p></div>
                  <span className="row-arrow" aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section featured-case" aria-labelledby="featured-case-title">
          <div className="container featured-case-grid">
            <div className="featured-case-media"><img src="/placeholders/editorial.svg" alt="Placeholder editorial artwork for a future publication case study" /></div>
            <div className="featured-case-copy">
              <p className="kicker">Featured case study</p>
              <h2 id="featured-case-title">One project, shown properly.</h2>
              <p className="lead">This slot is reserved for a real publication or identity project with approved images, role, scope and outcome.</p>
              <dl className="project-facts"><div><dt>Project</dt><dd>[Verified title]</dd></div><div><dt>Scope</dt><dd>[Verified scope]</dd></div><div><dt>Year</dt><dd>[20XX]</dd></div></dl>
              <Link href="/work/project-placeholder-02" className="text-link">Open placeholder case study <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>

        <section className="section process-section" aria-labelledby="process-title">
          <div className="container">
            <div className="section-heading"><p className="kicker">A simple working rhythm</p><h2 id="process-title">Enough structure to stay clear.</h2></div>
            <div className="process-list">
              {["Understand the brief", "Find the visual direction", "Refine the chosen route", "Prepare the final output"].map((step, index) => (
                <div className="process-row" key={step}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step}</h3><p>[Owner-approved process detail]</p></div>
              ))}
            </div>
            <p className="note">Process copy is placeholder content and must be confirmed before launch.</p>
          </div>
        </section>

        <section className="location-band" aria-labelledby="location-title">
          <div className="container location-shell">
            <div>
              <p className="kicker">Find the studio</p>
              <h2 id="location-title">Sadashiv Peth.<br />Central Pune.</h2>
            </div>
            <div className="location-copy">
              <p>{business.address}</p>
              <p className="muted">Near Laxmi Road and the Tilak Road area. Final directions and landmark should use owner-confirmed listing data.</p>
              <Link href="/contact" className="button">Contact the studio</Link>
            </div>
            <div className="map-art" role="img" aria-label="Placeholder map graphic for the studio location"><span>PUNE</span><span className="map-dot" /><span>SADASHIV PETH</span></div>
          </div>
        </section>

        <section className="section faq-section" aria-labelledby="faq-title">
          <div className="container faq-grid">
            <div><p className="kicker">FAQ</p><h2 id="faq-title">Answers worth making easy to find.</h2></div>
            <div className="faq-list">
              {["Where is Matchstick Design Studio located?", "What design services do you provide?", "Do you work on book and publication design?", "How can I start a project?"].map((q) => (
                <details className="faq-item" key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>[Factual owner-approved answer to be added.]</p></details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CTA />
    </>
  );
}
