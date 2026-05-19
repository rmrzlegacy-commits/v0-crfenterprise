import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function Infrastructure() {
  const features = [
    "Cloud infrastructure design and deployment",
    "Kubernetes orchestration and container management",
    "Zero-trust security architecture",
    "Disaster recovery and business continuity",
    "Infrastructure as Code (IaC) automation",
    "Multi-region and hybrid cloud solutions",
  ];

  const services = [
    {
      title: "Cloud Architecture",
      description: "Design scalable, secure cloud infrastructure optimized for government compliance",
    },
    {
      title: "DevOps & Automation",
      description: "Streamline deployment pipelines and infrastructure management",
    },
    {
      title: "Network Security",
      description: "Enterprise-grade network design with advanced threat protection",
    },
    {
      title: "Monitoring & Observability",
      description: "Real-time system monitoring and performance analytics",
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
              Modern <span className="text-accent">Infrastructure</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Secure, scalable infrastructure built for mission-critical operations. From cloud architecture to zero-trust security, we design systems that never fail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-foreground mb-12">
            Infrastructure Expertise
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

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-foreground mb-12">
            Infrastructure Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
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
                  {service.title}
                </h3>
                <p className="text-foreground/70 group-hover:text-foreground/80 transition-colors duration-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-display text-foreground mb-6">
            Build Infrastructure That Scales
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Let's architect the infrastructure your mission demands.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </div>
      </section>
    </div>
  );
}
