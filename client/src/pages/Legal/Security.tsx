import { motion } from "framer-motion";
import { Shield, Lock, Eye, AlertCircle } from "lucide-react";

export default function Security() {
  const practices = [
    {
      icon: Lock,
      title: "Encryption",
      description: "All data in transit is encrypted using TLS 1.3. Data at rest is encrypted using AES-256.",
    },
    {
      icon: Shield,
      title: "Access Control",
      description: "Role-based access control (RBAC) and multi-factor authentication (MFA) for all systems.",
    },
    {
      icon: Eye,
      title: "Monitoring",
      description: "24/7 security monitoring and incident response capabilities.",
    },
    {
      icon: AlertCircle,
      title: "Vulnerability Management",
      description: "Regular security assessments, penetration testing, and vulnerability scanning.",
    },
  ];

  const certifications = [
    "FedRAMP Authorized",
    "ISO 27001 Certified",
    "SOC 2 Type II Compliant",
    "NIST 800-171 Compliant",
    "FISMA Compliant",
    "HIPAA Compliant",
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
              Security & <span className="text-accent">Trust</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Security is fundamental to everything we build. We implement industry-leading security practices and maintain the highest standards of data protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-foreground mb-12">
            Security Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practices.map((practice, index) => {
              const Icon = practice.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Icon className="text-accent mb-4" size={32} />
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {practice.title}
                  </h3>
                  <p className="text-foreground/70">{practice.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-foreground mb-12">
            Certifications & Compliance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="p-6 rounded-xl text-center"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <p className="text-foreground font-semibold">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-foreground mb-6">
            Incident Response
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            We maintain a comprehensive incident response program with 24/7 monitoring and rapid response capabilities. Our security team is trained to detect, investigate, and respond to security incidents within minutes.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            In the event of a security incident, we follow established protocols to contain the threat, investigate the root cause, and notify affected parties in accordance with applicable regulations.
          </p>
        </div>
      </section>

      {/* Vulnerability Disclosure */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-foreground mb-6">
            Vulnerability Disclosure
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            We take security vulnerabilities seriously. If you discover a security vulnerability in our systems, please report it responsibly to security@crfenterprise.com.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            We ask that you allow us reasonable time to investigate and remediate any reported vulnerabilities before public disclosure. We appreciate your responsible disclosure and will acknowledge your contribution.
          </p>
        </div>
      </section>
    </div>
  );
}
