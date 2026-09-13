export const SITE_URL = "https://sellercontabilidade.com.br";
export const SITE_NAME = "Seller Contabilidade";
export const OG_IMAGE = `${SITE_URL}/logo-seller.webp`;

export function pageHead({
  path,
  title,
  description,
  ogTitle,
  ogDescription,
  ogType = "website",
}: {
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
}) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: ogTitle ?? title },
      { property: "og:description", content: ogDescription ?? description },
      { property: "og:url", content: url },
      { property: "og:type", content: ogType },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: SITE_NAME },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: ogTitle ?? title },
      { name: "twitter:description", content: ogDescription ?? description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: SITE_NAME,
  url: SITE_URL,
  image: OG_IMAGE,
  logo: OG_IMAGE,
  description:
    "Contabilidade digital em São José do Rio Preto especializada em área da saúde, prestadores de serviços e advogados. Abertura de empresa sem honorários.",
  telephone: "+5517991009231",
  email: "contato@sellercontabilidade.com.br",
  priceRange: "R$ 397 - R$ 497",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São José do Rio Preto",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "São José do Rio Preto" },
    { "@type": "State", name: "São Paulo" },
    { "@type": "Country", name: "Brasil" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: ["https://wa.me/5517991009231"],
};

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: `${SITE_URL}${path}`,
    provider: { "@type": "AccountingService", name: SITE_NAME, url: SITE_URL },
    areaServed: { "@type": "City", name: "São José do Rio Preto" },
  };
}

export function faqJsonLd(items: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function breadcrumbJsonLd(items: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
