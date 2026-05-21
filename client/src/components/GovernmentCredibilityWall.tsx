import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, FileText, Star, Lock } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "SAM.gov Registered",
    subtitle: "Active · FY2026",
    detail: "Unique Entity ID verified. Eligible for federal contract awards across all civilian and defense agencies.",
    color: "#00c8f0",
  },
  {
    icon: Award,
    title: "MWBE Certified",
    subtitle: "Small Business Set-Aside Eligible",
    detail: "Minority Women Business Enterprise certification qualifies CRF for relevant set-aside programs and supplier diversity initiatives.",
    color: "#d4af37",
  },
  {
    icon: FileText,
    title: "CAGE Code: 107F5",
    subtitle: "DoD / Federal Identifier",
    detail: "Commercial and Government Entity Code issued by the Defense Logistics Agency. Required for DoD and federal procurement.",
    color: "#00c8f0",
  },
  {
    icon: Lock,
    title: "FISMA / NIST Aligned",
    subtitle: "Security Compliance",
    detail: "All software deliverables align with NIST SP 800-53, FISMA requirements, and agency-specific security baselines.",
    color: "#00c8f0",
  },
  {
    icon: CheckCircle,
    title: "Reps & Certs Available",
    subtitle: "FAR / DFARS Compliant",
    detail: "Representations and Certifications available on request. Current on all standard FAR and DFARS clause requirements.",
    color: "#d4af37",
  },
  {
    icon: Star,
    title: "DevSecOps Delivery",
    subtitle: "Agile · CI/CD · IaC",
    detail: "Delivery methodology aligned with OMB M-21-31, CISA guidance, and agency DevSecOps maturity models.",
    color: "#00c8f0",
  },
];

const naicsCodes = [
  { code: "541511", label: "Custom Computer Programming Services" },
  { code: "541512", label: "Computer Systems Design Services" },
  { code: "541519", label: "Other Computer Related Services" },
  { code: "541611", label: "Administrative Management Consulting" },
  { code: "236220", label: "Commercial / Institutional Building Construction" },
  { code: "237310", label: "Highway, Street & Bridge Construction" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function GovernmentCredibilityWall() {
  return (
    <section
      className="relative section-alt py-20 md:py-28 px-5 sm:px-8 lg:px-12"
      aria-labelledby="credibility-heading"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,200,240,0.025) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="status-dot" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)", fontFamily: "'Sora', sans-serif" }}>
              Credentials &amp; Compliance — Active FY2026
            </span>
          </div>
          <h2
            id="credibility-heading"
            className="text-balance mb-4 max-w-2xl"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Procurement-Ready.{" "}
            <span style={{
              background: "linear-gradient(135deg, #00c8f0, #0090c8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Mission-Verified.
            </span>
          </h2>
          <p className="text-base max-w-xl mb-6" style={{ color: "var(--muted-foreground)" }}>
            CRF Enterprise maintains all registrations, certifications, and compliance credentials required
            for federal, SLED, and enterprise procurement. Our documentation is current, auditable, and
            available to contracting officers on request.
          </p>
          <div className="hr-rule" aria-hidden="true" />
        </motion.div>

        {/* Credential badges */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14"
        >
          {badges.map(({ icon: Icon, title, subtitle, detail, color }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="glass-card p-5 flex flex-col gap-3"
              style={{ borderColor: `rgba(${color === "#d4af37" ? "212,175,55" : "0,200,240"},0.12)` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `rgba(${color === "#d4af37" ? "212,175,55" : "0,200,240"},0.1)`,
                    border: `1px solid rgba(${color === "#d4af37" ? "212,175,55" : "0,200,240"},0.2)`,
                  }}
                >
                  <Icon size={17} style={{ color }} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}>
                    {title}
                  </div>
                  <div className="text-xs" style={{ color }}>
                    {subtitle}
                  </div>
                </div>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(240,240,245,0.55)" }}>
                {detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* NAICS reference table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "'Sora', sans-serif", color: "var(--muted-foreground)" }}>
            NAICS Codes — Scope of Performance
          </h3>
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            role="table"
            aria-label="NAICS codes for CRF Enterprise"
          >
            {naicsCodes.map((item, i) => (
              <div
                key={item.code}
                role="row"
                className="flex items-center gap-4 px-5 py-3.5"
                style={{
                  background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                  borderBottom: i < naicsCodes.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                }}
              >
                <span
                  role="cell"
                  className="text-sm font-bold tabular-nums w-16 flex-shrink-0"
                  style={{ fontFamily: "'Sora', sans-serif", color: "var(--accent)" }}
                >
                  {item.code}
                </span>
                <span role="cell" className="text-sm" style={{ color: "rgba(240,240,245,0.7)" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs mt-3" style={{ color: "rgba(240,240,245,0.35)" }}>
            Source: SAM.gov · CAGE Code 107F5 · Updated FY2026. Contact our team for full Representations and Certifications documentation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
