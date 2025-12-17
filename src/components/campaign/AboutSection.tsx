import imagen1 from "@/assets/imagen1.jpeg";
import imagen2 from "@/assets/imagen2.jpeg";
import imagen3 from "@/assets/imagen3.jpeg";
import imagen4 from "@/assets/imagen4.jpeg";

const AboutSection = () => {
  const values = [
    { image: imagen1, title: "Compromiso" },
    { image: imagen2, title: "Cercanía" },
    { image: imagen3, title: "Innovación" },
    { image: imagen4, title: "Integridad" },
  ];

  return (
    <section id="quien-soy" className="py-20 md:py-8 bg-background">
       <span className="inline-block ml-12 px-4 py-1.5 border border-primary/30 text-primary font-medium text-sm uppercase tracking-widest rounded-full mb-6">
                  ¿Quién Soy?
                </span>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Diseño de dos columnas */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Texto */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
               
                <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
                  BLANCA NUBIA CUNACUE NOREÑA
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                 Soy Blanca Nubia Cunacue Noreña, una Ingeniera Agroecóloga con una Maestría en Agroforestería de la Universidad de la Amazonía.
                  Mi enfoque profesional se centra en la formulación, estructuración, gestión e implementación de proyectos productivos, sociales
                   y ambientales. A lo largo de mi carrera, he trabajado en consultorías con organismos de Cooperación internacional en áreas de
                    participación ciudadana y gestión pública, dominando metodologías clave para el seguimiento y la formulación de proyectos, 
                    como la Metodología General Ajustada (MGA)
                </p>
                
                        <p>

        Mi liderazgo se ha dirigido firmemente a la construcción de paz, el desarrollo territorial sostenible y la garantía de derechos para las poblaciones más vulnerables. 
       
                        </p>
              </div>

              {/* <div className="pt-6 border-t border-border/30">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 border-2 border-primary/30 flex items-center justify-center group hover:border-primary hover:scale-110 transition-all duration-300">
                    <span className="text-primary font-bold text-3xl group-hover:scale-110 transition-transform duration-300">502</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Tu voto construye futuro</p>
                    <p className="text-muted-foreground text-sm">
                      Marca el <span className="font-bold text-primary">502</span> 
                    </p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Imágenes más grandes y unidas */}
            <div className="grid grid-cols-2 gap-0.5 sm:gap-1">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="group relative animate-float"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    animationDuration: '3s'
                  }}
                >
                  <div className="aspect-square overflow-hidden m-0.5">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Título elegante */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                    <h3 className="text-white font-semibold text-lg text-center tracking-wide">
                      {value.title}
                    </h3>
                  </div>

                  {/* Efecto de brillo al hover */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          {/* Sección de logros */}
        
        </div>
      </div>

      {/* Añade estas animaciones a tu Tailwind config o CSS global */}
      {/* <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style> */}
    </section>
  );
};

export default AboutSection;