import { GraduationCap, Stethoscope, Tractor, Building, Leaf, Users } from "lucide-react";

const ProposalsSection = () => {
  const proposals = [
    
    {
      icon: Leaf,
      title: "Medio Ambiente",
      description:
        "Protección de nuestros recursos naturales, programas de reforestación y gestión sostenible del territorio.",
      highlights: ["Reforestación", "Reciclaje", "Energías limpias"],
    },
    {
      icon: Users,
      title: "Inclusión Social",
      description:
        "Programas para adultos mayores, personas con discapacidad y comunidades vulnerables de nuestra región.",
      highlights: ["Adultos mayores", "Jóvenes en riesgo", "Comunidades étnicas"],
    },
  ];

  return (
    <section id="propuestas" className="py-24 md:py-32 bg-campaign-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary font-semibold text-sm uppercase tracking-widest rounded-full mb-6">
            Propuestas
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Un plan real para el
            <span className="text-gradient block mt-2">cambio que necesitamos</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Estas son las propuestas que guiarán mi gestión como concejal. Cada
            una nace de escuchar a nuestra gente y entender sus necesidades.
          </p>
        </div>

        {/* Proposals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {proposals.map((proposal, index) => (
            <div
              key={proposal.title}
              className="group bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                <proposal.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                {proposal.title}
              </h3>

              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                {proposal.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {proposal.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-primary-foreground/70 mb-6">
            ¿Tienes una propuesta para mejorar nuestra región?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contacto");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-8 py-4 bg-gradient-primary text-primary-foreground font-bold rounded-lg shadow-glow hover:shadow-campaign transition-all duration-300 hover:scale-105 uppercase tracking-wide"
          >
            Comparte tu idea
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProposalsSection;
