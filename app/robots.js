export default function robots() {
  return { rules: [{ userAgent: "*", allow: "/" }, { userAgent: "OAI-SearchBot", allow: "/" }], sitemap: "https://example.com/sitemap.xml" };
}
