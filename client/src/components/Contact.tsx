import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle, Download, FileText } from "lucide-react";
import ContactFormWizard from "./ContactFormWizard";

const contactInfo = [
  { icon: Mail, label: "Email", value: "admin@crfenterprise.com", href: "mailto:admin@crfenterprise.com" },
  { icon: Phone, label: "Phone", value: "(702) 356-3226", href: "tel:+17023563226" },
  { icon: MapPin, label: "Location", value: "Las Vegas, NV 89101", href: undefined },
];

const credentials = [
  "SAM Registered — Active FY26",
  "CAGE Code: 107F5",
  "MWBE Certified",
  "NAICS: 541511, 541512, 541519",
  "NAICS: 541611, 236220, 237310",
  "Reps & Certs available on request",
];

const ctaLinks = [
  {
    icon: Download,
    label: "Download Capability Statement",
    sublabel: "PDF · 1 page · Updated FY26",
    href: "/api/capability-statement",
    accent: true,
  },
  {
    icon: FileText,
    label: "View NAICS & Contract Vehicles",
    sublabel: "Procurement reference sheet",
    href: "/services/enterprise-technology",
    accent: false,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-5 sm:px-8 lg:px-12"
      aria-labelledby="contact-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0,200,240,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="section-divider" />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
              Contact
            </span>
          </div>
          <h2 id="contact-heading" className="text-balance mb-4 max-w-xl" style={{ fontFamily: "'Sora', sans-serif" }}>
            Start a Conversation{" "}
            <span style={{
              background: "linear-gradient(135deg, #00c8f0, #0090c8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              With Our Team
            </span>
          </h2>
          <p className="text-lg max-w-lg" style={{ color: "var(--muted-foreground)" }}>
            Whether you are a contracting officer, agency buyer, enterprise client, or teaming partner —
            tell us about your need and we will respond within one business day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Contact info */}
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass-card p-4 flex items-center gap-4">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ background: "rgba(0,200,240,0.1)", border: "1px solid rgba(0,200,240,0.15)" }}
                >
                  <Icon size={16} style={{ color: "var(--accent)" }} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "var(--muted-foreground)", fontFamily: "'Sora', sans-serif" }}>{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-medium transition-colors hover:text-accent" style={{ color: "var(--foreground)" }}>{value}</a>
                  ) : (
                    <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Credentials */}
            <div className="glass-card p-4" style={{ borderColor: "rgba(212,175,55,0.15)" }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#d4af37", fontFamily: "'Sora', sans-serif" }}>
                Verified Credentials
              </p>
              <ul className="space-y-2" aria-label="CRF Enterprise credentials">
                {credentials.map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs" style={{ color: "rgba(240,240,245,0.65)" }}>
                    <CheckCircle size={12} style={{ color: "#d4af37", flexShrink: 0 }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resource CTAs */}
            {ctaLinks.map(({ icon: Icon, label, sublabel, href, accent }) => (
              <a
                key={label}
                href={href}
                className="glass-card p-4 flex items-center gap-4 group transition-all"
                style={{
                  borderColor: accent ? "rgba(0,200,240,0.2)" : undefined,
                  textDecoration: "none",
                }}
                aria-label={label}
              >
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{
                    background: accent ? "rgba(0,200,240,0.1)" : "rgba(255,255,255,0.05)",
                    border: `1px solid ${accent ? "rgba(0,200,240,0.2)" : "rgba(255,255,255,0.1)"}`,
                  }}
                >
                  <Icon size={16} style={{ color: accent ? "var(--accent)" : "rgba(240,240,245,0.5)" }} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold group-hover:text-accent transition-colors" style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}>{label}</p>
                  <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{sublabel}</p>
                </div>
              </a>
            ))}
          </motion.aside>

          {/* Right: wizard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-6 sm:p-8">
              <ContactFormWizard />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
