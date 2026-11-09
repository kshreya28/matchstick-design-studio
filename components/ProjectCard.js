import Link from "next/link";

export default function ProjectCard({ project, index, featured = false }) {
  return (
    <Link href={`/work/${project.slug}`} className={`project-card ${project.orientation} ${featured ? "featured" : ""}`}>
      <div className="project-media">
        <img src={project.image} alt="Placeholder artwork for a future Matchstick Design Studio project" />
        <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="project-meta">
        <div>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
        <span>{project.year}</span>
      </div>
    </Link>
  );
}
