import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function EnterpriseTechnology() {
  const features = [
    "Custom software development for mission-critical systems",
    "Cloud-native architecture and microservices",
    "API-first design for enterprise integration",
    "Real-time data processing and analytics",
    "Enterprise security and compliance frameworks",
    "Scalable infrastructure for high-availability systems",
  ];

  const capabilities = [
    {
      title: "Full-Stack Development",
      description: "End-to-end solutions from frontend to backend infrastructure",
    },
    {
      title: "Legacy System Modernization",
      description: "Transform aging systems into modern, maintainable platforms",
    },
    {
      title: "Enterprise Integration",
      description: "Seamless integration with existing government IT ecosystems",
    },
    {
      title: "Performance Optimization",
      description: "High-throughput systems handling millions of transactions",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-display text-foreground mb-6">
              Enterprise <span className="text-accent">Technology</span> Solutions
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Custom-built software systems designed for government and enterprise scale. We deliver secure, intelligent, and maintainable solutions that power mission-critical operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-foreground mb-12">
            What We Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                className="flex gap-4 group cursor-pointer"
              >
                <CheckCircle className="text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" size={24} />
                <p className="text-foreground/80 group-hover:text-accent transition-colors duration-300">{feature}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-foreground mb-12">
            Core Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 153, 255, 0.15)" }}
                className="p-6 rounded-xl cursor-pointer group transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {cap.title}
                </h3>
                <p className="text-foreground/70 group-hover:text-foreground/80 transition-colors duration-300">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-display text-foreground mb-6">
            Ready to Transform Your Technology?
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Let's discuss how enterprise technology can accelerate your mission.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </div>
      </section>
    </div>
  );
}
