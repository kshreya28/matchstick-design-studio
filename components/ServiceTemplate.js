import Link from "next/link";
import CTA from "./CTA";

export default function ServiceTemplate({ service }) {
  return <>
    <main id="main-content">
      <section className="page-hero service-hero"><div className="container page-hero-grid"><p className="kicker">{service.eyebrow}</p><div><h1>{service.name}</h1><p className="lead">{service.description}</p></div></div></section>
      <section className="section"><div className="container split-grid"><div><p className="kicker">Overview</p><h2>Built around the project, not a package.</h2></div><div className="body-stack"><p>[PLACEHOLDER SERVICE OVERVIEW] Explain the problem this service solves, who it is for and how Matchstick approaches the work.</p><p className="note">Final wording requires owner approval before publishing.</p></div></div></section>
      <section className="service-capabilities"><div className="container"><p className="kicker">Possible scope</p><div className="capability-grid">{service.items.map((item, index) => <div className="capability" key={item}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item}</h3></div>)}</div><p className="note">[Owner confirmation required]</p></div></section>
      <section className="section"><div className="container service-work-grid"><div><p className="kicker">Selected work</p><h2>Show the service through the work.</h2><Link href="/work" className="text-link">See all work <span aria-hidden="true">↗</span></Link></div><div className="service-work-image"><img src="/placeholders/project-03.svg" alt="Placeholder project artwork for this service" /></div></div></section>
      <section className="section faq-section"><div className="container faq-grid"><div><p className="kicker">Frequently asked</p><h2>Make practical questions easy to answer.</h2></div><div className="faq-list">{["How does the project start?", "What is included?", "How long does a typical project take?"].map((q) => <details key={q} className="faq-item"><summary>{q}<span aria-hidden="true">+</span></summary><p>[Owner-approved answer to be added.]</p></details>)}</div></div></section>
    </main>
    <CTA />
  </>;
}
