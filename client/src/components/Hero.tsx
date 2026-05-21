import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, Zap, Globe } from "lucide-react";
import { Link } from "wouter";

const stats = [
  { value: "100%", label: "SAM Registered" },
  { value: "CAGE", label: "Code: 107F5" },
  { value: "MWBE", label: "Certified" },
  { value: "FY26", label: "Active" },
];

const trustBadges = [
  { icon: Shield, label: "Security-First" },
  { icon: Zap, label: "Mission-Critical" },
  { icon: Globe, label: "Federal Ready" },
];

// Simple animated dot grid for cinematic background
function GridBackground() {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 40%, rgba(0,200,240,0.06) 0%, transparent 50%),
          radial-gradient(circle at 80% 60%, rgba(0,144,200,0.04) 0%, transparent 50%),
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 100% 100%, 60px 60px, 60px 60px",
      }}
    />
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 80]);
  const contentY = useTransform(scrollY, [0, 600], [0, -40]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollDown = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background layers */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        {/* Hero background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/hero-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(5,5,8,0.65) 0%, rgba(5,5,8,0.5) 50%, rgba(5,5,8,0.85) 100%)",
          }}
        />
      </motion.div>

      {/* Grid + glow overlay */}
      <GridBackground />

      {/* Subtle scan line */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        aria-hidden="true"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,200,240,0.02) 50%, transparent 100%)",
        }}
      />

      {/* Main content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col items-center text-center"
      >
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <span className="badge-accent mb-8 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Government &amp; Enterprise Technology
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance mb-6"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          <span className="block text-white font-black" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: "1.08", letterSpacing: "-0.03em" }}>
            Build Tomorrow.
          </span>
          <span
            className="block font-black"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              lineHeight: "1.08",
              letterSpacing: "-0.03em",
              background: "linear-gradient(135deg, #00c8f0 0%, #0090c8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Serve Today.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="text-pretty max-w-2xl text-lg md:text-xl leading-relaxed mb-10"
          style={{ color: "rgba(240,240,245,0.72)" }}
        >
          CRF Enterprise delivers secure, scalable software and infrastructure
          solutions engineered for the demands of government agencies and
          enterprise clients.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.48, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-16"
        >
          <button
            onClick={scrollToContact}
            className="btn-primary px-7 py-3.5 text-base"
          >
            Start a Project
            <ArrowRight size={18} />
          </button>
          <button
            onClick={scrollToServices}
            className="btn-secondary px-7 py-3.5 text-base"
          >
            Explore Services
          </button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-6"
          aria-label="Trust indicators"
        >
          {trustBadges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={15} className="text-accent/70" />
              <span className="text-sm font-medium" style={{ color: "rgba(240,240,245,0.5)" }}>
                {label}
              </span>
            </div>
          ))}
          <div className="hidden sm:block w-px h-4 bg-white/10" />
          <span className="text-sm" style={{ color: "rgba(240,240,245,0.4)" }}>Las Vegas, NV</span>
        </motion.div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="relative z-10 w-full"
        style={{
          background: "rgba(5,5,8,0.75)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center"
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                <span
                  className="text-lg font-black mb-0.5"
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    background: "linear-gradient(135deg, #00c8f0, #0090c8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-foreground/30 hover:text-accent transition-colors"
        aria-label="Scroll down"
        style={{ display: "none" }}
      >
        <span className="text-xs font-medium tracking-widest uppercase" style={{ fontSize: "0.625rem" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
