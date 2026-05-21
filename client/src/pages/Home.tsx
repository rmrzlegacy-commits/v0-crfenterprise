import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CapabilityStatement from "@/components/CapabilityStatement";
import CaseStudySection from "@/components/CaseStudySection";
import GovernmentCredibilityWall from "@/components/GovernmentCredibilityWall";
import EnterpriseROISection from "@/components/EnterpriseROISection";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Hero />
        <Services />
        <CapabilityStatement />
        <GovernmentCredibilityWall />
        <CaseStudySection />
        <EnterpriseROISection />
        <About />
        <Contact />
      </main>
    </div>
  );
}
