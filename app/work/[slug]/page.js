import { notFound } from "next/navigation";
import Link from "next/link";
import CTA from "../../../components/CTA";
import { projects } from "../../../data/projects";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <>
    <main id="main-content">
      <section className="page-hero project-detail-hero">
        <div className="container project-title-grid">
          <p className="kicker">{project.category}</p>
          <div><h1>{project.title}</h1><div className="project-detail-meta"><span>Year · {project.year}</span><span>Client · [TBD]</span><span>Scope · [TBD]</span></div></div>
        </div>
      </section>
      <section className="project-hero-image"><img src={project.image} alt="Placeholder artwork for this future case study" /></section>
      <section className="section"><div className="container split-grid"><div><p className="kicker">The project</p><h2>A clear brief belongs here.</h2></div><div className="body-stack"><p>[PLACEHOLDER] Explain the real context, audience and design objective using verified information.</p><p>[PLACEHOLDER] Explain Matchstick&apos;s actual role, constraints and final deliverables.</p></div></div></section>
      <section className="section project-image-sequence"><div className="container"><div className="case-image case-image-wide"><img src="/placeholders/project-04.svg" alt="Placeholder detail artwork" /></div><div className="two-image-grid"><div className="case-image"><img src="/placeholders/project-05.svg" alt="Placeholder project detail artwork" /></div><div className="case-image"><img src="/placeholders/project-06.svg" alt="Placeholder project detail artwork" /></div></div></div></section>
      <section className="section project-notes"><div className="container split-grid"><div><p className="kicker">Project details</p><h2>Show the thinking, not filler.</h2></div><div className="body-stack"><div className="detail-block"><span>Challenge</span><p>[Verified project challenge]</p></div><div className="detail-block"><span>Approach</span><p>[Verified design approach]</p></div><div className="detail-block"><span>Deliverables</span><p>[Verified deliverables]</p></div></div></div></section>
      <div className="container next-project"><Link href="/work" className="text-link">← Back to selected work</Link></div>
    </main>
    <CTA />
  </>;
}
