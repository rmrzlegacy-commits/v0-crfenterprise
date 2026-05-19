import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Compliance() {
  const frameworks = [
    {
      title: "FedRAMP",
      description: "Federal Risk and Authorization Management Program authorization for cloud services.",
      status: "Authorized",
    },
    {
      title: "FISMA",
      description: "Federal Information Security Management Act compliance for federal information systems.",
      status: "Compliant",
    },
    {
      title: "NIST 800-171",
      description: "NIST Special Publication 800-171 security requirements for controlled unclassified information.",
      status: "Compliant",
    },
    {
      title: "ISO 27001",
      description: "International standard for information security management systems.",
      status: "Certified",
    },
    {
      title: "SOC 2 Type II",
      description: "Service Organization Control audit for security, availability, processing integrity, confidentiality, and privacy.",
      status: "Compliant",
    },
    {
      title: "HIPAA",
      description: "Health Insurance Portability and Accountability Act compliance for healthcare data.",
      status: "Compliant",
    },
  ];

  const requirements = [
    "Data encryption in transit and at rest",
    "Multi-factor authentication for all users",
    "Role-based access control (RBAC)",
    "Comprehensive audit logging",
    "Regular security assessments",
    "Incident response procedures",
    "Business continuity and disaster recovery",
    "Employee security training",
    "Vendor security management",
    "Data retention and destruction policies",
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
              Compliance & <span className="text-accent">Regulations</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              CRF Enterprise maintains compliance with the most stringent government and industry regulations. We're committed to protecting your data and meeting all applicable requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-foreground mb-12">
            Compliance Frameworks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {frameworks.map((framework, index) => (
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
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {framework.title}
                  </h3>
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                    {framework.status}
                  </span>
                </div>
                <p className="text-foreground/70">{framework.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Requirements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-foreground mb-12">
            Security Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex gap-4"
              >
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <p className="text-foreground/80">{requirement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-foreground mb-6">
            Data Protection
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            We implement comprehensive data protection measures to safeguard your information. All data is encrypted using industry-standard encryption algorithms, and access is restricted to authorized personnel only.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            We maintain detailed audit logs of all data access and modifications. Regular backups are performed and stored in geographically diverse locations to ensure business continuity.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Data retention policies are strictly enforced, and data is securely destroyed when no longer needed in accordance with regulatory requirements.
          </p>
        </div>
      </section>

      {/* Audit & Assessment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-foreground mb-6">
            Audit & Assessment
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            CRF Enterprise undergoes regular independent audits and assessments to verify compliance with applicable regulations and standards. We work with leading security firms to conduct annual penetration testing and security assessments.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Audit reports and compliance certifications are available upon request. We maintain transparency with our clients regarding our security posture and compliance status.
          </p>
        </div>
      </section>
    </div>
  );
}
