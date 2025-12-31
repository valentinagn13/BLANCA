import flag from "@/assets/voto.jpeg"; // Asegúrate de que la ruta sea correcta

const VotarSection = () => {
  return (
    <section
      id="votar"
      className="py-10 md:py-14 relative overflow-hidden" // Altura reducida
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary rounded-full blur-3xl" />
      </div>
      <div className="w-full flex justify-center px-4">
  <span className="inline-block px-6 py-2 bg-orange-50 text-orange-600 font-bold text-xs sm:text-sm uppercase tracking-[0.15em] rounded-full mb-4 border border-orange-100 text-center shadow-sm">
    Elecciones 2026: CITREP 5 Cámara de Representantes por el Acuerdo de Paz
  </span>
</div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center justify-center">
        {/* Imagen grande centrada */}
        <div className="flex justify-center w-full">
          <img
            src={flag}
            alt="Bandera"
            className="w-full max-w-4xl border-1 border-black" // Imagen más grande con borde negro
          />
        </div>
      </div>
    </section>
  );
};

export default VotarSection;
