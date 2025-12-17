import { useState } from "react";
import { ChevronUp } from "lucide-react";

interface SidebarProps {
  activeSection: string;
}

const Sidebar = ({ activeSection }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { id: "quien-soy", label: "¿QUIÉN SOY?" },
       { id: "trayectoria", label: "TRAYECTORIA" },
    // { id: "propuestas", label: "PROPUESTAS" },
 
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
    <aside className="absolute left-28 top-24 z-30">
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
        <div className="w-48 flex flex-col gap-3 p-2 pt-48">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                text-left font-semibold tracking-widest
                transition-all duration-300
                bg-primary hover:bg-primary/90
                text-primary-foreground shadow-md
                ${
                  activeSection === item.id
                    ? "shadow-glow scale-105 border-2 border-primary-foreground/50"
                    : "border border-primary-foreground/30"
                }
                py-4 px-6
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
          w-12 h-10 rounded-md
          bg-primary hover:bg-primary/90
          border-2 border-primary-foreground/30
          transition-transform duration-300
          ${isOpen ? "rotate-0" : "rotate-180"}
        `}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <ChevronUp className="w-6 h-6 text-primary-foreground" />
      </button>
    </aside>
  );
};

export default Sidebar;
