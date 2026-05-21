import { motion } from "framer-motion";

const certs = [
  { label: "SAM Registered", href: "https://sam.gov", title: "Verify on SAM.gov" },
  { label: "CAGE Code: 107F5", href: "https://sam.gov", title: "DoD & Federal Identifier" },
  { label: "MWBE Certified", href: "/company/about", title: "Minority Women Business Enterprise" },
  { label: "Active FY2026", href: "/api/capability-statement", title: "Download Capability Statement PDF" },
];

export default function CertificationsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-16 left-0 right-0 z-40 py-1.5"
      style={{
        background: "rgba(5,5,8,0.85)",
        borderBottom: "1px solid rgba(212,175,55,0.14)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      role="complementary"
      aria-label="Government certifications and credentials"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div
          className="flex items-center justify-center gap-4 md:gap-8 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {certs.map((cert, i) => (
            <motion.a
              key={cert.label}
              href={cert.href}
              target={cert.href.startsWith("http") ? "_blank" : undefined}
              rel={cert.href.startsWith("http") ? "noopener noreferrer" : undefined}
              title={cert.title}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
              className="flex items-center gap-1.5 flex-shrink-0 hover:opacity-100 transition-opacity"
              style={{
                opacity: 0.85,
                textDecoration: "none",
              }}
            >
              <span
                aria-hidden="true"
                style={{ color: "#d4af37", fontSize: "0.5625rem", lineHeight: 1 }}
              >
                &#9670;
              </span>
              <span
                className="text-xs font-semibold whitespace-nowrap tracking-wide"
                style={{
                  color: "#d4af37",
                  textShadow: "0 0 8px rgba(212,175,55,0.35)",
                  letterSpacing: "0.06em",
                  fontFamily: "'Sora', sans-serif",
                }}
              >
                {cert.label}
              </span>
            </motion.a>
          ))}

          {/* Capability Statement shortcut — slightly separated */}
          <motion.a
            href="/api/capability-statement"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="hidden sm:flex items-center gap-1.5 flex-shrink-0 px-2.5 py-0.5 rounded-full transition-all hover:opacity-100"
            style={{
              opacity: 0.75,
              border: "1px solid rgba(212,175,55,0.25)",
              background: "rgba(212,175,55,0.06)",
              textDecoration: "none",
            }}
            title="Download one-page Capability Statement PDF"
            aria-label="Download Capability Statement PDF"
          >
            <span
              className="text-xs font-semibold whitespace-nowrap"
              style={{ color: "#d4af37", fontFamily: "'Sora', sans-serif", letterSpacing: "0.04em" }}
            >
              Capability Statement &#x2193;
            </span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
