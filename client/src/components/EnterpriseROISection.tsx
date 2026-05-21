import { motion } from "framer-motion";
import { ArrowRight, TrendingDown, TrendingUp, Clock, Shield, DollarSign, Users } from "lucide-react";
import { Link } from "wouter";

const roiMetrics = [
  {
    icon: TrendingDown,
    label: "Cost Reduction",
    value: "30–45%",
    context: "Average reduction in IT operational costs after infrastructure modernization",
    color: "#00c8f0",
  },
  {
    icon: Clock,
    label: "Faster Delivery",
    value: "3×",
    context: "Improvement in software deployment frequency using DevSecOps pipelines",
    color: "#00c8f0",
  },
  {
    icon: Shield,
    label: "Compliance Speed",
    value: "60%",
    context: "Reduction in time-to-ATO with pre-built NIST control library and SSP templates",
    color: "#d4af37",
  },
  {
    icon: TrendingUp,
    label: "System Uptime",
    value: "99.97%",
    context: "Average availability on mission-critical platforms delivered by CRF",
    color: "#00c8f0",
  },
];

const differentiators = [
  {
    icon: Shield,
    title: "Security Built In, Not Bolted On",
    body: "Every architecture decision is made with zero-trust principles, least-privilege access, and continuous monitoring from day one — not retrofitted during the ATO process.",
  },
  {
    icon: Users,
    title: "Government-Experienced Teams",
    body: "Our engineers, architects, and program managers have direct experience delivering in federal, SLED, and regulated enterprise environments — not just general commercial projects.",
  },
  {
    icon: DollarSign,
    title: "Transparent Procurement",
    body: "CRF works with agencies on open-market, GSA Schedule, IDIQ, and other contract vehicles. We provide detailed PWS support and competitive pricing aligned to government cost standards.",
  },
  {
    icon: Clock,
    title: "Responsive & Accountable",
    body: "We respond to RFIs within 48 hours, deliver capability statements same-day, and maintain dedicated POCs for every active engagement — no black-box project management.",
  },
];

export default function EnterpriseROISection() {
  return (
    <section
      className="relative section-alt py-20 md:py-28 px-5 sm:px-8 lg:px-12"
      aria-labelledby="roi-heading"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 0% 50%, rgba(0,200,240,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* ROI metrics */}
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
              Why CRF Enterprise
            </span>
          </div>
          <h2 id="roi-heading" className="text-balance mb-4 max-w-2xl" style={{ fontFamily: "'Sora', sans-serif" }}>
            Measurable Outcomes.{" "}
            <span style={{
              background: "linear-gradient(135deg, #00c8f0, #0090c8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Quantifiable Value.
            </span>
          </h2>
          <p className="text-base max-w-xl" style={{ color: "var(--muted-foreground)" }}>
            CRF Enterprise is not a feature factory. Every engagement is scoped around outcomes —
            cost reduction, faster delivery, compliance acceleration, and operational resilience.
          </p>
        </motion.div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {roiMetrics.map(({ icon: Icon, label, value, context, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-5 flex flex-col gap-3"
              style={{ borderColor: `rgba(${color === "#d4af37" ? "212,175,55" : "0,200,240"},0.12)` }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background: `rgba(${color === "#d4af37" ? "212,175,55" : "0,200,240"},0.1)`,
                  border: `1px solid rgba(${color === "#d4af37" ? "212,175,55" : "0,200,240"},0.2)`,
                }}
              >
                <Icon size={17} style={{ color }} aria-hidden="true" />
              </div>
              <div
                className="metric-number"
                style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
              >
                {value}
              </div>
              <div>
                <div className="text-xs font-semibold mb-1" style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}>
                  {label}
                </div>
                <div className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {context}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {differentiators.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="flex items-start gap-4"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "rgba(0,200,240,0.08)", border: "1px solid rgba(0,200,240,0.15)" }}
              >
                <Icon size={18} style={{ color: "var(--accent)" }} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-bold mb-1.5" style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,240,245,0.6)" }}>
                  {body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Link href="/#contact">
            <span className="btn-primary text-sm cursor-pointer">
              Request a Technical Briefing
              <ArrowRight size={15} />
            </span>
          </Link>
          <Link href="/services/enterprise-technology">
            <span className="btn-secondary text-sm cursor-pointer">
              View Capabilities
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
