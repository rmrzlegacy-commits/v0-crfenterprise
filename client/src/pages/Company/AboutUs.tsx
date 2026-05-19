import { motion } from "framer-motion";
import { Users, Target, Zap } from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering solutions that strengthen government capabilities and protect national interests.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We leverage cutting-edge technology to solve complex challenges and deliver competitive advantage.",
    },
    {
      icon: Users,
      title: "Team Excellence",
      description: "Our team of experts brings decades of government and enterprise experience to every project.",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "99.9%", label: "System Uptime" },
    { number: "50+", label: "Government Clients" },
    { number: "24/7", label: "Support Available" },
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6">
              About <span className="text-accent">CRF Enterprise</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              We're a mission-driven development team dedicated to delivering secure, innovative software solutions for government agencies and enterprise organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-8">
            CRF Enterprise exists to empower government agencies with modern, secure technology solutions that enable them to serve citizens more effectively. We believe that government technology should be world-class—secure, scalable, and built to last.
          </p>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            Every project we undertake is guided by a commitment to excellence, security, and mission success. We don't just build software; we build trust.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
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
                  <Icon className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300" size={28} />
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/70 group-hover:text-foreground/80 transition-colors duration-300">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-12 text-center">
            By The Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center cursor-pointer group"
              >
                <div className="text-2xl sm:text-4xl font-bold text-accent mb-2 group-hover:text-accent/80 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-6">
            Our Team
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-8">
            Our team consists of experienced software engineers, architects, and consultants with deep expertise in government technology, security, and enterprise systems. We've worked with agencies across the federal government and understand the unique challenges of public sector technology.
          </p>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            We're committed to continuous learning and staying at the forefront of technology innovation. Our team members are active contributors to open-source projects and thought leaders in their respective fields.
          </p>
        </div>
      </section>
    </div>
  );
}
