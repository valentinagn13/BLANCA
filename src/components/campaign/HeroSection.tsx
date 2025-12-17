import { Facebook } from "lucide-react";
import heroImage from "@/assets/chat.png";
import targeton from "@/assets/targeton.png";

interface HeroSectionProps {
  activeSection: string;
}

const HeroSection = ({ activeSection }: HeroSectionProps) => {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-campaign-dark via-transparent to-campaign-dark/30" />

      {/* Header */}
      <div
        className="
          absolute top-6 left-6 right-6 z-20
          flex flex-col
          gap-6
          md:flex-row md:items-center md:justify-between
        "
      >
        {/* Logo + Nombre */}
        <div className="ml-0 md:ml-16 flex flex-col items-center md:items-start">
          {/* Imagen + Nombre */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <img
              src={targeton}
              alt="targeton"
              className="
                w-24 h-24
                sm:w-28 sm:h-28
                md:w-32 md:h-32
                lg:w-36 lg:h-36
                object-contain
                drop-shadow-lg
              "
            />

            <span
  className="
    text-gradient font-bold
    text-2xl sm:text-3xl
    md:text-3xl lg:text-5xl
    leading-tight
    text-center sm:text-left
    break-words
    max-w-[90%] sm:max-w-none
    md:max-w-[520px] lg:max-w-none
  "
>
  BLANCA NUBIA CUNACUE
</span>

          </div>

          {/* Título */}
          <span className="
            mt-3
            text-primary-foreground/80
            text-sm sm:text-base md:text-lg
            uppercase tracking-widest font-semibold
            text-center sm:text-left
          ">
            Ingeniera Agroecóloga
          </span>
        </div>

        {/* Facebook */}
        <div className="flex justify-center md:justify-end">
        {/* Facebook */}
<a
  href="https://www.facebook.com/MerkproyectosJAB/?locale=es_LA"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Facebook"
  className="
    absolute
    top-4 right-4
    sm:top-6 sm:right-6
    md:top-8 md:right-8
    z-30

    w-12 h-12
    sm:w-14 sm:h-14
    rounded-full
    flex items-center justify-center
    bg-white/15
    border border-white/30
    backdrop-blur-sm
    hover:bg-white/25
    transition
  "
>
  <Facebook className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
</a>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
