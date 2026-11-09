import ProjectCard from "../../components/ProjectCard";
import CTA from "../../components/CTA";
import { projects } from "../../data/projects";

export const metadata = { title: "Work", description: "Selected work and portfolio from Matchstick Design Studio in Pune." };

export default function WorkPage() {
  return <>
    <main id="main-content">
      <section className="page-hero work-hero">
        <div className="container page-hero-grid">
          <p className="kicker">Selected projects</p>
          <div><h1>Work that holds up<br />without the pitch.</h1><p className="lead">Placeholder case studies for identity, graphic design and publication work. Replace every project with approved client material before launch.</p></div>
        </div>
      </section>
      <section className="section work-index">
        <div className="container">
          <div className="filter-row" aria-label="Portfolio categories"><span className="active-filter">All</span><span>Identity</span><span>Graphic</span><span>Publication</span></div>
          <div className="work-project-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
        </div>
      </section>
    </main>
    <CTA />
  </>;
}
