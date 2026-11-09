export const services = [
  {
    slug: "logo-design",
    number: "01",
    name: "Logo & Brand Identity",
    eyebrow: "Identity",
    description: "A reusable service template for logo systems, identity direction and visual foundations.",
    items: ["Logo design", "Visual identity", "Typography", "Colour systems", "Brand guidelines"],
  },
  {
    slug: "graphic-design",
    number: "02",
    name: "Graphic Design",
    eyebrow: "Visual communication",
    description: "A flexible page for graphic-design work across print and digital touchpoints.",
    items: ["Campaign graphics", "Print collateral", "Digital graphics", "Marketing visuals", "Custom design support"],
  },
  {
    slug: "publication-design",
    number: "03",
    name: "Publication & Book Design",
    eyebrow: "Editorial",
    description: "A focused service page for covers, editorial systems and long-form publication design.",
    items: ["Cover design", "Editorial layouts", "Publication systems", "Print-ready artwork", "Long-form design"],
  },
];

export function getService(slug) {
  return services.find((service) => service.slug === slug);
}
