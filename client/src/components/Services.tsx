import { motion } from "framer-motion";
import { Shield, Zap, Cloud, Lock, TrendingUp, Layers, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: Shield,
    title: "Enterprise Technology",
    description: "Secure, scalable platforms engineered for mission-critical operations and government compliance frameworks.",
    href: "/services/enterprise-technology",
    tag: "Security-first",
  },
  {
    icon: Cloud,
    title: "Infrastructure Development",
    description: "Cloud-native architecture designed for enterprise-grade reliability, performance, and zero-downtime operations.",
    href: "/services/infrastructure",
    tag: "Cloud-native",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Modernize legacy systems with intelligent, future-proof solutions that drive measurable operational efficiency.",
    href: "/services/digital-transformation",
    tag: "Modernization",
  },
  {
    icon: TrendingUp,
    title: "Strategic Consulting",
    description: "Expert guidance on technology strategy, infrastructure optimization, and long-term digital roadmaps.",
    href: "/services/consulting",
    tag: "Advisory",
  },
  {
    icon: Lock,
    title: "Government Contracting",
    description: "Navigate federal procurement, compliance frameworks, and security requirements with confidence and precision.",
    href: "/services/enterprise-technology",
    tag: "Federal",
  },
  {
    icon: Layers,
    title: "Systems Integration",
    description: "Seamless integration of complex systems, APIs, and data pipelines for unified, frictionless operations.",
    href: "/services/infrastructure",
    tag: "Integration",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 px-5 sm:px-8 lg:px-12"
      aria-labelledby="services-heading"
    >
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,200,240,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-16 md:mb-20"
        >
          <div className="section-header-row">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase block mb-3" style={{ color: "var(--accent)", fontFamily: "'Sora', sans-serif" }}>
                Our Solutions
              </span>
              <h2
                id="services-heading"
                className="text-balance"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Capabilities Built for{" "}
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
            </div>
            <p className="text-base max-w-xs shrink-0 self-end" style={{ color: "var(--muted-foreground)" }}>
              Federal-grade technology and infrastructure services for agencies and enterprise clients.
            </p>
          </div>
          <div className="hr-rule" aria-hidden="true" />
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={index}
                variants={cardVariants}
                className="group relative glass-card card-depth p-6 md:p-7 flex flex-col cursor-pointer"
                style={{ minHeight: "220px" }}
              >
                {index === 0 && (
                  <>
                    <div className="corner-mark corner-mark-tl" aria-hidden="true" />
                    <div className="corner-mark corner-mark-br" aria-hidden="true" />
                  </>
                )}
                {/* Tag */}
                <span
                  className="absolute top-5 right-5 text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(0,200,240,0.08)",
                    color: "rgba(0,200,240,0.7)",
                    border: "1px solid rgba(0,200,240,0.15)",
                    fontFamily: "'Sora', sans-serif",
                  }}
                >
                  {service.tag}
                </span>

                {/* Icon */}
                <div
                  className="mb-5 w-11 h-11 flex items-center justify-center rounded-xl"
                  style={{
                    background: "rgba(0,200,240,0.08)",
                    border: "1px solid rgba(0,200,240,0.15)",
                    transition: "background 0.2s, border-color 0.2s",
                  }}
                >
                  <Icon
                    size={22}
                    style={{ color: "var(--accent)" }}
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold mb-2 pr-12"
                  style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted-foreground)" }}>
                  {service.description}
                </p>

                {/* CTA */}
                <Link href={service.href}>
                  <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold transition-colors group-hover:text-accent cursor-pointer" style={{ color: "rgba(0,200,240,0.7)", fontFamily: "'Sora', sans-serif" }}>
                    Learn More
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>

                {/* Hover border accent */}
                <div
                  className="absolute inset-0 rounded-[var(--radius-lg)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: "inset 0 0 0 1px rgba(0,200,240,0.2)",
                  }}
                  aria-hidden="true"
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex justify-center"
        >
          <Link href="/company/about">
            <span className="btn-secondary text-sm cursor-pointer">
              Learn About Our Approach
              <ArrowRight size={15} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
