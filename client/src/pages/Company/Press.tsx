import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

export default function Press() {
  const releases = [
    {
      title: "CRF Enterprise Wins Major Government Contract",
      date: "May 12, 2026",
      excerpt: "Selected as prime contractor for multi-year infrastructure modernization initiative.",
    },
    {
      title: "New Security Framework Achieves FedRAMP Authorization",
      date: "May 1, 2026",
      excerpt: "CRF Enterprise's cloud platform receives FedRAMP authorization from the Joint Authorization Board.",
    },
    {
      title: "Expanding Team with 50 New Hires",
      date: "April 25, 2026",
      excerpt: "CRF Enterprise announces significant expansion to support growing government demand.",
    },
    {
      title: "Industry Recognition: Best Government Technology Provider",
      date: "April 10, 2026",
      excerpt: "Named finalist for prestigious government technology innovation award.",
    },
  ];

  const mediaKit = [
    {
      title: "Company Logo",
      format: "PNG, SVG",
      size: "2.4 MB",
    },
    {
      title: "Executive Headshots",
      format: "JPG",
      size: "15 MB",
    },
    {
      title: "Brand Guidelines",
      format: "PDF",
      size: "3.2 MB",
    },
    {
      title: "Product Screenshots",
      format: "PNG",
      size: "8.5 MB",
    },
  ];

  const contacts = [
    {
      name: "Sarah Johnson",
      title: "Director of Communications",
      email: "press@crfenterprise.com",
      phone: "(702) 356-3226",
    },
    {
      name: "Michael Chen",
      title: "Media Relations",
      email: "media@crfenterprise.com",
      phone: "(702) 356-3226",
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
              Press & <span className="text-accent">Media</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Latest news, press releases, and media resources from CRF Enterprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-foreground mb-12">
            Latest Press Releases
          </h2>
          <div className="space-y-6">
            {releases.map((release, index) => (
              <motion.article
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
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {release.title}
                    </h3>
                    <p className="text-foreground/60 text-sm">{release.date}</p>
                  </div>
                </div>
                <p className="text-foreground/80 mb-4">{release.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  Read Release <ExternalLink size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-foreground mb-12">
            Media Kit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaKit.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl flex items-center justify-between"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    {item.format} • {item.size}
                  </p>
                </div>
                <button className="p-2 hover:bg-accent/20 rounded-lg transition-colors">
                  <Download className="text-accent" size={24} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contacts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-foreground mb-12">
            Press Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contacts.map((contact, index) => (
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
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {contact.name}
                </h3>
                <p className="text-accent text-sm mb-4">{contact.title}</p>
                <div className="space-y-2 text-foreground/70 text-sm">
                  <p>
                    Email:{" "}
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-accent hover:text-accent/80"
                    >
                      {contact.email}
                    </a>
                  </p>
                  <p>Phone: {contact.phone}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
