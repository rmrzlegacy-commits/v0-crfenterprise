import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Zap, RefreshCw, BarChart2, Users, FileText, Settings } from "lucide-react";
import { Link } from "wouter";

const naicsCodes = [
  { code: "541511", label: "Custom Computer Programming Services" },
  { code: "541513", label: "Computer Facilities Management Services" },
  { code: "541519", label: "Other Computer Related Services" },
  { code: "541611", label: "Administrative Management and General Consulting Services" },
];

const capabilities = [
  {
    icon: RefreshCw,
    title: "Legacy System Modernization",
    description:
      "Migrate aging government IT systems—COBOL mainframes, on-premise monoliths, end-of-life platforms—to modern, maintainable cloud-native architectures. We execute phased migrations that minimize operational disruption and maintain data continuity throughout.",
  },
  {
    icon: Zap,
    title: "Process Automation & RPA",
    description:
      "Automate manual, paper-based, and redundant workflows using Robotic Process Automation (RPA) and intelligent workflow tools. We help agencies eliminate processing bottlenecks, reduce error rates, and reallocate staff to higher-value mission work.",
  },
  {
    icon: BarChart2,
    title: "Data-Driven Decision Platforms",
    description:
      "Build real-time dashboards, reporting systems, and analytics platforms that surface actionable insights from agency data. We connect disparate data sources and deliver governance-ready business intelligence for executive and operational leadership.",
  },
  {
    icon: Users,
    title: "Citizen & User Experience Design",
    description:
      "Redesign public-facing portals, internal tools, and self-service systems around the actual needs of users and constituents. We conduct user research, create 508-compliant interfaces, and apply human-centered design principles to every engagement.",
  },
  {
    icon: FileText,
    title: "Digital-First Policy Implementation",
    description:
      "Translate executive orders, OMB mandates, and agency digital transformation directives into concrete technical roadmaps and implementation plans. We align technology investments with 21st Century IDEA, M-23-22, and Cloud Smart policy.",
  },
  {
    icon: Settings,
    title: "Organizational Change Management",
    description:
      "Guide your workforce through technology transitions with structured change management, training programs, and adoption measurement. We ensure that technology investments achieve their intended mission impact, not just technical deployment.",
  },
];

const deliverables = [
  "Digital Transformation Roadmap and phased implementation plan",
  "Current-state IT assessment and gap analysis",
  "Legacy modernization architecture and migration strategy",
  "Process automation opportunity inventory",
  "User research findings and experience design specifications",
  "508 accessibility compliance audit and remediation plan",
  "Change management and training curriculum",
  "Data governance framework and analytics platform design",
];

const faqs = [
  {
    q: "What does digital transformation mean for government agencies?",
    a: "For government agencies, digital transformation means replacing legacy systems, automating manual processes, improving citizen-facing services, and building data capabilities that enable evidence-based decision making—all while maintaining compliance with federal IT standards.",
  },
  {
    q: "How does CRF Enterprise approach legacy system modernization?",
    a: "We use a phased, risk-managed approach that keeps existing systems operational while incrementally migrating functionality to modern platforms. We prioritize data integrity, minimal downtime, and compliance with agency change management processes throughout.",
  },
  {
    q: "Can CRF Enterprise help with 21st Century IDEA compliance?",
    a: "Yes. We help agencies meet the requirements of the 21st Century Integrated Digital Experience Act (IDEA), including digitizing paper forms, improving public-facing websites, and implementing e-signature and self-service capabilities.",
  },
  {
    q: "Does CRF Enterprise provide change management support?",
    a: "Yes. We embed organizational change management (OCM) into every technology project. This includes stakeholder analysis, communication planning, training development, and adoption measurement to ensure technology investments achieve mission outcomes.",
  },
  {
    q: "What is CRF Enterprise's NAICS code for consulting services?",
    a: "For management and consulting engagements related to digital transformation, we perform under NAICS 541611 (Administrative Management and General Consulting Services) and 541519 (Other Computer Related Services).",
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

export default function DigitalTransformation() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Digital Transformation Services",
            "provider": { "@type": "Organization", "name": "CRF Enterprise", "url": "https://www.crfenterprise.com" },
            "serviceType": "Government Digital Transformation — Legacy Modernization, Process Automation, UX",
            "description":
              "CRF Enterprise helps government agencies and enterprises modernize legacy systems, automate processes, and build digital-first citizen experiences. NAICS 541511, 541513, 541519, 541611.",
            "areaServed": "United States",
            "url": "https://www.crfenterprise.com/services/digital-transformation",
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
      <section className="pt-36 pb-20 px-5 sm:px-8 lg:px-12" aria-labelledby="dt-hero-heading">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                <li><Link href="/"><span className="hover:text-accent transition-colors cursor-pointer">Home</span></Link></li>
                <li aria-hidden="true">/</li>
                <li style={{ color: "var(--accent)" }}>Digital Transformation</li>
              </ol>
            </nav>
            <span className="badge-accent mb-6 inline-flex">NAICS: 541511 · 541513 · 541519 · 541611</span>
            <h1 id="dt-hero-heading" className="mb-6 text-balance" style={{ fontFamily: "'Sora', sans-serif" }}>
              Digital{" "}
              <span style={{ background: "linear-gradient(135deg, #00c8f0, #0090c8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Transformation
              </span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-6" style={{ color: "rgba(240,240,245,0.75)" }}>
              CRF Enterprise guides government agencies and enterprises through the full arc of digital
              transformation — from legacy system modernization to intelligent process automation and
              citizen-centered experience design.
            </p>
            <p className="text-base leading-relaxed max-w-3xl mb-10" style={{ color: "rgba(240,240,245,0.55)" }}>
              We align every engagement to federal mandates including 21st Century IDEA, OMB M-23-22,
              and Cloud Smart policy, while maintaining compliance with agency-specific security and
              change management requirements. Our work delivers measurable operational efficiency gains
              and improved mission outcomes.
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
      <section className="py-20 px-5 sm:px-8 lg:px-12" aria-labelledby="dt-cap-heading">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="section-divider" />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>Capabilities</span>
            </div>
            <h2 id="dt-cap-heading" className="text-balance" style={{ fontFamily: "'Sora', sans-serif" }}>Transformation Services</h2>
            <p className="mt-3 text-base max-w-2xl" style={{ color: "var(--muted-foreground)" }}>
              End-to-end digital transformation services designed for the complexity of government and enterprise environments.
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
      <section className="py-16 px-5 sm:px-8 lg:px-12" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)" }} aria-labelledby="dt-del-heading">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8">
            <h2 id="dt-del-heading" className="text-2xl font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Standard Deliverables</h2>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>What agencies receive at every stage of a transformation engagement.</p>
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
      <section className="py-20 px-5 sm:px-8 lg:px-12" aria-labelledby="dt-faq-heading">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <h2 id="dt-faq-heading" className="text-2xl font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Procurement FAQs</h2>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>Common questions from program managers and contracting officers.</p>
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
              Start Your Digital Transformation
            </h2>
            <p className="text-base mb-8" style={{ color: "var(--muted-foreground)" }}>
              Contact us to discuss your agency's modernization priorities, request our capability statement, or schedule a discovery call with our team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/#contact"><span className="btn-primary cursor-pointer">Begin Transformation <ArrowRight size={16} /></span></Link>
              <Link href="/#contact"><span className="btn-secondary cursor-pointer">Contact Our Team</span></Link>
            </div>
            <p className="text-xs mt-6" style={{ color: "rgba(255,255,255,0.3)" }}>SAM Registered · CAGE: 107F5 · MWBE Certified · Active FY26</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
