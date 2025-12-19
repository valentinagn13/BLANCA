import { Mail, Facebook, Instagram, Twitter } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/MerkproyectosJAB/?locale=es_LA",
      label: "Facebook",
    }
  ];

  return (
    <section
      id="contacto"
      className="py-24 md:py-32 bg-campaign-dark relative overflow-hidden"
    >
      {/* Fondo sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary font-semibold text-sm rounded-full mb-6">
            Contacto
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Hablemos del futuro
            <span className="block text-gradient mt-2">de nuestro Caquetá</span>
          </h2>

          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Tu opinión cuenta. Escríbeme directamente al correo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Correo */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm p-10 rounded-2xl border border-primary/20 flex flex-col items-center justify-center text-center">
            <Mail className="w-10 h-10 text-primary mb-4" />

            <h3 className="text-2xl font-bold text-primary-foreground mb-2">
              Correo electrónico
            </h3>

            <a
              href="mailto:cunacue1@yahoo.es"
              className="text-primary font-medium text-lg hover:underline"
            >
              cunacue1@yahoo.es
            </a>
          </div>

          {/* Info lateral */}
          <div className="space-y-10">
            {/* Redes */}
            <div>
              <h3 className="text-xl font-bold text-primary-foreground mb-4">
                Sígueme en Facebook
              </h3>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 bg-primary/20 hover:bg-gradient-primary rounded-xl flex items-center justify-center transition hover:shadow-glow"
                  >
                    <social.icon className="w-5 h-5 text-primary-foreground" />
                  </a>
                ))}
              </div>
            </div>

            {/* Card CTA */}
            <div className="bg-gradient-primary p-8 rounded-2xl shadow-glow">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                ¡Únete al cambio!
              </h3>

              <p className="text-primary-foreground/80 mb-6">
                Tu apoyo es clave para transformar el Caquetá. En estas elecciones de Cámara de Representantes por la Circunscripción especial Territorial para la paz,
                marca el número 502.
              </p>

              <div className="flex items-center gap-4">
                <span className="text-6xl font-extrabold text-primary-foreground/20">
                  502
                </span>

                <div className="text-primary-foreground">
                  <p className="font-bold">BLANCA NUBIA</p>
                  <p className="text-sm opacity-80">Cámara de Representantes por la Circunscripción especial Territorial para la paz </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-primary/20 text-center">
        <p className="text-primary-foreground/50 text-sm">
          © 2024 BLANCA NUBIA – Todos los derechos reservados.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
