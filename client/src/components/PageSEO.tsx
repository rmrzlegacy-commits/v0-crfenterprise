/**
 * PageSEO
 * Injects per-page <title>, <meta name="description">, <link rel="canonical">,
 * and a JSON-LD WebPage + BreadcrumbList block into <head> via <Helmet>-style
 * document.head manipulation (React 19 supports <title>/<meta> directly in
 * JSX returned from components — they are hoisted to <head> automatically).
 */

interface BreadcrumbItem {
  name: string;
  item: string; // absolute URL
}

interface PageSEOProps {
  title: string;
  description: string;
  canonical: string;
  /** @default [] — home breadcrumb is always prepended automatically */
  breadcrumbs?: BreadcrumbItem[];
  /**
   * Additional JSON-LD objects to inject alongside the WebPage schema.
   * Pass fully-formed schema.org objects (e.g. Service, FAQPage).
   */
  schemas?: object[];
}

const BASE_URL = "https://www.crfenterprise.com";

export default function PageSEO({
  title,
  description,
  canonical,
  breadcrumbs = [],
  schemas = [],
}: PageSEOProps) {
  const fullCanonical = canonical.startsWith("http") ? canonical : `${BASE_URL}${canonical}`;

  const allBreadcrumbs: BreadcrumbItem[] = [
    { name: "Home", item: `${BASE_URL}/` },
    ...breadcrumbs,
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allBreadcrumbs.map((crumb, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": crumb.name,
      "item": crumb.item,
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": fullCanonical,
    "name": title,
    "description": description,
    "isPartOf": { "@id": `${BASE_URL}/#website` },
    "breadcrumb": breadcrumbSchema,
  };

  const allSchemas = [webPageSchema, ...schemas];

  return (
    <>
      {/* React 19: title/meta/link returned from any component are hoisted to <head> */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Per-page structured data */}
      {allSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: schema.org JSON-LD is safe
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
