import Link from "next/link";
import CTA from "../../components/CTA";
import { services } from "../../data/services";

export const metadata = { title: "Services", description: "Graphic design services from Matchstick Design Studio in Sadashiv Peth, Pune." };

export default function ServicesPage() {
  return <>
    <main id="main-content">
      <section className="page-hero"><div className="container page-hero-grid"><p className="kicker">What we do</p><div><h1>Design for things people need to notice, understand or remember.</h1><p className="lead">The exact service scope is placeholder content until it is confirmed with the studio owner.</p></div></div></section>
      <section className="service-index-section"><div className="container service-index">{services.map((service) => <Link href={`/services/${service.slug}`} className="service-index-card" key={service.slug}><span className="service-number">{service.number}</span><div><h2>{service.name}</h2><p>{service.description}</p></div><span className="row-arrow" aria-hidden="true">↗</span></Link>)}</div></section>
      <section className="section"><div className="container split-grid"><div><p className="kicker">Not sure what category fits?</p><h2>Start with what needs to change.</h2></div><div className="body-stack"><p>Describe the thing you are making, who it is for and what it needs to accomplish. The service can be shaped around the actual problem.</p><Link href="/contact" className="text-link">Tell us about the project <span aria-hidden="true">↗</span></Link></div></div></section>
    </main>
    <CTA />
  </>;
}
