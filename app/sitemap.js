export default function sitemap() {
  const base = "https://example.com";
  return ["", "/work", "/services", "/services/logo-design", "/services/graphic-design", "/services/publication-design", "/about", "/contact"].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "monthly" : "yearly", priority: path === "" ? 1 : 0.8 }));
}
