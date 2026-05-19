import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Mail } from "lucide-react";

export default function LeadMagnetModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if modal has been shown in this session
    const modalShown = sessionStorage.getItem("leadMagnetShown");
    if (modalShown) {
      setHasShown(true);
      return;
    }

    // Detect exit intent (mouse leaving viewport at top)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would send the email to your backend
      console.log("Lead captured:", email);
      setSubmitted(true);
      
      // Close modal after 2 seconds
      setTimeout(() => {
        setIsOpen(false);
        setSubmitted(false);
        setEmail("");
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0, 0, 0, 0.7)" }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-md w-full rounded-2xl p-8"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(20px)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-accent/20 rounded-lg transition-colors"
            >
              <X size={20} className="text-foreground/60" />
            </button>

            {!submitted ? (
              <>
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-accent/20 rounded-xl">
                    <Mail className="text-accent" size={32} />
                  </div>
                </div>

                {/* Heading */}
                <h2 className="text-2xl font-bold text-foreground mb-2 text-center font-display">
                  Get Monthly Government Procurement Tips
                </h2>

                {/* Subheading */}
                <p className="text-foreground/70 text-center mb-6">
                  Join government contractors and agencies receiving exclusive insider tips on winning federal contracts, compliance updates, and procurement strategies.
                </p>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  <div className="flex gap-3 items-start">
                    <div className="text-accent mt-1">✓</div>
                    <p className="text-foreground/80 text-sm">Monthly government procurement insights</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="text-accent mt-1">✓</div>
                    <p className="text-foreground/80 text-sm">Compliance updates and best practices</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="text-accent mt-1">✓</div>
                    <p className="text-foreground/80 text-sm">Unsubscribe anytime—no spam, just value</p>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-foreground/40" size={18} />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                        style={{
                          background: "rgba(255, 255, 255, 0.08)",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                        }}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all transform hover:scale-105 active:scale-95"
                  >
                    Subscribe Now
                  </button>
                </form>

                {/* Privacy Note */}
                <p className="text-xs text-foreground/50 text-center mt-4">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </>
            ) : (
              <>
                {/* Success State */}
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="mb-4 flex justify-center"
                  >
                    <div className="p-4 bg-accent/20 rounded-full">
                      <div className="text-accent text-4xl">✓</div>
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Welcome to the List!
                  </h3>
                  <p className="text-foreground/70">
                    Check your email for the first month's tips. You'll hear from us again next month.
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
