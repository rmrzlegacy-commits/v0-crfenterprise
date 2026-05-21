import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, CheckCircle, ArrowRight, Loader2 } from "lucide-react";

export default function LeadMagnetModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const modalShown = sessionStorage.getItem("leadMagnetShown");
    if (modalShown) { setHasShown(true); return; }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !isOpen) {
        setIsOpen(true);
        sessionStorage.setItem("leadMagnetShown", "true");
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter Subscriber",
          company: "N/A",
          email,
          phone: "",
          projectType: "Newsletter",
          message: "Newsletter subscription request from exit-intent modal.",
        }),
      });
    } catch {
      // Silent fail — still show success
    }

    setLoading(false);
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50"
            style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(4px)" }}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-5"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-modal-title"
          >
            <div
              className="relative w-full max-w-md rounded-2xl p-7 sm:p-8"
              style={{
                background: "rgba(10,10,16,0.98)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 1px rgba(0,200,240,0.1)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg transition-colors hover:bg-white/5"
                style={{ color: "var(--muted-foreground)" }}
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {/* Icon */}
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-xl mb-5"
                      style={{ background: "rgba(0,200,240,0.1)", border: "1px solid rgba(0,200,240,0.2)" }}
                    >
                      <Mail size={22} style={{ color: "var(--accent)" }} />
                    </div>

                    <h2
                      id="lead-modal-title"
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      Government Procurement Insights
                    </h2>
                    <p className="text-sm mb-6" style={{ color: "var(--muted-foreground)", lineHeight: 1.7 }}>
                      Join contractors and agencies receiving monthly tips on winning
                      federal contracts, compliance updates, and procurement strategies.
                    </p>

                    <ul className="space-y-2 mb-7">
                      {[
                        "Monthly procurement insights",
                        "Compliance updates & best practices",
                        "No spam — unsubscribe anytime",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "rgba(240,240,245,0.75)" }}>
                          <CheckCircle size={14} style={{ color: "var(--accent)", flexShrink: 0 }} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="relative">
                        <Mail
                          size={16}
                          className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                          style={{ color: "var(--muted-foreground)" }}
                          aria-hidden="true"
                        />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          required
                          autoComplete="email"
                          className="field-input pl-10"
                          aria-label="Email address"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full justify-center"
                      >
                        {loading ? (
                          <><Loader2 size={16} className="animate-spin" aria-hidden="true" /> Subscribing...</>
                        ) : (
                          <>Subscribe Now <ArrowRight size={16} aria-hidden="true" /></>
                        )}
                      </button>
                    </form>

                    <p className="text-xs text-center mt-4" style={{ color: "var(--muted-foreground)" }}>
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-8 gap-4"
                    role="alert"
                    aria-live="polite"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                      className="w-16 h-16 flex items-center justify-center rounded-full"
                      style={{ background: "rgba(0,200,240,0.1)", border: "1px solid rgba(0,200,240,0.2)" }}
                    >
                      <CheckCircle size={32} style={{ color: "var(--accent)" }} />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                        Welcome to the List!
                      </h3>
                      <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                        You&apos;ll receive your first insights in the next newsletter.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
