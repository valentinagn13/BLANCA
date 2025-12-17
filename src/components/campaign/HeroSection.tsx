import { Facebook, Instagram, Twitter } from "lucide-react";
import Sidebar from "./Sidebar";
import heroImage from "@/assets/chat.png";
import icono from "@/assets/icono.png";

interface HeroSectionProps {
  activeSection: string;
}

const HeroSection = ({ activeSection }: HeroSectionProps) => {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/MerkproyectosJAB/?locale=es_LA",
      label: "Facebook",
    },
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
      <div className="absolute top-4 sm:top-6 md:top-8 left-8 right-0 z-20 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-8 pt-4 sm:pt-0">
        {/* Logo */}
        <div className="flex gap-4 sm:gap-6 ml-16 order-2 sm:order-1 mt-6 sm:mt-0">
          <div className="relative">
            <img
              src={icono}
              alt="Icono"
              className="
                w-20 h-20 sm:w-24 sm:h-24 md:w-28 lg:w-32
                drop-shadow-md
                object-contain
                transform scale-110
              "
            />
          </div>

          <div className="flex flex-col">
            <span className="text-gradient font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              BLANCA NUBIA CUNACUE
            </span>

            <span className="text-primary-foreground/80 text-base sm:text-lg md:text-xl uppercase tracking-widest mt-2 sm:mt-3 font-semibold">
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
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="
                w-14 h-14 sm:w-12 sm:h-12
                rounded-full
                flex items-center justify-center
                bg-white/15
                border border-white/30
                backdrop-blur-sm
                hover:bg-white/25
                transition
              "
            >
              <Icon className="w-8 h-8 sm:w-7 sm:h-7 text-primary" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;