import { Facebook, Instagram, Twitter } from "lucide-react";
import Sidebar from "./Sidebar";
import heroImage from "@/assets/chat.png";
import icono from "@/assets/icono.png";

interface HeroSectionProps {
  activeSection: string;
}

const HeroSection = ({ activeSection }: HeroSectionProps) => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Sidebar dentro del Hero */}
      {/* <Sidebar activeSection={activeSection} /> */}

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-campaign-dark via-transparent to-campaign-dark/30" />

      {/* Header */}
      <div className="absolute top-0 left-8 right-0 z-20 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8">
        {/* Logo */}
        <div className="flex items-center gap-4 sm:gap-6 ml-14 order-2 sm:order-1 mt-4 sm:mt-0">
          {/* Imagen del icono en lugar del número 502 */}
          <div className="relative">
           <img
  src={icono}
  alt="Icono"
  className="
    w-16 h-16 sm:w-20 sm:h-20 md:w-24 lg:w-28
    drop-shadow-md
    object-contain
    transform scale-110
  "
/>

          </div>
          
          <div className="flex flex-col">
            {/* Nombre más protagonista */}
            <span className="text-gradient font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl leading-tight">
              BLANCA NUBIA CUNACUE
            </span>

            {/* Profesión un poco más pequeña */}
            <span className="text-primary-foreground/80 text-sm sm:text-sm md:text-base uppercase tracking-widest mt-1 font-semibold">
              Ingeniera Agroecóloga
            </span>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4 order-1 sm:order-2">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="
                w-12 h-12
                rounded-full
                flex items-center justify-center
                bg-white/15
                border border-white/30
                backdrop-blur-sm
              "
            >
              <Icon className="w-7 h-7 text-primary" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;