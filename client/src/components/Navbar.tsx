import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

interface SubItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  submenu?: SubItem[];
}

const navItems: NavItem[] = [
  {
    label: "Services",
    href: "#services",
    submenu: [
      { label: "Enterprise Technology", href: "/services/enterprise-technology", description: "Mission-critical platforms & systems" },
      { label: "Infrastructure", href: "/services/infrastructure", description: "Cloud-native architecture & reliability" },
      { label: "Digital Transformation", href: "/services/digital-transformation", description: "Modernize legacy systems intelligently" },
      { label: "Consulting", href: "/services/consulting", description: "Strategic technology guidance" },
    ],
  },
  {
    label: "Company",
    href: "#company",
    submenu: [
      { label: "About Us", href: "/company/about", description: "Our mission and team" },
      { label: "Careers", href: "/company/careers", description: "Join the team" },
      { label: "Blog", href: "/company/blog", description: "Insights and updates" },
      { label: "Press", href: "/company/press", description: "News and media" },
    ],
  },
  {
    label: "Legal",
    href: "#legal",
    submenu: [
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Security", href: "/legal/security" },
      { label: "Compliance", href: "/legal/compliance" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [location] = useLocation();

  // Scroll-aware background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setExpandedMobile(null);
  }, [location]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(5, 5, 8, 0.92)"
            : "rgba(5, 5, 8, 0.6)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid transparent",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.4)" : "none",
        }}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" aria-label="CRF Enterprise home">
              <span className="flex items-center gap-2 group">
                <span
                  className="text-xl font-black tracking-tight"
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    background: "linear-gradient(135deg, #00c8f0, #0090c8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  CRF
                </span>
                <span
                  className="text-xl font-semibold tracking-wider text-foreground/90 group-hover:text-foreground transition-colors"
                  style={{ fontFamily: "'Sora', sans-serif", letterSpacing: "0.08em" }}
                >
                  ENTERPRISE
                </span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {/* Home link */}
              <Link href="/">
                <span className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-white/5 cursor-pointer">
                  Home
                </span>
              </Link>

              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.submenu && handleDropdownEnter(item.label)}
                  onMouseLeave={() => item.submenu && handleDropdownLeave()}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup={!!item.submenu}
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200"
                        style={{ transform: activeDropdown === item.label ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    )}
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.submenu && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-64 rounded-xl overflow-hidden"
                        style={{
                          background: "rgba(10, 10, 16, 0.97)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 1px rgba(0,200,240,0.1)",
                          backdropFilter: "blur(20px)",
                        }}
                        role="menu"
                      >
                        <div className="p-2">
                          {item.submenu.map((sub) => (
                            <Link key={sub.href} href={sub.href}>
                              <span
                                className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
                                role="menuitem"
                              >
                                <span className="text-sm font-medium text-foreground/90 group-hover:text-accent transition-colors flex items-center gap-1">
                                  {sub.label}
                                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform" />
                                </span>
                                {sub.description && (
                                  <span className="text-xs text-muted-foreground mt-0.5">{sub.description}</span>
                                )}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-primary text-sm px-5 py-2.5"
                style={{ minHeight: "40px" }}
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-foreground/80 hover:text-foreground hover:bg-white/5 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.nav
              key="drawer"
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 34 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm flex flex-col"
              style={{
                background: "rgba(8, 8, 12, 0.98)",
                borderLeft: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(24px)",
              }}
              aria-label="Mobile navigation"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-16 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                <span
                  className="text-lg font-black tracking-tight"
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    background: "linear-gradient(135deg, #00c8f0, #0090c8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  CRF ENTERPRISE
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-foreground/60 hover:text-foreground hover:bg-white/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto py-4 px-4">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <span className="flex items-center px-3 py-3 rounded-lg text-foreground/80 hover:text-foreground hover:bg-white/5 transition-colors font-medium cursor-pointer">
                    Home
                  </span>
                </Link>

                {navItems.map((item) => (
                  <div key={item.label}>
                    <button
                      onClick={() => setExpandedMobile(expandedMobile === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-foreground/80 hover:text-foreground hover:bg-white/5 transition-colors font-medium"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className="transition-transform duration-200"
                        style={{ transform: expandedMobile === item.label ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </button>

                    <AnimatePresence>
                      {item.submenu && expandedMobile === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-1">
                            {item.submenu.map((sub) => (
                              <Link key={sub.href} href={sub.href} onClick={() => setIsOpen(false)}>
                                <span className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-foreground/60 hover:text-accent hover:bg-white/5 transition-colors cursor-pointer">
                                  <span className="w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
                                  {sub.label}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="p-5 border-t safe-bottom" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="btn-primary w-full justify-center"
                >
                  Get in Touch
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
