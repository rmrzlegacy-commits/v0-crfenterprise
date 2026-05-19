import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 px-4 sm:px-6 lg:px-8"
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-display text-accent mb-2">
              CRF
            </h3>
            <p className="text-foreground/60 text-sm">
              Building modern infrastructure solutions for enterprise and
              government.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="/services/enterprise-technology" className="hover:text-accent transition-colors">
                  Enterprise Technology
                </a>
              </li>
              <li>
                <a href="/services/infrastructure" className="hover:text-accent transition-colors">
                  Infrastructure
                </a>
              </li>
              <li>
                <a href="/services/digital-transformation" className="hover:text-accent transition-colors">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="/services/consulting" className="hover:text-accent transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="/company/about" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/company/careers" className="hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/company/blog" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/company/press" className="hover:text-accent transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="/legal/privacy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/legal/terms" className="hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/legal/security" className="hover:text-accent transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="/legal/compliance" className="hover:text-accent transition-colors">
                  Compliance
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-accent/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm">
              © {currentYear} CRF Enterprise. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-foreground/60 hover:text-accent transition-colors text-sm"
              >
                
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-accent transition-colors text-sm"
              >
                
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-accent transition-colors text-sm"
              >
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
