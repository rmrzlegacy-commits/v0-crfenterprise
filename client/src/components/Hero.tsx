import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-16 px-4 md:px-0"
    >
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 z-[1] bg-black/50" />

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6 md:gap-8"
      >
        {/* Accent Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium text-accent">
            Enterprise Solutions
          </span>
        </motion.div>

        {/* Main Heading - Bold and Impactful */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white text-balance leading-[1.1] tracking-tight">
            Build Tomorrow
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-accent text-balance leading-[1.1] tracking-tight">
            Serve Today
          </h2>
        </motion.div>

        {/* Subheading - Clear and Concise */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl text-balance leading-relaxed font-light"
        >
          CRF Enterprise is a mission-driven development team that delivers
          secure, innovative software solutions for government agencies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 md:mt-6"
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 217, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="px-8 md:px-10 py-3 md:py-4 bg-accent hover:bg-accent/90 text-black font-bold rounded-lg transition-all duration-300 flex items-center gap-2 text-base md:text-lg"
          >
            Contact Now
            <ArrowRight size={20} />
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(0, 217, 255, 0.15)",
              borderColor: "rgba(0, 217, 255, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 md:px-10 py-3 md:py-4 border-2 border-accent/40 hover:border-accent/80 text-white font-bold rounded-lg transition-all duration-300 text-base md:text-lg"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown className="text-accent drop-shadow-lg hidden sm:block" size={32} />
        <ChevronDown className="text-accent drop-shadow-lg sm:hidden" size={24} />
      </motion.div>

      {/* Animated accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent z-10 origin-center"
      />
    </section>
  );
}
