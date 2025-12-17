import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

// Imágenes
import imagen5 from "@/assets/imagen5.jpeg";
import imagen6 from "@/assets/imagen6.jpeg";
import imagen7 from "@/assets/imagen7.jpeg";
import imagen8 from "@/assets/imagen8.jpeg";
import imagen9 from "@/assets/imagen9.jpeg";
import imagen10 from "@/assets/imagen10.jpeg";

const ImageCarousel = () => {
  const images = [
    {
      id: 1,
      src: imagen5,
      alt: "Imagen de campaña 1",
      title: "Con la comunidad",
      description: "Reunión con líderes locales",
    },
    {
      id: 2,
      src: imagen6,
      alt: "Imagen de campaña 2",
      title: "Evento público",
      description: "Presentación de propuestas",
    },
    {
      id: 3,
      src: imagen7,
      alt: "Imagen de campaña 3",
      title: "Trabajo territorial",
      description: "Visita a proyectos locales",
    },
    {
      id: 4,
      src: imagen8,
      alt: "Imagen de campaña 4",
      title: "Diálogo ciudadano",
      description: "Escuchando a la comunidad",
    },
    {
      id: 5,
      src: imagen9,
      alt: "Imagen de campaña 5",
      title: "Compromiso social",
      description: "Trabajando por el desarrollo",
    },
  ];

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  /* 🔹 NUEVO: control del scroll para el parallax */
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-background to-campaign-dark/10">
      <div className="container mx-auto px-4 md:px-8">
        {/* HERO CON IMAGEN DE FONDO + EFECTO SCROLL */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 mb-12">
          <div
            className="relative h-40 md:h-48 lg:h-56 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${imagen10})`,
              backgroundPosition: `center calc(86% + ${scrollY * 0.17}px - 255px)`,
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center px-4">
              Momentos compartidos con nuestra{" "}
              <span className="block text-gradient text-3xl md:text-4xl lg:text-5xl font-extrabold">
                comunidad
              </span>
            </h2>
          </div>
        </div>

        {/* CARRUSEL */}
        <div className="relative max-w-6xl mx-auto">
          {/* Flecha izquierda - AHORA VISIBLE EN MÓVILES */}
          <button
            onClick={() => api?.scrollPrev()}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20
                       flex items-center justify-center
                       bg-black/70 hover:bg-black/90 backdrop-blur-md
                       text-white rounded-full p-2 md:p-3
                       shadow-lg hover:shadow-xl
                       border-2 border-white/20 hover:border-white/40
                       transition-all duration-300
                       w-10 h-10 md:w-12 md:h-12"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Flecha derecha - AHORA VISIBLE EN MÓVILES */}
          <button
            onClick={() => api?.scrollNext()}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20
                       flex items-center justify-center
                       bg-black/70 hover:bg-black/90 backdrop-blur-md
                       text-white rounded-full p-2 md:p-3
                       shadow-lg hover:shadow-xl
                       border-2 border-white/20 hover:border-white/40
                       transition-all duration-300
                       w-10 h-10 md:w-12 md:h-12"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            plugins={[
              Autoplay({
                delay: 2500, // 🔹 AUMENTADA LA VELOCIDAD: de 4000ms a 2500ms
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent className="-ml-4">
              {images.map((image, index) => {
                const isActive = index === current;

                return (
                  <CarouselItem
                    key={image.id}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div
                      className={`
                        relative aspect-[3/4] rounded-2xl overflow-hidden
                        transition-all duration-500
                        ${isActive ? " z-10" : " opacity-80"}
                      `}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={`
                          w-full h-full object-cover rounded-2xl
                          transition-transform duration-500
                          ${isActive ? "scale-110" : "scale-100"}
                        `}
                      />

                      <div
                        className={`
                          absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                          transition-opacity duration-500
                          ${isActive ? "opacity-100" : "opacity-0"}
                        `}
                      />

                      <div
                        className={`
                          absolute bottom-0 left-0 right-0 p-4
                          transition-all duration-500
                          ${isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                        `}
                      >
                        {/* <h3 className="text-lg font-bold text-white mb-1">
                          {image.title}
                        </h3> */}
                        {/* <p className="text-white/80 text-sm">
                          {image.description}
                        </p> */}
                      </div>

                      <div
                        className={`
                          absolute inset-0 rounded-2xl border-2
                          transition-colors duration-500
                          ${isActive ? "border-primary/50" : "border-white/10"}
                        `}
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Indicadores de navegación (opcional) */}
        <div className="flex justify-center mt-8 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`
                w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300
                ${index === current 
                  ? "bg-primary w-4 md:w-6" 
                  : "bg-gray-400 hover:bg-gray-600"
                }
              `}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;