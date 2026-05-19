import { motion } from "framer-motion";

export default function TermsOfService() {
  const sections = [
    {
      title: "1. Agreement to Terms",
      content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
    },
    {
      title: "2. Use License",
      content: "Permission is granted to temporarily download one copy of the materials (information or software) on CRF Enterprise's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on the website; remove any copyright or other proprietary notations from the materials; transfer the materials to another person or \"mirror\" the materials on any other server.",
    },
    {
      title: "3. Disclaimer",
      content: "The materials on CRF Enterprise's website are provided on an 'as is' basis. CRF Enterprise makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
    },
    {
      title: "4. Limitations",
      content: "In no event shall CRF Enterprise or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CRF Enterprise's website, even if CRF Enterprise or an authorized representative has been notified orally or in writing of the possibility of such damage.",
    },
    {
      title: "5. Accuracy of Materials",
      content: "The materials appearing on CRF Enterprise's website could include technical, typographical, or photographic errors. CRF Enterprise does not warrant that any of the materials on its website are accurate, complete, or current. CRF Enterprise may make changes to the materials contained on its website at any time without notice.",
    },
    {
      title: "6. Links",
      content: "CRF Enterprise has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by CRF Enterprise of the site. Use of any such linked website is at the user's own risk.",
    },
    {
      title: "7. Modifications",
      content: "CRF Enterprise may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.",
    },
    {
      title: "8. Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of the State of Nevada, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.",
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
              Terms of <span className="text-accent">Service</span>
            </h1>
            <p className="text-foreground/80">
              Last updated: May 18, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
