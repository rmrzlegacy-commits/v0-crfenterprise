import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Cloud, Server, Shield, GitBranch, Activity, Lock } from "lucide-react";
import { Link } from "wouter";

const naicsCodes = [
  { code: "236220", label: "Commercial and Institutional Building Construction" },
  { code: "237310", label: "Highway, Street, and Bridge Construction" },
  { code: "541512", label: "Computer Systems Design Services" },
  { code: "237990", label: "Other Heavy and Civil Engineering Construction" },
];

const capabilities = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure Design",
    description:
      "Architect multi-cloud and hybrid environments on AWS GovCloud, Microsoft Azure Government, and Google Cloud. We design for FedRAMP High, DoD IL2/IL4, and civilian agency ATO requirements, ensuring compliant, scalable infrastructure from the foundation.",
  },
  {
    icon: Server,
    title: "Physical & Civil Infrastructure",
    description:
      "Plan and coordinate physical construction and site development projects for government facilities, community development programs, and enterprise campuses. We manage procurement, subcontracting, and project execution under federal acquisition regulations.",
  },
  {
    icon: Shield,
    title: "Zero-Trust Security Implementation",
    description:
      "Implement NIST SP 800-207 zero-trust architecture across your environment. We design identity-centric access controls, microsegmentation, and continuous verification systems aligned with CISA's Zero Trust Maturity Model.",
  },
  {
    icon: GitBranch,
    title: "DevSecOps & CI/CD Pipelines",
    description:
      "Build automated, security-integrated delivery pipelines that enable rapid, compliant software releases. We implement Infrastructure as Code (IaC) using Terraform and Ansible, with automated compliance scanning at every stage.",
  },
  {
    icon: Activity,
    title: "Monitoring & Observability",
    description:
      "Deploy enterprise-grade monitoring, logging, and alerting infrastructure. We configure SIEM integrations, real-time dashboards, and automated incident response workflows for continuous situational awareness.",
  },
  {
    icon: Lock,
    title: "Disaster Recovery & COOP",
    description:
      "Design Continuity of Operations (COOP) plans and technical disaster recovery architectures. We test and validate RTO/RPO targets to ensure your mission-critical systems remain available during any contingency.",
  },
];

const deliverables = [
  "Infrastructure design documents and architecture diagrams",
  "IaC templates (Terraform, CloudFormation, Ansible)",
  "FedRAMP System Security Plan (SSP) support",
  "Zero-trust implementation roadmap",
  "Disaster Recovery / COOP plan documentation",
  "Network topology and security baseline documentation",
  "Performance benchmarks and capacity planning reports",
  "Construction project management and closeout packages",
];

const faqs = [
  {
    q: "What types of infrastructure does CRF Enterprise support?",
    a: "We support both digital infrastructure (cloud, network, DevSecOps) and physical/civil infrastructure projects including government facility construction, community development, and enterprise campus buildouts.",
  },
  {
    q: "Can CRF Enterprise support FedRAMP High environments?",
    a: "Yes. Our cloud architects have experience designing and documenting systems for FedRAMP High authorization, including boundary scoping, control implementation, and continuous monitoring plans.",
  },
  {
    q: "What construction NAICS codes does CRF Enterprise hold?",
    a: "CRF Enterprise performs under NAICS 236220 (Commercial and Institutional Building Construction) and 237310 (Highway, Street, and Bridge Construction) for civil and government construction projects.",
  },
  {
    q: "Does CRF Enterprise perform infrastructure work in Las Vegas?",
    a: "Yes. We are headquartered in Las Vegas, NV and perform infrastructure work locally and nationally. We have relationships with local subcontractors and are familiar with Nevada state and local procurement requirements.",
  },
  {
    q: "How does CRF Enterprise handle subcontracting for construction projects?",
    a: "We manage the full subcontracting process in compliance with FAR/DFARS requirements, including small business subcontracting plans, certified payroll, and Davis-Bacon Act compliance where applicable.",
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

export default function Infrastructure() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Infrastructure Development",
            "provider": { "@type": "Organization", "name": "CRF Enterprise", "url": "https://www.crfenterprise.com" },
            "serviceType": "Government Infrastructure Development — Digital and Physical",
            "description":
              "CRF Enterprise delivers cloud infrastructure design, FedRAMP-compliant architecture, zero-trust security, and physical civil infrastructure services for government agencies. NAICS 236220, 237310, 541512.",
            "areaServed": "United States",
            "url": "https://www.crfenterprise.com/services/infrastructure",
          }),
        }}
      />
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
      <section className="pt-36 pb-20 px-5 sm:px-8 lg:px-12" aria-labelledby="infra-hero-heading">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                <li><Link href="/"><span className="hover:text-accent transition-colors cursor-pointer">Home</span></Link></li>
                <li aria-hidden="true">/</li>
                <li style={{ color: "var(--accent)" }}>Infrastructure Development</li>
              </ol>
            </nav>

            <span className="badge-accent mb-6 inline-flex">
              NAICS: 236220 · 237310 · 541512
            </span>

            <h1 id="infra-hero-heading" className="mb-6 text-balance" style={{ fontFamily: "'Sora', sans-serif" }}>
              Infrastructure{" "}
              <span style={{ background: "linear-gradient(135deg, #00c8f0, #0090c8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Development
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-6" style={{ color: "rgba(240,240,245,0.75)" }}>
              CRF Enterprise designs, builds, and operates infrastructure that governments and enterprises
              depend on. From secure cloud environments to physical facility construction, we deliver
              compliant, durable, and scalable infrastructure across both digital and civil domains.
            </p>

            <p className="text-base leading-relaxed max-w-3xl mb-10" style={{ color: "rgba(240,240,245,0.55)" }}>
              Our infrastructure practice covers FedRAMP-aligned cloud architecture, zero-trust network
              design, DevSecOps automation, and physical construction projects under FAR/DFARS
              compliance. We serve federal agencies, state and local governments, and enterprise clients
              seeking infrastructure partners with deep procurement and compliance experience.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/#contact">
                <span className="btn-primary cursor-pointer">Request Capability Statement <ArrowRight size={16} /></span>
              </Link>
              <Link href="/#contact">
                <span className="btn-secondary cursor-pointer">Schedule a Briefing</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NAICS strip */}
      <section
        className="py-5 px-5 sm:px-8 lg:px-12"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
        aria-label="NAICS code reference"
      >
        <div className="max-w-5xl mx-auto flex flex-wrap gap-x-8 gap-y-2 items-center">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>NAICS Codes</span>
          {naicsCodes.map(({ code, label }) => (
            <span key={code} className="text-sm" style={{ color: "rgba(240,240,245,0.6)" }}>
              <strong style={{ color: "var(--accent)", fontFamily: "'Sora', sans-serif" }}>{code}</strong> — {label}
            </span>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-5 sm:px-8 lg:px-12" aria-labelledby="infra-cap-heading">
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
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>Capabilities</span>
            </div>
            <h2 id="infra-cap-heading" className="text-balance" style={{ fontFamily: "'Sora', sans-serif" }}>
              Digital &amp; Physical Infrastructure Services
            </h2>
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
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl mb-4" style={{ background: "rgba(0,200,240,0.08)", border: "1px solid rgba(0,200,240,0.15)" }}>
                    <Icon size={20} style={{ color: "var(--accent)" }} aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}>{cap.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{cap.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 px-5 sm:px-8 lg:px-12" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)" }} aria-labelledby="infra-del-heading">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8">
            <h2 id="infra-del-heading" className="text-2xl font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Standard Deliverables</h2>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>What agencies and prime contractors receive on every engagement.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {deliverables.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="flex items-start gap-3">
                <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }} aria-hidden="true" />
                <span className="text-sm" style={{ color: "rgba(240,240,245,0.72)" }}>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-5 sm:px-8 lg:px-12" aria-labelledby="infra-faq-heading">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <h2 id="infra-faq-heading" className="text-2xl font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Procurement FAQs</h2>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>Common questions from contracting officers and agency buyers.</p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="glass-card p-5">
                <h3 className="text-sm font-semibold mb-2" style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 sm:px-8 lg:px-12" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,200,240,0.02)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-balance" style={{ fontFamily: "'Sora', sans-serif" }}>
              Ready to Build Reliable Infrastructure?
            </h2>
            <p className="text-base mb-8" style={{ color: "var(--muted-foreground)" }}>
              Contact us to discuss your infrastructure requirements, request our capability statement,
              or schedule a technical briefing with our engineering team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/#contact"><span className="btn-primary cursor-pointer">Start a Project <ArrowRight size={16} /></span></Link>
              <Link href="/#contact"><span className="btn-secondary cursor-pointer">Contact Our Team</span></Link>
            </div>
            <p className="text-xs mt-6" style={{ color: "rgba(255,255,255,0.3)" }}>SAM Registered · CAGE: 107F5 · MWBE Certified · Active FY26</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
