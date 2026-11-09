export const projects = [
  { slug: "project-placeholder-01", title: "Identity Study 01", category: "Brand identity", year: "20XX", image: "/placeholders/project-01.svg", orientation: "landscape" },
  { slug: "project-placeholder-02", title: "Editorial Study 02", category: "Publication design", year: "20XX", image: "/placeholders/project-02.svg", orientation: "portrait" },
  { slug: "project-placeholder-03", title: "Campaign Study 03", category: "Graphic design", year: "20XX", image: "/placeholders/project-03.svg", orientation: "landscape" },
  { slug: "project-placeholder-04", title: "System Study 04", category: "Brand identity", year: "20XX", image: "/placeholders/project-04.svg", orientation: "landscape" },
  { slug: "project-placeholder-05", title: "Cover Study 05", category: "Publication design", year: "20XX", image: "/placeholders/project-05.svg", orientation: "landscape" },
  { slug: "project-placeholder-06", title: "Poster Study 06", category: "Graphic design", year: "20XX", image: "/placeholders/project-06.svg", orientation: "portrait" },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
