import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Shield, Code2, Cpu, Database, Lock, Layers } from "lucide-react";
import { Link } from "wouter";

const naicsCodes = [
  { code: "541511", label: "Custom Computer Programming Services" },
  { code: "541512", label: "Computer Systems Design Services" },
  { code: "541519", label: "Other Computer Related Services" },
  { code: "518210", label: "Data Processing, Hosting, and Related Services" },
];

const capabilities = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Full-stack development of mission-critical applications for federal agencies and enterprise clients. We build secure, maintainable, and auditable codebases that meet government compliance standards including FISMA, FedRAMP, and NIST SP 800-53.",
  },
  {
    icon: Shield,
    title: "Security-First Architecture",
    description:
      "Every system we build is designed with zero-trust principles, least-privilege access controls, and continuous monitoring. We integrate ATO (Authorization to Operate) requirements from day one, not as an afterthought.",
  },
  {
    icon: Cpu,
    title: "Legacy System Modernization",
    description:
      "Migrate legacy COBOL, mainframe, and monolithic systems to modern cloud-native microservices architectures. We minimize operational risk through phased migration strategies and parallel-run testing methodologies.",
  },
  {
    icon: Database,
    title: "Enterprise Data Platforms",
    description:
      "Design and deploy secure data warehouses, real-time analytics pipelines, and governed data lakes that comply with federal data standards. Enable evidence-based decision making across your organization.",
  },
  {
    icon: Lock,
    title: "Compliance & ATO Support",
    description:
      "Navigate the full Authority to Operate process including System Security Plans (SSP), Security Assessment Reports (SAR), and Plan of Action & Milestones (POA&M). We have deep familiarity with DoD, civilian agency, and SLED environments.",
  },
  {
    icon: Layers,
    title: "API & Systems Integration",
    description:
      "Connect disparate federal IT systems through secure, well-documented APIs and integration middleware. We specialize in FedGov interoperability, enabling seamless data exchange across agencies and platforms.",
  },
];

const deliverables = [
  "Capability Statement tailored to your agency requirements",
  "System Security Plan (SSP) documentation support",
  "FedRAMP-aligned cloud architecture blueprints",
  "Source code with full audit trail and documentation",
  "Authority to Operate (ATO) package preparation",
  "Performance Work Statement (PWS) technical writing",
  "508 Accessibility compliance audits and remediation",
  "Agile delivery with sprint reviews and stakeholder reports",
];

const faqs = [
  {
    q: "Is CRF Enterprise registered in SAM.gov?",
    a: "Yes. CRF Enterprise is fully registered in SAM.gov with an active registration. Our CAGE Code is 107F5. We maintain current registration and are eligible for federal contract awards.",
  },
  {
    q: "What set-aside categories does CRF Enterprise qualify for?",
    a: "CRF Enterprise is MWBE (Minority Women Business Enterprise) certified, which qualifies us for relevant small business set-aside programs. Contact us to discuss specific contract vehicle eligibility for your procurement.",
  },
  {
    q: "Can CRF Enterprise support FedRAMP authorization?",
    a: "Yes. We support agencies and cloud service providers through the full FedRAMP authorization process, including system boundary definition, control implementation documentation, and readiness assessment.",
  },
  {
    q: "What NAICS codes does CRF Enterprise perform under?",
    a: "Our primary NAICS codes include 541511 (Custom Computer Programming Services), 541512 (Computer Systems Design Services), 541519 (Other Computer Related Services), and 518210 (Data Processing and Hosting).",
  },
  {
    q: "Does CRF Enterprise offer staff augmentation?",
    a: "Yes. We provide qualified technical personnel for project-based augmentation including software engineers, cloud architects, cybersecurity analysts, and program managers with government clearance eligibility.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function EnterpriseTechnology() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>

      {/* JSON-LD: Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Enterprise Technology Solutions",
            "provider": {
              "@type": "Organization",
              "name": "CRF Enterprise",
              "url": "https://www.crfenterprise.com",
            },
            "serviceType": "Custom Software Development for Government and Enterprise",
            "description":
              "CRF Enterprise delivers custom software development, legacy system modernization, and FedRAMP-aligned cloud architecture for federal agencies and enterprise clients. NAICS 541511, 541512, 541519.",
            "areaServed": "United States",
            "url": "https://www.crfenterprise.com/services/enterprise-technology",
          }),
        }}
      />

      {/* JSON-LD: FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-36 pb-20 px-5 sm:px-8 lg:px-12" aria-labelledby="et-hero-heading">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                <li><Link href="/"><span className="hover:text-accent transition-colors cursor-pointer">Home</span></Link></li>
                <li aria-hidden="true">/</li>
                <li style={{ color: "var(--accent)" }}>Enterprise Technology</li>
              </ol>
            </nav>

            <span
              className="badge-accent mb-6 inline-flex"
              aria-label="NAICS codes: 541511, 541512, 541519"
            >
              NAICS: 541511 · 541512 · 541519
            </span>

            <h1
              id="et-hero-heading"
              className="mb-6 text-balance"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Enterprise{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00c8f0, #0090c8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Technology
              </span>{" "}
              Solutions
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed max-w-3xl mb-8"
              style={{ color: "rgba(240,240,245,0.75)" }}
            >
              CRF Enterprise builds secure, scalable software systems for federal agencies, state and
              local governments, and enterprise clients. From greenfield application development to
              mission-critical legacy modernization, we deliver solutions that meet the highest
              standards of security, compliance, and performance.
            </p>

            <p className="text-base leading-relaxed max-w-3xl mb-10" style={{ color: "rgba(240,240,245,0.55)" }}>
              As an SAM-registered, MWBE-certified contractor (CAGE Code: 107F5), we are procurement-ready
              for federal and state contract vehicles. Our technical teams operate under Agile and DevSecOps
              methodologies aligned with OMB Circular A-130, NIST RMF, and agency-specific requirements.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/#contact">
                <span className="btn-primary cursor-pointer">
                  Request Capability Statement
                  <ArrowRight size={16} />
                </span>
              </Link>
              <Link href="/#contact">
                <span className="btn-secondary cursor-pointer">
                  Schedule a Briefing
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NAICS reference strip */}
      <section
        className="py-5 px-5 sm:px-8 lg:px-12"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
        aria-label="NAICS code reference"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-x-8 gap-y-2 items-center">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>
              NAICS Codes
            </span>
            {naicsCodes.map(({ code, label }) => (
              <span key={code} className="text-sm" style={{ color: "rgba(240,240,245,0.6)" }}>
                <strong style={{ color: "var(--accent)", fontFamily: "'Sora', sans-serif" }}>{code}</strong>{" "}
                — {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-5 sm:px-8 lg:px-12" aria-labelledby="et-capabilities-heading">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="section-divider" />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
                Core Capabilities
              </span>
            </div>
            <h2 id="et-capabilities-heading" className="text-balance" style={{ fontFamily: "'Sora', sans-serif" }}>
              What We Build and Deliver
            </h2>
            <p className="mt-3 text-base max-w-2xl" style={{ color: "var(--muted-foreground)" }}>
              Every engagement is scoped, staffed, and executed to meet the unique security, compliance,
              and performance requirements of government and enterprise environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.article
                  key={cap.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="glass-card p-6"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-xl mb-4"
                    style={{ background: "rgba(0,200,240,0.08)", border: "1px solid rgba(0,200,240,0.15)" }}
                  >
                    <Icon size={20} style={{ color: "var(--accent)" }} aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}>
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {cap.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section
        className="py-16 px-5 sm:px-8 lg:px-12"
        style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        aria-labelledby="et-deliverables-heading"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 id="et-deliverables-heading" className="text-2xl font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
              Standard Deliverables
            </h2>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              What procurement officers and contracting officers receive on every engagement.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }} aria-hidden="true" />
                <span className="text-sm" style={{ color: "rgba(240,240,245,0.72)" }}>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-5 sm:px-8 lg:px-12" aria-labelledby="et-faq-heading">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 id="et-faq-heading" className="text-2xl font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
              Procurement FAQs
            </h2>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              Common questions from contracting officers and agency buyers.
            </p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass-card p-5"
              >
                <h3 className="text-sm font-semibold mb-2" style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}>
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-5 sm:px-8 lg:px-12"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,200,240,0.02)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-balance" style={{ fontFamily: "'Sora', sans-serif" }}>
              Ready to Begin Your Acquisition?
            </h2>
            <p className="text-base mb-8" style={{ color: "var(--muted-foreground)" }}>
              Request our full Capability Statement, Representations and Certifications (Reps & Certs),
              or schedule a no-obligation technical briefing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/#contact">
                <span className="btn-primary cursor-pointer">
                  Request Capability Statement
                  <ArrowRight size={16} />
                </span>
              </Link>
              <Link href="/#contact">
                <span className="btn-secondary cursor-pointer">
                  Contact Our Team
                </span>
              </Link>
            </div>
            <p className="text-xs mt-6" style={{ color: "rgba(255,255,255,0.3)" }}>
              SAM Registered · CAGE: 107F5 · MWBE Certified · Active FY26
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
