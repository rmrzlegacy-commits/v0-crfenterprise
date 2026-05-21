import { motion } from "framer-motion";

const certs = [
  { label: "SAM Registered" },
  { label: "CAGE Code: 107F5" },
  { label: "MWBE Certified" },
  { label: "Active FY26" },
];

export default function CertificationsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-16 left-0 right-0 z-40 py-1.5"
      style={{
        background: "rgba(5,5,8,0.8)",
        borderBottom: "1px solid rgba(212,175,55,0.12)",
        backdropFilter: "blur(12px)",
      }}
      role="complementary"
      aria-label="Government certifications"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-5 md:gap-8 overflow-x-auto scrollbar-none">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.label}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
              className="flex items-center gap-1.5 flex-shrink-0"
            >
              <span
                aria-hidden="true"
                style={{ color: "#d4af37", fontSize: "0.625rem" }}
              >
                &#9670;
              </span>
              <span
                className="text-xs font-semibold whitespace-nowrap tracking-wide"
                style={{
                  color: "#d4af37",
                  textShadow: "0 0 8px rgba(212,175,55,0.4)",
                  letterSpacing: "0.06em",
                }}
              >
                {cert.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
