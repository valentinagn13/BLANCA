import { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Nos pondremos en contacto pronto.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Teléfono",
      value: "+57 310 123 4567",
      href: "tel:+573101234567",
    },
    {
      icon: Mail,
      label: "Correo",
      value: "contacto@BLANCA502.com",
      href: "mailto:contacto@BLANCA502.com",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Florencia, Caquetá, Colombia",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contacto" className="py-24 md:py-32 bg-campaign-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary font-semibold text-sm uppercase tracking-widest rounded-full mb-6">
            Contacto
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Hablemos del futuro
            <span className="text-gradient block mt-2">de nuestro Caquetá</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Tu voz es importante. Escríbeme, cuéntame tus ideas, propuestas o
            inquietudes. Juntos construimos el cambio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary-foreground mb-6">
              Envía tu mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-primary-foreground/80 font-medium mb-2"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary/30 rounded-lg text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-primary-foreground/80 font-medium mb-2"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary/30 rounded-lg text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-primary-foreground/80 font-medium mb-2"
                >
                  Tu mensaje
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary/30 rounded-lg text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Cuéntame tus ideas, propuestas o inquietudes..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-primary text-primary-foreground font-bold rounded-lg shadow-glow hover:shadow-campaign transition-all duration-300 hover:scale-[1.02] uppercase tracking-wide flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">
                Información de contacto
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 bg-primary-foreground/5 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-primary-foreground/60 text-sm">
                        {item.label}
                      </p>
                      <p className="text-primary-foreground font-medium">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-primary-foreground mb-4">
                Sígueme en redes
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-primary/20 hover:bg-gradient-primary rounded-xl flex items-center justify-center transition-all duration-300 group hover:shadow-glow"
                  >
                    <social.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-primary p-8 rounded-2xl shadow-glow">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                ¡Únete al cambio!
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Tu voto es la fuerza que necesitamos para transformar el Caquetá.
                El 27 de octubre, marca el número 502.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-6xl font-extrabold text-primary-foreground/20">
                  502
                </div>
                <div className="text-primary-foreground">
                  <p className="font-bold">BLANCA NUBIA</p>
                  <p className="text-sm opacity-80">Concejal Caquetá</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-primary/20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 BLANCA NUBIA - Candidato al Concejo de Caquetá. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
