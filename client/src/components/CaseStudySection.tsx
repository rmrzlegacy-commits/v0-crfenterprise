import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, Shield, Zap } from "lucide-react";
import { Link } from "wouter";

const caseStudies = [
  {
    tag: "Digital Transformation",
    naics: "541511",
    sector: "Federal Agency",
    title: "Legacy ERP Modernization for Multi-Agency Shared Services Platform",
    summary:
      "A federal shared-services agency operating legacy COBOL-based financial systems needed a phased migration to a cloud-native microservices architecture — without disrupting live payroll and procurement operations for 12 dependent agencies.",
    approach:
      "CRF delivered a strangler-fig migration strategy over 18 months, decomposing monolithic services into independently deployable modules with zero-downtime cutover windows. All work aligned to NIST RMF and the agency's existing ATO boundaries.",
    metrics: [
      { icon: TrendingUp, value: "62%", label: "Reduction in processing time" },
      { icon: Clock, value: "99.98%", label: "Uptime post-migration" },
      { icon: Shield, value: "0", label: "Security incidents" },
      { icon: Zap, value: "4x", label: "Throughput improvement" },
    ],
    keywords: ["FISMA", "FedRAMP", "NIST RMF", "DevSecOps", "Zero-downtime migration"],
  },
  {
    tag: "Infrastructure Development",
    naics: "541512",
    sector: "State Government",
    title: "Statewide Cloud Infrastructure Consolidation — 47 Agencies, One Platform",
    summary:
      "A state CIO office managing fragmented IT infrastructure across 47 agencies needed a unified, cost-optimized cloud platform that met state security standards and enabled cross-agency data sharing under CJIS and HIPAA frameworks.",
    approach:
      "CRF designed and deployed a multi-tenant cloud landing zone on FedRAMP-authorized infrastructure, establishing a centralized Identity and Access Management (IAM) framework and shared security operations capability. Agency onboarding used Infrastructure-as-Code templates for consistent, repeatable deployments.",
    metrics: [
      { icon: TrendingUp, value: "38%", label: "Annual IT cost reduction" },
      { icon: Clock, value: "< 4hr", label: "Agency onboarding time" },
      { icon: Shield, value: "CJIS", label: "Compliant across all tenants" },
      { icon: Zap, value: "47", label: "Agencies unified" },
    ],
    keywords: ["FedRAMP", "CJIS", "HIPAA", "IaC", "Multi-tenant", "IAM"],
  },
  {
    tag: "Enterprise Technology",
    naics: "541519",
    sector: "Enterprise Client",
    title: "Real-Time Data Platform for Mission-Critical Supply Chain Operations",
    summary:
      "A $2B logistics enterprise operating across 14 distribution centers required a real-time data intelligence platform to replace manual reporting, reduce stockout events, and enable predictive demand forecasting across their procurement network.",
    approach:
      "CRF built a streaming data platform ingesting 4M+ events per day from warehouse management systems, carrier APIs, and ERP data sources. A governed data lake and BI layer enabled operations teams to act on real-time inventory signals, reducing manual intervention by 80%.",
    metrics: [
      { icon: TrendingUp, value: "80%", label: "Reduction in manual reporting" },
      { icon: Clock, value: "< 30s", label: "End-to-end data latency" },
      { icon: Shield, value: "SOC 2", label: "Type II compliant platform" },
      { icon: Zap, value: "4M+", label: "Events processed daily" },
    ],
    keywords: ["Data engineering", "Streaming", "SOC 2", "BI platform", "Supply chain"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function CaseStudySection() {
  return (
    <section
      className="relative py-20 md:py-28 px-5 sm:px-8 lg:px-12"
      aria-labelledby="case-studies-heading"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(0,144,200,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="section-divider" />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
              Past Performance
            </span>
          </div>
          <h2 id="case-studies-heading" className="text-balance mb-4 max-w-2xl" style={{ fontFamily: "'Sora', sans-serif" }}>
            Proven Results Across{" "}
            <span style={{
              background: "linear-gradient(135deg, #00c8f0, #0090c8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Government & Enterprise
            </span>
          </h2>
          <p className="text-base max-w-xl" style={{ color: "var(--muted-foreground)" }}>
            Representative engagements demonstrating CRF&apos;s delivery capability across federal,
            state, and enterprise environments. Detailed past performance references available on request.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="space-y-6"
        >
          {caseStudies.map((study, i) => (
            <motion.article
              key={i}
              variants={cardVariants}
              className="glass-card p-6 md:p-8"
              aria-labelledby={`case-study-${i}-title`}
            >
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(0,200,240,0.08)",
                    color: "var(--accent)",
                    border: "1px solid rgba(0,200,240,0.15)",
                    fontFamily: "'Sora', sans-serif",
                  }}
                >
                  {study.tag}
                </span>
                <span
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(212,175,55,0.08)",
                    color: "#d4af37",
                    border: "1px solid rgba(212,175,55,0.15)",
                    fontFamily: "'Sora', sans-serif",
                  }}
                >
                  {study.sector}
                </span>
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                  NAICS {study.naics}
                </span>
              </div>

              <h3 id={`case-study-${i}-title`} className="text-lg font-bold mb-3 text-balance" style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}>
                {study.title}
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--accent)", fontFamily: "'Sora', sans-serif" }}>
                      Challenge
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(240,240,245,0.65)" }}>
                      {study.summary}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--accent)", fontFamily: "'Sora', sans-serif" }}>
                      Approach
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(240,240,245,0.55)" }}>
                      {study.approach}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {study.keywords.map(kw => (
                      <span
                        key={kw}
                        className="text-xs px-2 py-0.5 rounded"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "rgba(240,240,245,0.5)",
                        }}
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 self-start">
                  {study.metrics.map(({ icon: Icon, value, label }) => (
                    <div
                      key={label}
                      className="glass-card p-3 flex flex-col gap-1.5"
                      style={{ background: "rgba(0,200,240,0.04)" }}
                    >
                      <Icon size={14} style={{ color: "var(--accent)" }} aria-hidden="true" />
                      <div className="text-lg font-black" style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)", letterSpacing: "-0.02em" }}>
                        {value}
                      </div>
                      <div className="text-xs leading-tight" style={{ color: "var(--muted-foreground)" }}>
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <p className="text-xs" style={{ color: "rgba(240,240,245,0.4)" }}>
            Full past performance references, POC contacts, and CPARS ratings available upon request under NDA.
          </p>
          <Link href="/#contact">
            <span className="btn-secondary text-xs px-4 py-2 cursor-pointer whitespace-nowrap" style={{ minHeight: 36 }}>
              Request Full Past Performance Package
              <ArrowRight size={13} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
