import { motion } from "framer-motion";
import { ArrowRight, Building2, ShieldCheck, Globe, FileText } from "lucide-react";
import { Link } from "wouter";

const contractVehicles = [
  { label: "SAM.gov", sub: "Active Registration" },
  { label: "CAGE Code", sub: "107F5" },
  { label: "MWBE", sub: "Certified" },
  { label: "FY26", sub: "Active Award Ready" },
];

const naicsSummary = [
  { code: "541511", desc: "Custom Computer Programming" },
  { code: "541512", desc: "Computer Systems Design" },
  { code: "541519", desc: "Other Computer Related Services" },
  { code: "541611", desc: "Management Consulting" },
  { code: "236220", desc: "Commercial Building Construction" },
  { code: "237310", desc: "Highway & Bridge Construction" },
];

const proofPoints = [
  {
    icon: Building2,
    stat: "Multi-sector",
    detail: "Federal, SLED & Enterprise",
    body: "CRF Enterprise serves federal civilian agencies, Department of Defense components, state and local governments, and commercial enterprise clients across the United States. Our solutions are designed to meet the security and compliance requirements of the most demanding public-sector environments.",
  },
  {
    icon: ShieldCheck,
    stat: "Compliance-native",
    detail: "FISMA · FedRAMP · NIST RMF",
    body: "Security and compliance are built into every engagement from day one. We produce ATO-ready documentation, align architectures to NIST SP 800-53 controls, and support agencies through the full Risk Management Framework process including System Security Plans, Security Assessment Reports, and POA&Ms.",
  },
  {
    icon: Globe,
    stat: "Full lifecycle",
    detail: "Strategy through Operations",
    body: "From initial capability assessment and acquisition planning through system development, deployment, and ongoing operations and maintenance, CRF Enterprise provides continuity across the full program lifecycle. We serve as long-term technology partners, not transactional vendors.",
  },
  {
    icon: FileText,
    stat: "Procurement-ready",
    detail: "Reps & Certs available",
    body: "Our representations and certifications are maintained in SAM.gov and available upon request. We can support sole-source justifications, competitive acquisitions, GSA schedule actions, and teaming arrangements as a prime or subcontractor on government and commercial contracts.",
  },
];

export default function CapabilityStatement() {
  return (
    <section
      id="capabilities"
      className="relative py-24 md:py-32 px-5 sm:px-8 lg:px-12"
      aria-labelledby="cap-heading"
      style={{
        background: "rgba(255,255,255,0.015)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 30% 50%, rgba(0,200,240,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="section-divider" />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              Capability Statement
            </span>
          </div>
          <h2
            id="cap-heading"
            className="text-balance mb-5 max-w-3xl"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Why Agencies and Enterprises Choose{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00c8f0, #0090c8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              CRF Enterprise
            </span>
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-3xl"
            style={{ color: "rgba(240,240,245,0.65)" }}
          >
            CRF Enterprise, LLC is a Las Vegas, Nevada-based government and enterprise technology
            contractor. We specialize in secure software development, cloud and physical
            infrastructure, digital transformation, and strategic IT consulting for federal agencies,
            SLED organizations, and enterprise clients across the United States.
          </p>
        </motion.div>

        {/* Proof points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {proofPoints.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <motion.article
                key={pt.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-6 flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{ background: "rgba(0,200,240,0.08)", border: "1px solid rgba(0,200,240,0.15)" }}
                  >
                    <Icon size={20} style={{ color: "var(--accent)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}
                    >
                      {pt.stat}
                    </p>
                    <p className="text-xs" style={{ color: "var(--accent)" }}>{pt.detail}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {pt.body}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* NAICS codes + contract vehicles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* NAICS */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-base font-bold mb-5"
              style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}
            >
              NAICS Codes Performed
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {naicsSummary.map(({ code, desc }) => (
                <div
                  key={code}
                  className="flex items-center gap-3 glass-card px-4 py-3"
                  style={{ borderRadius: "0.625rem" }}
                >
                  <span
                    className="text-sm font-black flex-shrink-0"
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      background: "linear-gradient(135deg, #00c8f0, #0090c8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {code}
                  </span>
                  <span className="text-xs leading-snug" style={{ color: "rgba(240,240,245,0.6)" }}>
                    {desc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contract vehicles */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3
              className="text-base font-bold mb-5"
              style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}
            >
              Procurement Credentials
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {contractVehicles.map(({ label, sub }) => (
                <div
                  key={label}
                  className="glass-card px-4 py-4 flex flex-col gap-0.5"
                  style={{ borderRadius: "0.625rem" }}
                >
                  <span
                    className="text-sm font-bold"
                    style={{ fontFamily: "'Sora', sans-serif", color: "var(--accent)" }}
                  >
                    {label}
                  </span>
                  <span className="text-xs" style={{ color: "rgba(240,240,245,0.5)" }}>{sub}</span>
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(240,240,245,0.55)" }}>
              CRF Enterprise maintains an active SAM.gov registration and is eligible for federal
              contract awards. We can perform as prime contractor, subcontractor, or teaming partner
              on government and commercial contracts. Contact us for our full Representations and
              Certifications package or Capability Statement PDF.
            </p>
            <Link href="/#contact">
              <span
                className="inline-flex items-center gap-1.5 text-sm font-semibold cursor-pointer transition-colors hover:text-accent"
                style={{ color: "rgba(0,200,240,0.75)", fontFamily: "'Sora', sans-serif" }}
              >
                Request Capability Statement
                <ArrowRight size={14} className="transition-transform hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
