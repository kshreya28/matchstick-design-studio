import { business } from "../data/business";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: "567, Sadashiv Peth, Pioneer House, 1st Floor, Bhanuvilas Talkies Chowk, Laxmi Road",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411030",
      addressCountry: "IN"
    }
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
