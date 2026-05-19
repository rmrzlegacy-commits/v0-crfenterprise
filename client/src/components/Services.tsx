import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Cloud,
  Lock,
  TrendingUp,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Enterprise Technology Solutions",
    description:
      "Secure, scalable platforms engineered for mission-critical operations and government compliance.",
  },
  {
    icon: Cloud,
    title: "Infrastructure Development",
    description:
      "Modern cloud-native architecture designed for reliability, performance, and enterprise-grade security.",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description:
      "Modernize legacy systems with intelligent, future-proof solutions that drive operational efficiency.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Consulting",
    description:
      "Expert guidance on technology strategy, infrastructure optimization, and digital roadmaps.",
  },
  {
    icon: Lock,
    title: "Government Contracting Support",
    description:
      "Navigate federal procurement, compliance frameworks, and security requirements with confidence.",
  },
  {
    icon: Layers,
    title: "Data & Systems Integration",
    description:
      "Seamless integration of complex systems, APIs, and data pipelines for unified operations.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            Our <span className="text-accent">Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto px-2">
            Comprehensive services designed to accelerate your digital
            transformation and ensure mission success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group p-6 rounded-xl transition-all duration-300 cursor-pointer"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(0, 153, 255, 0.3)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 153, 255, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div className="mb-4 inline-block p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Icon className="text-accent" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-display text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* CTA Arrow */}
                <div className="flex items-center text-accent text-sm font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More →
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
