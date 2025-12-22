import { useState } from "react";
import { ChevronUp } from "lucide-react";

interface SidebarProps {
  activeSection: string;
}

const Sidebar = ({ activeSection }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { id: "quien-soy", label: "¿QUIÉN SOY?" },
        { id: "votar", label: "CÓMO VOTAR" },

    { id: "trayectoria", label: "TRAYECTORIA" },
    { id: "contacto", label: "CONTACTO" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <aside className="absolute left-4 sm:left-8 md:left-28 top-36 z-30">
      {/* Sidebar */}
      <nav
        className={`
          transition-all duration-300 ease-in-out
          origin-top
          ${isOpen
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-0 opacity-0 pointer-events-none"}
        `}
      >
        <div className="w-36 sm:w-40 md:w-48 flex flex-col gap-2 sm:gap-3 p-2 pt-48">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                w-full text-left font-semibold transition-all duration-300
                bg-primary hover:bg-primary/90 text-primary-foreground shadow-md
                ${
                  activeSection === item.id
                    ? "shadow-glow scale-105 border-2 border-primary-foreground/50"
                    : "border border-primary-foreground/30"
                }
                py-2.5 px-3 sm:py-3 sm:px-4 md:py-4 md:px-4
                rounded-lg
                text-xs sm:text-sm md:text-base
                tracking-tight sm:tracking-normal md:tracking-widest
                overflow-hidden text-ellipsis whitespace-nowrap
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          absolute top-32 left-0 z-40
          flex items-center justify-center
          w-9 h-8 sm:w-10 sm:h-9 md:w-12 md:h-10 rounded-md
          bg-primary hover:bg-primary/90
          border-2 border-primary-foreground/30
          transition-transform duration-300
          ${isOpen ? "rotate-0" : "rotate-180"}
        `}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-foreground" />
      </button>
    </aside>
  );
};

export default Sidebar;