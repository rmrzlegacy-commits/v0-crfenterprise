import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Briefcase } from "lucide-react";

const values = [
  "Security-first architecture",
  "Government compliance ready",
  "Enterprise-grade reliability",
  "Innovation-driven development",
  "24/7 mission support",
  "Transparent partnerships",
];

const metrics = [
  { icon: Award, value: "MWBE", label: "Certified" },
  { icon: Briefcase, value: "FY26", label: "SAM Active" },
  { icon: Users, value: "Gov't", label: "Specialized" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-5 sm:px-8 lg:px-12"
      aria-labelledby="about-heading"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 100% 60%, rgba(0,144,200,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="section-divider" />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
                About CRF
              </span>
            </div>

            <h2
              id="about-heading"
              className="text-balance mb-6"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Built for{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00c8f0, #0090c8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Mission Success
              </span>
            </h2>

            <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: "rgba(240,240,245,0.72)" }}>
              CRF Enterprise is a mission-driven development team delivering secure,
              innovative software solutions for government agencies and enterprise
              clients. We understand the complexity of mission-critical operations
              and build systems that can be trusted.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-10" style={{ color: "rgba(240,240,245,0.6)" }}>
              With deep expertise in federal procurement, compliance frameworks,
              and enterprise infrastructure, we accelerate your path to modern,
              secure, and scalable technology.
            </p>

            {/* Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle
                    size={16}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "var(--accent)" }}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium" style={{ color: "rgba(240,240,245,0.75)" }}>
                    {value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Metrics row */}
            <div className="flex flex-wrap gap-5">
              {metrics.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 glass-card px-4 py-3"
                  style={{ borderRadius: "0.75rem" }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center rounded-lg"
                    style={{ background: "rgba(0,200,240,0.1)" }}
                  >
                    <Icon size={16} style={{ color: "var(--accent)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}>
                      {value}
                    </div>
                    <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                height: "clamp(320px, 45vw, 480px)",
              }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663588331226/9rwrd5b3JWkLz6fuZoAJon/crf-about-1-L4iRsUysD3GLpXjgM8p97e.webp"
                alt="CRF Enterprise infrastructure and operations team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(5,5,8,0.6) 0%, transparent 50%)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Floating cert badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-5 -left-5 glass-card px-4 py-3 flex items-center gap-3"
              style={{ borderRadius: "0.875rem" }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0"
                style={{ background: "rgba(212,175,55,0.12)", border: "1px solid rgba(212,175,55,0.2)" }}
              >
                <Award size={18} style={{ color: "#d4af37" }} aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-bold" style={{ fontFamily: "'Sora', sans-serif", color: "#d4af37" }}>CAGE: 107F5</div>
                <div className="text-xs" style={{ color: "rgba(212,175,55,0.6)" }}>SAM Registered</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
