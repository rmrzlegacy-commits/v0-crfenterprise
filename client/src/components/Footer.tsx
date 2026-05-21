import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const solutions = [
  { label: "Enterprise Technology", href: "/services/enterprise-technology" },
  { label: "Infrastructure", href: "/services/infrastructure" },
  { label: "Digital Transformation", href: "/services/digital-transformation" },
  { label: "Consulting", href: "/services/consulting" },
];

const company = [
  { label: "About Us", href: "/company/about" },
  { label: "Careers", href: "/company/careers" },
  { label: "Blog", href: "/company/blog" },
  { label: "Press", href: "/company/press" },
];

const procurement = [
  { label: "Procurement Guide", href: "/procurement/guide" },
  { label: "Capability Statement", href: "/api/capability-statement" },
  { label: "NAICS Codes", href: "/services/enterprise-technology" },
  { label: "Contact Contracting Team", href: "/#contact" },
];

const legal = [
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Security", href: "/legal/security" },
  { label: "Compliance", href: "/legal/compliance" },
];

const certs = ["SAM Registered", "CAGE Code: 107F5", "MWBE Certified", "Active FY26"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      role="contentinfo"
      style={{
        background: "rgba(5,5,8,1)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* CTA band */}
      <div
        className="py-14 px-5 sm:px-8 lg:px-12"
        style={{
          background: "linear-gradient(to bottom, rgba(0,200,240,0.04) 0%, transparent 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2
              className="text-2xl md:text-3xl font-bold mb-2 text-balance"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Ready to start your next{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00c8f0, #0090c8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                mission?
              </span>
            </h2>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              Get in touch today for a free consultation.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="btn-primary flex-shrink-0"
          >
            Start a Project
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Main footer grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10"
      >
        {/* Brand column */}
        <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
          <div className="mb-4">
            <span
              className="text-xl font-black tracking-tight"
              style={{
                fontFamily: "'Sora', sans-serif",
                background: "linear-gradient(135deg, #00c8f0, #0090c8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              CRF
            </span>
            <span
              className="text-xl font-semibold text-foreground/80 ml-1.5"
              style={{ fontFamily: "'Sora', sans-serif", letterSpacing: "0.06em" }}
            >
              ENTERPRISE
            </span>
          </div>

          <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted-foreground)" }}>
            Building secure, scalable infrastructure solutions for government
            agencies and enterprise clients.
          </p>

          {/* Contact details */}
          <ul className="space-y-2.5">
            <li>
              <a
                href="mailto:admin@crfenterprise.com"
                className="flex items-center gap-2 text-sm transition-colors hover:text-accent"
                style={{ color: "var(--muted-foreground)" }}
              >
                <Mail size={14} aria-hidden="true" />
                admin@crfenterprise.com
              </a>
            </li>
            <li>
              <a
                href="tel:+17023563226"
                className="flex items-center gap-2 text-sm transition-colors hover:text-accent"
                style={{ color: "var(--muted-foreground)" }}
              >
                <Phone size={14} aria-hidden="true" />
                (702) 356-3226
              </a>
            </li>
            <li>
              <span className="flex items-center gap-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                <MapPin size={14} aria-hidden="true" />
                Las Vegas, NV
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Solutions */}
        <motion.nav variants={itemVariants} aria-label="Solutions links">
          <h3 className="text-sm font-semibold mb-4" style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}>
            Solutions
          </h3>
          <ul className="space-y-2.5">
            {solutions.map(({ label, href }) => (
              <li key={href}>
                <Link href={href}>
                  <span className="text-sm transition-colors hover:text-accent cursor-pointer" style={{ color: "var(--muted-foreground)" }}>
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Company */}
        <motion.nav variants={itemVariants} aria-label="Company links">
          <h3 className="text-sm font-semibold mb-4" style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}>
            Company
          </h3>
          <ul className="space-y-2.5">
            {company.map(({ label, href }) => (
              <li key={href}>
                <Link href={href}>
                  <span className="text-sm transition-colors hover:text-accent cursor-pointer" style={{ color: "var(--muted-foreground)" }}>
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Procurement */}
        <motion.nav variants={itemVariants} aria-label="Procurement links">
          <h3 className="text-sm font-semibold mb-4" style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}>
            Procurement
          </h3>
          <ul className="space-y-2.5">
            {procurement.map(({ label, href }) => (
              <li key={href}>
                <Link href={href}>
                  <span className="text-sm transition-colors hover:text-accent cursor-pointer" style={{ color: "var(--muted-foreground)" }}>
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Legal + Certs */}
        <motion.div variants={itemVariants}>
          <nav aria-label="Legal links">
            <h3 className="text-sm font-semibold mb-4" style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}>
              Legal
            </h3>
            <ul className="space-y-2.5 mb-7">
              {legal.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href}>
                    <span className="text-sm transition-colors hover:text-accent cursor-pointer" style={{ color: "var(--muted-foreground)" }}>
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ fontFamily: "'Sora', sans-serif", color: "#d4af37" }}>
              Certifications
            </h3>
            <ul className="space-y-1.5">
              {certs.map((cert) => (
                <li key={cert} className="text-xs" style={{ color: "rgba(212,175,55,0.7)" }}>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <div
        className="px-5 sm:px-8 lg:px-12 py-5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
            &copy; {year} CRF Enterprise, LLC. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            SAM Registered &bull; CAGE: 107F5 &bull; MWBE Certified
          </p>
        </div>
      </div>
    </footer>
  );
}
