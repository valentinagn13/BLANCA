import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Header = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-campaign-dark/95 backdrop-blur-sm border-b border-primary/20">
      <div className="flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
        {/* Logo and Name */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="flex items-center justify-center bg-gradient-primary rounded-lg px-3 py-1.5 md:px-4 md:py-2 shadow-glow">
            <span className="text-primary-foreground font-extrabold text-xl md:text-2xl tracking-tight">
              502
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-primary-foreground font-bold text-lg md:text-xl tracking-wide">
              BLANCA NUBIA
            </span>
            <span className="text-primary/80 text-xs md:text-sm font-medium uppercase tracking-widest">
              Cámara de Representantes
            </span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-2 md:gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 hover:bg-primary hover:shadow-glow flex items-center justify-center transition-all duration-300 group"
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
