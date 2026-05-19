import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function CertificationsHeader() {
  const certifications = [
    { label: "SAM Registered", active: true },
    { label: "Active", active: true },
    { label: "CAGE Code: 107F5", active: true },
    { label: "MWBE Certified", active: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-black via-black to-black border-b"
      style={{
        borderColor: "rgba(212, 175, 55, 0.3)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <CheckCircle
                size={16}
                className="flex-shrink-0"
                style={{
                  color: "#d4af37",
                  textShadow: "0 0 10px rgba(212, 175, 55, 0.6)",
                  filter: "drop-shadow(0 0 8px rgba(212, 175, 55, 0.5))",
                }}
              />
              <span
                className="text-xs md:text-sm font-semibold whitespace-nowrap"
                style={{
                  color: "#d4af37",
                  textShadow: "0 0 10px rgba(212, 175, 55, 0.8), 0 0 20px rgba(212, 175, 55, 0.4)",
                  letterSpacing: "0.5px",
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
