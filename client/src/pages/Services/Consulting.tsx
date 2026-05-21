import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, TrendingUp, BookOpen, ShieldCheck, Search, FileCheck, Users } from "lucide-react";
import { Link } from "wouter";

const naicsCodes = [
  { code: "541611", label: "Administrative Management and General Consulting" },
  { code: "541612", label: "Human Resources Consulting Services" },
  { code: "541690", label: "Other Scientific and Technical Consulting" },
  { code: "541519", label: "Other Computer Related Services" },
];

const capabilities = [
  {
    icon: TrendingUp,
    title: "Technology Strategy & Roadmapping",
    description:
      "Develop multi-year technology investment strategies aligned with mission objectives, budget cycles, and agency IT modernization mandates. We produce investment business cases, technology roadmaps, and executive briefing materials that inform IT governance decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Government Compliance & Risk Advisory",
    description:
      "Navigate FISMA, FedRAMP, CMMC, NIST RMF, and agency-specific security frameworks. We conduct risk assessments, develop Plans of Action & Milestones (POA&M), and guide agencies through Authority to Operate (ATO) processes with precision.",
  },
  {
    icon: BookOpen,
    title: "Enterprise Architecture Consulting",
    description:
      "Design scalable, interoperable enterprise architectures aligned with TOGAF, DoDAF, and FEA frameworks. We produce architecture artifacts that satisfy capital planning requirements and support FITARA compliance reviews.",
  },
  {
    icon: Search,
    title: "IT Assessment & Due Diligence",
    description:
      "Conduct thorough assessments of existing IT environments, software portfolios, vendor contracts, and technical debt. We deliver actionable findings with prioritized recommendations for agencies, primes, and enterprise organizations.",
  },
  {
    icon: FileCheck,
    title: "Procurement & Acquisition Support",
    description:
      "Support the full acquisition lifecycle including requirements development, market research, Statement of Work (SOW) and Performance Work Statement (PWS) writing, evaluation criteria development, and source selection support.",
  },
  {
    icon: Users,
    title: "Technical Staff Augmentation",
    description:
      "Provide qualified technical personnel — software engineers, cloud architects, cybersecurity analysts, program managers — for project-based government and enterprise engagements. All candidates are eligible for agency security clearance processing.",
  },
];

const deliverables = [
  "Technology strategy and multi-year investment roadmap",
  "IT assessment report with prioritized recommendations",
  "Enterprise architecture artifacts (TOGAF/DoDAF/FEA aligned)",
  "Risk assessment and POA&M documentation",
  "Performance Work Statement (PWS) and SOW drafting",
  "Market research and industry analysis reports",
  "FISMA/FedRAMP/CMMC readiness assessment",
  "Technical staffing and position descriptions",
];

const faqs = [
  {
    q: "Does CRF Enterprise provide independent IT assessments?",
    a: "Yes. We conduct objective, independent assessments of agency IT environments, software portfolios, contracts, and security posture. Our findings are presented without vendor bias, with clear prioritization aligned to mission and budget realities.",
  },
  {
    q: "Can CRF Enterprise support federal IT capital planning (CPIC)?",
    a: "Yes. We support the Capital Planning and Investment Control (CPIC) process including Exhibit 53 and Exhibit 300 preparation, OMB passback responses, and IT dashboard data accuracy reviews.",
  },
  {
    q: "What compliance frameworks does CRF Enterprise work with?",
    a: "We have experience with FISMA, FedRAMP, CMMC (Levels 1-3), NIST SP 800-53, NIST RMF, DoD STIG, HIPAA, and SOC 2. Our consultants hold relevant certifications and maintain currency with evolving federal IT compliance requirements.",
  },
  {
    q: "Can CRF Enterprise help write a solicitation or RFP?",
    a: "Yes. We provide acquisition support including market research, requirements documentation, SOW/PWS drafting, evaluation factor development, and Independent Government Cost Estimates (IGCE) — supporting both agency buyers and prime contractors.",
  },
  {
    q: "Does CRF Enterprise offer program management consulting?",
    a: "Yes. We provide program management advisory services including schedule development, risk management, stakeholder communication, and program health assessments aligned with PMI PMBOK and federal program management guidance.",
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

export default function Consulting() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Strategic Consulting",
            "provider": { "@type": "Organization", "name": "CRF Enterprise", "url": "https://www.crfenterprise.com" },
            "serviceType": "Government Technology Strategy, Compliance, and Enterprise Architecture Consulting",
            "description":
              "CRF Enterprise provides technology strategy, IT assessment, compliance advisory, enterprise architecture, and acquisition support for federal agencies and enterprise clients. NAICS 541611, 541612, 541690, 541519.",
            "areaServed": "United States",
            "url": "https://www.crfenterprise.com/services/consulting",
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
      <section className="pt-36 pb-20 px-5 sm:px-8 lg:px-12" aria-labelledby="con-hero-heading">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                <li><Link href="/"><span className="hover:text-accent transition-colors cursor-pointer">Home</span></Link></li>
                <li aria-hidden="true">/</li>
                <li style={{ color: "var(--accent)" }}>Strategic Consulting</li>
              </ol>
            </nav>
            <span className="badge-accent mb-6 inline-flex">NAICS: 541611 · 541612 · 541690 · 541519</span>
            <h1 id="con-hero-heading" className="mb-6 text-balance" style={{ fontFamily: "'Sora', sans-serif" }}>
              Strategic{" "}
              <span style={{ background: "linear-gradient(135deg, #00c8f0, #0090c8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Consulting
              </span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-6" style={{ color: "rgba(240,240,245,0.75)" }}>
              CRF Enterprise delivers expert technology strategy, compliance advisory, enterprise
              architecture, and acquisition support for federal agencies and enterprise organizations
              navigating complex IT decisions.
            </p>
            <p className="text-base leading-relaxed max-w-3xl mb-10" style={{ color: "rgba(240,240,245,0.55)" }}>
              Our consultants combine deep technical expertise with fluency in federal acquisition
              regulations, compliance frameworks, and capital planning processes. We serve as trusted
              advisors to program managers, CIOs, and contracting officers who need objective guidance
              without vendor bias.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/#contact"><span className="btn-primary cursor-pointer">Request Capability Statement <ArrowRight size={16} /></span></Link>
              <Link href="/#contact"><span className="btn-secondary cursor-pointer">Schedule a Briefing</span></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NAICS strip */}
      <section className="py-5 px-5 sm:px-8 lg:px-12" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }} aria-label="NAICS code reference">
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
      <section className="py-20 px-5 sm:px-8 lg:px-12" aria-labelledby="con-cap-heading">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="section-divider" />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>Capabilities</span>
            </div>
            <h2 id="con-cap-heading" className="text-balance" style={{ fontFamily: "'Sora', sans-serif" }}>Consulting Practice Areas</h2>
            <p className="mt-3 text-base max-w-2xl" style={{ color: "var(--muted-foreground)" }}>
              Objective, expert guidance across the full spectrum of government and enterprise technology challenges.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.article key={cap.title} custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="glass-card p-6">
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
      <section className="py-16 px-5 sm:px-8 lg:px-12" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)" }} aria-labelledby="con-del-heading">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8">
            <h2 id="con-del-heading" className="text-2xl font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Standard Deliverables</h2>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>Documentation and artifacts produced for every consulting engagement.</p>
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
      <section className="py-20 px-5 sm:px-8 lg:px-12" aria-labelledby="con-faq-heading">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <h2 id="con-faq-heading" className="text-2xl font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Procurement FAQs</h2>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>Common questions from program offices and contracting officers.</p>
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
              Get Expert Guidance Today
            </h2>
            <p className="text-base mb-8" style={{ color: "var(--muted-foreground)" }}>
              Contact us to schedule a no-obligation consultation, request our capability statement,
              or discuss a specific acquisition requirement with our team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/#contact"><span className="btn-primary cursor-pointer">Schedule Consultation <ArrowRight size={16} /></span></Link>
              <Link href="/#contact"><span className="btn-secondary cursor-pointer">Contact Our Team</span></Link>
            </div>
            <p className="text-xs mt-6" style={{ color: "rgba(255,255,255,0.3)" }}>SAM Registered · CAGE: 107F5 · MWBE Certified · Active FY26</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
