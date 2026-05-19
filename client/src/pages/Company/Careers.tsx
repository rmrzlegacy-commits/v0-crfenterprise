import { motion } from "framer-motion";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";

export default function Careers() {
  const openings = [
    {
      title: "Senior Software Engineer",
      location: "Las Vegas, NV",
      type: "Full-time",
      description: "Lead development of mission-critical government systems. 5+ years experience required.",
    },
    {
      title: "Cloud Architect",
      location: "Las Vegas, NV",
      type: "Full-time",
      description: "Design and implement cloud infrastructure for enterprise clients. AWS/Azure expertise required.",
    },
    {
      title: "Security Engineer",
      location: "Las Vegas, NV",
      type: "Full-time",
      description: "Build secure systems and conduct security assessments. CISSP or equivalent certification preferred.",
    },
    {
      title: "DevOps Engineer",
      location: "Las Vegas, NV",
      type: "Full-time",
      description: "Manage infrastructure and deployment pipelines. Kubernetes and CI/CD experience required.",
    },
  ];

  const benefits = [
    "Competitive salary and equity",
    "Comprehensive health insurance",
    "401(k) matching",
    "Professional development budget",
    "Flexible work arrangements",
    "Remote work options",
    "Collaborative team environment",
    "Mission-driven work",
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
              Join Our <span className="text-accent">Team</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              We're hiring talented engineers and consultants to help us build the future of government technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-foreground mb-12">
            Why Join CRF Enterprise?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex items-start gap-3"
              >
                <div className="text-accent mt-1">✓</div>
                <p className="text-foreground/80 text-sm">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-foreground mb-12">
            Open Positions
          </h2>
          <div className="space-y-6">
            {openings.map((job, index) => (
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
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-4 text-foreground/60 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase size={16} />
                        {job.type}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-foreground/70 mb-4">{job.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  Apply Now <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-foreground mb-6">
            Our Culture
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            At CRF Enterprise, we believe that great technology comes from great teams. We foster a culture of collaboration, continuous learning, and mission focus. Our team members are empowered to take ownership of their work and make meaningful contributions to projects that matter.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            We're committed to diversity, equity, and inclusion. We actively seek team members from underrepresented backgrounds and create an environment where everyone can thrive.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-display text-foreground mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            We're always looking for talented people. Send us your resume and let's talk about how you can contribute.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all"
          >
            Send Your Resume <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
