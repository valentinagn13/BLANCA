import { useState, useEffect } from "react";
import Sidebar from "@/components/campaign/Sidebar";
import HeroSection from "@/components/campaign/HeroSection";
import AboutSection from "@/components/campaign/AboutSection";
import ImageCarousel from "@/components/campaign/ImageCarousel";
import ProposalsSection from "@/components/campaign/ProposalsSection";
import Proposals from "@/components/campaign/Proposals";
import TrajectorySection from "@/components/campaign/TrajectorySection";
import ContactSection from "@/components/campaign/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "quien-soy", "propuestas", "trayectoria", "contacto"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeSection={activeSection} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ImageCarousel />
                <Proposals />

        <TrajectorySection />
          <ProposalsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
