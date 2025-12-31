import flag from "@/assets/voto2.jpeg";

const FechaSection = () => {
  return (
    <section
      id="Fecha"
      className="py-10 md:py-14 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Solo el título */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            
                VOTA 502 • ASTORRES  este 8 de marzo de 2026
          </h2>
          
        </div>

        {/* Imagen */}
        <div className="flex justify-center w-full">
          <img
            src={flag}
            alt="Bandera"
            className="w-full max-w-4xl border-1 border-black"
          />
        </div>
      </div>
    </section>
  );
};

export default FechaSection;