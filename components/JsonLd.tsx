import { site } from "@/lib/site";
import { siteUrl } from "@/lib/seo";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: site.google.title,
    legalName: site.name,
    url: siteUrl,
    telephone: site.phone,
    email: site.email,
    image: `${siteUrl}/images/logo.png`,
    description: site.google.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: "Commerce",
      addressRegion: "CA",
      postalCode: "90040",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0005,
      longitude: -118.1547,
    },
    areaServed: [
      "Commerce, CA",
      "Covina, CA",
      "Los Angeles, CA",
      "Rancho Cucamonga, CA",
      "Norco, CA",
      "Fontana, CA",
      "Pico Rivera, CA",
      "Rialto, CA",
      "Southern California",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.google.rating,
      reviewCount: site.google.reviews,
      bestRating: "5",
    },
    priceRange: "$$",
    sameAs: [site.maps.search],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
