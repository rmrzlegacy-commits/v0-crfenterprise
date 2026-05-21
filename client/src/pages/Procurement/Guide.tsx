import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, FileText, Shield, Users, DollarSign } from "lucide-react";
import { Link } from "wouter";

// JSON-LD: FAQPage schema for this page
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I purchase services from CRF Enterprise as a federal agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Federal agencies can procure CRF Enterprise services through open-market direct award, GSA Schedule, IDIQ vehicles, BPAs, or agency-specific contract vehicles. CRF is SAM.gov registered (CAGE: 107F5) and ready for immediate award. Contact our team to begin the acquisition process.",
      },
    },
    {
      "@type": "Question",
      "name": "What contract vehicles does CRF Enterprise hold or support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CRF Enterprise supports procurement through open-market direct awards, GSA Schedule, and IDIQ/GWAC vehicles including SEWP V and CIO-SP4. We also support teaming arrangements where CRF performs as a subcontractor under a prime contractor's existing vehicle.",
      },
    },
    {
      "@type": "Question",
      "name": "Is CRF Enterprise a small business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. CRF Enterprise is an MWBE-certified (Minority Women Business Enterprise) small business. We qualify for relevant small business set-aside programs under FAR Part 19.",
      },
    },
    {
      "@type": "Question",
      "name": "What documentation can CRF Enterprise provide for a solicitation response?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CRF can provide: Capability Statement (same-day), Representations and Certifications (Reps & Certs), NAICS code justification, past performance references with POC contacts, technical approach narratives, price/cost proposals, and key personnel resumes.",
      },
    },
    {
      "@type": "Question",
      "name": "How quickly can CRF Enterprise respond to an RFI or Sources Sought notice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CRF Enterprise responds to RFIs and Sources Sought notices within 48 hours. For urgent requirements, same-day response is available. Contact admin@crfenterprise.com or call (702) 356-3226.",
      },
    },
  ],
};

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Request a Capability Statement",
    body: "Download or request our one-page Capability Statement PDF, which includes our NAICS codes, CAGE Code, certifications, contract vehicle eligibility, and core service areas. This is the standard first step in most federal source-selection processes.",
    action: { label: "Download Capability Statement", href: "/api/capability-statement" },
  },
  {
    step: "02",
    icon: Shield,
    title: "Verify Our SAM.gov Registration",
    body: "CRF Enterprise is actively registered in SAM.gov under CAGE Code 107F5. Our registration is maintained current with all required annual renewals and FY2026 financial reporting. Contracting officers can verify at SAM.gov.",
    action: { label: "View Our Credentials", href: "/#about" },
  },
  {
    step: "03",
    icon: Users,
    title: "Identify Your Contract Vehicle",
    body: "We support open-market awards, GSA Schedule, IDIQ, and teaming arrangements. If your agency uses a specific vehicle (SEWP V, CIO-SP4, BPA), contact us to discuss teaming or task order support under an existing prime contract.",
    action: { label: "Discuss Contract Vehicles", href: "/#contact" },
  },
  {
    step: "04",
    icon: DollarSign,
    title: "Request a Proposal or Quote",
    body: "Once your requirements are defined, CRF can deliver a technical approach and price proposal within your solicitation timelines. We support full and open competition, set-aside programs, and sole-source justifications where applicable.",
    action: { label: "Start a Conversation", href: "/#contact" },
  },
];

const relatedPages = [
  { label: "Enterprise Technology", href: "/services/enterprise-technology", naics: "541511, 541512" },
  { label: "Infrastructure", href: "/services/infrastructure", naics: "541512, 237310" },
  { label: "Digital Transformation", href: "/services/digital-transformation", naics: "541519, 541511" },
  { label: "Consulting", href: "/services/consulting", naics: "541611" },
];

export default function ProcurementGuide() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* BreadcrumbList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.crfenterprise.com/" },
              { "@type": "ListItem", "position": 2, "name": "Procurement Guide", "item": "https://www.crfenterprise.com/procurement/guide" },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-36 pb-16 px-5 sm:px-8 lg:px-12" aria-labelledby="procurement-heading">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                <li><Link href="/"><span className="hover:text-accent transition-colors cursor-pointer">Home</span></Link></li>
                <li aria-hidden="true">/</li>
                <li style={{ color: "var(--accent)" }}>Procurement Guide</li>
              </ol>
            </nav>

            <span className="badge-accent mb-6 inline-flex">
              Government Acquisition Resource
            </span>

            <h1 id="procurement-heading" className="mb-6 text-balance" style={{ fontFamily: "'Sora', sans-serif" }}>
              How to Buy from{" "}
              <span style={{
                background: "linear-gradient(135deg, #00c8f0, #0090c8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                CRF Enterprise
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-4" style={{ color: "rgba(240,240,245,0.75)" }}>
              A step-by-step reference for contracting officers, acquisition professionals, and agency procurement teams
              looking to award work to CRF Enterprise under federal, state, or enterprise procurement frameworks.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(240,240,245,0.55)" }}>
              CRF Enterprise is SAM.gov registered (CAGE Code: 107F5), MWBE certified, and eligible for award under
              federal FAR/DFARS, state procurement regulations, and commercial procurement standards. We support
              open-market, set-aside, and teaming arrangements across all our NAICS codes.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="/api/capability-statement" className="btn-primary">
                Download Capability Statement
                <ArrowRight size={16} />
              </a>
              <Link href="/#contact">
                <span className="btn-secondary cursor-pointer">Contact Contracting Team</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick reference strip */}
      <div
        className="py-5 px-5 sm:px-8 lg:px-12"
        style={{ background: "rgba(0,200,240,0.03)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        aria-label="Quick procurement reference"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-x-8 gap-y-3 items-start">
            {[
              { label: "SAM Status", value: "Active · FY2026" },
              { label: "CAGE Code", value: "107F5" },
              { label: "Business Type", value: "MWBE · Small Business" },
              { label: "Primary State", value: "Nevada (NV)" },
              { label: "Response SLA", value: "48 hrs (RFI/Sources Sought)" },
              { label: "Contact", value: "admin@crfenterprise.com" },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted-foreground)", fontFamily: "'Sora', sans-serif" }}>{label}</div>
                <div className="text-sm font-semibold mt-0.5" style={{ color: "var(--foreground)" }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step-by-step guide */}
      <section className="py-20 px-5 sm:px-8 lg:px-12" aria-labelledby="steps-heading">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 id="steps-heading" className="text-2xl font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
              Step-by-Step Acquisition Process
            </h2>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              For federal and state contracting officers initiating a procurement action involving CRF Enterprise.
            </p>
          </motion.div>

          <div className="space-y-6">
            {steps.map(({ step, icon: Icon, title, body, action }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="glass-card p-6 flex gap-5"
              >
                <div className="flex-shrink-0">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(0,200,240,0.08)", border: "1px solid rgba(0,200,240,0.2)" }}
                  >
                    <Icon size={20} style={{ color: "var(--accent)" }} aria-hidden="true" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold tabular-nums" style={{ color: "var(--accent)", fontFamily: "'Sora', sans-serif" }}>
                      Step {step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(240,240,245,0.6)" }}>
                    {body}
                  </p>
                  <a href={action.href} className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-accent" style={{ color: "rgba(0,200,240,0.8)" }}>
                    {action.label}
                    <ArrowRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-16 px-5 sm:px-8 lg:px-12"
        style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        aria-labelledby="proc-faq-heading"
      >
        <div className="max-w-4xl mx-auto">
          <h2 id="proc-faq-heading" className="text-2xl font-bold mb-8" style={{ fontFamily: "'Sora', sans-serif" }}>
            Contracting Officer FAQs
          </h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="glass-card p-5"
              >
                <h3 className="text-sm font-semibold mb-2" style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}>
                  {faq.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {faq.acceptedAnswer.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related service pages */}
      <section className="py-14 px-5 sm:px-8 lg:px-12" aria-labelledby="related-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="related-heading" className="text-lg font-bold mb-6" style={{ fontFamily: "'Sora', sans-serif" }}>
            Service Areas by NAICS Code
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedPages.map(({ label, href, naics }) => (
              <Link key={label} href={href}>
                <span className="glass-card p-4 flex items-center justify-between gap-3 cursor-pointer group">
                  <div>
                    <div className="text-sm font-semibold group-hover:text-accent transition-colors" style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}>
                      {label}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>NAICS {naics}</div>
                  </div>
                  <ArrowRight size={15} className="flex-shrink-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" style={{ color: "var(--accent)" }} />
                </span>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-4">
            <CheckCircle size={13} style={{ color: "var(--accent)" }} aria-hidden="true" />
            <p className="text-xs" style={{ color: "rgba(240,240,245,0.4)" }}>
              All NAICS codes verified in SAM.gov under CAGE Code 107F5.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
