import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const values = [
  "Security-first architecture",
  "Government compliance ready",
  "Enterprise-grade reliability",
  "Innovation-driven development",
  "24/7 mission support",
  "Transparent partnerships",
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
              Built for <span className="text-accent">Mission Success</span>
            </h2>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              CRF Enterprise is a mission-driven development team delivering
              secure, innovative software solutions for government agencies and
              enterprise clients. We understand the complexity of mission-critical
              operations and build systems that can be trusted.
            </p>

            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              With deep expertise in federal procurement, compliance frameworks,
              and enterprise infrastructure, we accelerate your path to modern,
              secure, and scalable technology.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground/80">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-xl overflow-hidden"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663588331226/9rwrd5b3JWkLz6fuZoAJon/crf-about-1-L4iRsUysD3GLpXjgM8p97e.webp"
              alt="Infrastructure"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
