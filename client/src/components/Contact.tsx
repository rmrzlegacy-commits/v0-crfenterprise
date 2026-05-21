import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, Loader2, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

const projectTypes = [
  "Enterprise Technology",
  "Infrastructure Development",
  "Digital Transformation",
  "Strategic Consulting",
  "Government Contracting",
  "Other",
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "admin@crfenterprise.com", href: "mailto:admin@crfenterprise.com" },
  { icon: Phone, label: "Phone", value: "(702) 356-3226", href: "tel:+17023563226" },
  { icon: MapPin, label: "Location", value: "Las Vegas, NV", href: undefined },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setLoading(false);
      setSubmitted(true);
      setFormData(initialForm);
    } catch (err) {
      setLoading(false);
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-5 sm:px-8 lg:px-12"
      aria-labelledby="contact-heading"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0,200,240,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="section-divider" />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
              Contact
            </span>
          </div>
          <h2
            id="contact-heading"
            className="text-balance mb-4 max-w-xl"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Ready to Build{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00c8f0, #0090c8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Something Great?
            </span>
          </h2>
          <p className="text-lg max-w-lg" style={{ color: "var(--muted-foreground)" }}>
            Our team responds within 24 hours. Tell us about your project and
            we&apos;ll get back to you with a tailored approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: contact info + trust */}
          <motion.aside
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="flex flex-col gap-5"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="glass-card p-5 flex items-center gap-4"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ background: "rgba(0,200,240,0.1)", border: "1px solid rgba(0,200,240,0.15)" }}
                >
                  <Icon size={18} style={{ color: "var(--accent)" }} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "var(--muted-foreground)", fontFamily: "'Sora', sans-serif" }}>
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-medium transition-colors hover:text-accent"
                      style={{ color: "var(--foreground)" }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Trust signal */}
            <div
              className="glass-card p-5 mt-2"
              style={{ borderColor: "rgba(212,175,55,0.15)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#d4af37", fontFamily: "'Sora', sans-serif" }}>
                Verified Credentials
              </p>
              <ul className="space-y-2">
                {["SAM Registered", "CAGE Code: 107F5", "MWBE Certified", "Active FY26"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "rgba(240,240,245,0.65)" }}>
                    <CheckCircle size={13} style={{ color: "#d4af37", flexShrink: 0 }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12 gap-5"
                    role="alert"
                    aria-live="polite"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.1 }}
                      className="w-16 h-16 flex items-center justify-center rounded-full"
                      style={{ background: "rgba(0,200,240,0.1)", border: "1px solid rgba(0,200,240,0.2)" }}
                    >
                      <CheckCircle size={32} style={{ color: "var(--accent)" }} />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                        Message Received
                      </h3>
                      <p style={{ color: "var(--muted-foreground)" }}>
                        Thank you for reaching out. Our team will be in touch within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary text-sm px-5 py-2.5 mt-2"
                      style={{ minHeight: "40px" }}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Contact form"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5" htmlFor="name" style={{ color: "rgba(240,240,245,0.8)", fontFamily: "'Sora', sans-serif" }}>
                          Full Name <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                          placeholder="John Smith"
                          className="field-input"
                          aria-required="true"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5" htmlFor="company" style={{ color: "rgba(240,240,245,0.8)", fontFamily: "'Sora', sans-serif" }}>
                          Company <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
                        </label>
                        <input
                          id="company"
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          autoComplete="organization"
                          placeholder="Agency or Company"
                          className="field-input"
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5" htmlFor="email" style={{ color: "rgba(240,240,245,0.8)", fontFamily: "'Sora', sans-serif" }}>
                          Email <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                          placeholder="you@agency.gov"
                          className="field-input"
                          aria-required="true"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5" htmlFor="phone" style={{ color: "rgba(240,240,245,0.8)", fontFamily: "'Sora', sans-serif" }}>
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          autoComplete="tel"
                          placeholder="+1 (202) 555-0100"
                          className="field-input"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1.5" htmlFor="projectType" style={{ color: "rgba(240,240,245,0.8)", fontFamily: "'Sora', sans-serif" }}>
                        Project Type <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="field-input"
                        aria-required="true"
                        style={{ appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237a7a90' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
                      >
                        <option value="" disabled>Select a project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type} style={{ background: "#0d0d12" }}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-1.5" htmlFor="message" style={{ color: "rgba(240,240,245,0.8)", fontFamily: "'Sora', sans-serif" }}>
                        Message <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Describe your project, goals, and timeline..."
                        className="field-input resize-none"
                        style={{ minHeight: "120px" }}
                        aria-required="true"
                      />
                    </div>

                    {/* Error state */}
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="flex items-center gap-2 mb-4 p-3 rounded-lg text-sm"
                          style={{ background: "rgba(255,59,59,0.08)", border: "1px solid rgba(255,59,59,0.2)", color: "#ff6b6b" }}
                          role="alert"
                          aria-live="assertive"
                        >
                          <AlertCircle size={15} aria-hidden="true" />
                          {error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center py-3.5"
                      aria-busy={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight size={18} aria-hidden="true" />
                        </>
                      )}
                    </button>

                    <p className="text-xs mt-4 text-center" style={{ color: "var(--muted-foreground)" }}>
                      We respect your privacy. Your information is never shared.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
