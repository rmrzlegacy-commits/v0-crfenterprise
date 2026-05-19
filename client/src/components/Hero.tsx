import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
      {/* Background Image - Crystal Clear, No Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown className="text-accent hidden sm:block" size={32} />
        <ChevronDown className="text-accent sm:hidden" size={24} />
      </motion.div>
    </section>
  );
}
