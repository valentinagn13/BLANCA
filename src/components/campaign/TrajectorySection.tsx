import {
  Award,
  Briefcase,
  GraduationCap,
  Users,
  FileText,
  Building,
  Target,
} from "lucide-react";

const TrajectorySection = () => {


  const timeline = [
  {
    year: "2020 (Jun - Oct)",
    title: "Coordinadora para la Formulación del PDEA (Patrimonio Natural / Programa Visión Amazonía)",
    description:
      "Coordinó el equipo consultor para la adopción e implementación de los lineamientos del Plan Departamental de Extensión Agropecuaria (PDEA) en Caquetá. Lideró la formulación del proyecto de ordenanza y la sustentación para la aprobación del PDEA ante la asamblea departamental.",
    icon: Target,
  },
  {
    year: "2020 (Feb - Ago)",
    title: "Asesora de Proyecto Recuperación Temprana (Fundación Azareel)",
    description:
      "Desarrolló capacidades y potencialidades productivas en la población víctima, con especial cuidado de la mujer y de los NNA, para su empoderamiento económico y reincorporación social con enfoque en la recuperación temprana.",
    icon: Briefcase,
  },
  {
    year: "2019 - 2020 (Mar - Feb)",
    title: "Profesional Territorial (Organización Internacional para Las Migraciones - OIM)",
    description:
      "Contribuyó a la formulación, implementación, gestión y evaluación de proyectos de fortalecimiento institucional estructurados bajo la Metodología General Ajustada (MGA) del DNP en el municipio de Florencia, Caquetá.",
    icon: Building,
  },
  {
    year: "2017 (May - Nov)",
    title: "Asesora en Política Pública de la Mujer y Banco de Alimentos (Alcaldía de La Montañita)",
    description:
      "Gestionó la incorporación transversal de la política de la mujer con enfoque de género en los programas de la administración. Apoyó la creación de la mesa y la red de mujeres, y lideró la elaboración del proyecto para la implementación del banco de alimentos. Es reconocida como líder en la estrategia que otorgó a La Montañita el Premio Nacional de Alta Gerencia en 2016 en la categoría Constructoras de Paz.",
    icon: Award,
  },
  {
    year: "2016 - 2017 (Nov - Dic)",
    title: "Consultora en Política Pública de la Mujer (Fundación para el Desarrollo Integral de Colombia)",
    description:
      "Brindó asistencia técnica a gobiernos locales para la promoción de derechos humanos y la formulación y estructuración de la Política Pública de la Mujer y el Género, incluyendo la prevención y atención a la Violencia Basada en Género (VBG).",
    icon: Users,
  },
  {
    year: "2016 (Feb - Jul)",
    title: "Consultora del Plan de Acción Territorial (PAT) para las Víctimas (OIM)",
    description:
      "Proporcionó asistencia técnica a los Entes Territoriales (Alcaldías y Gobernación) para la elaboración, seguimiento y evaluación del PAT. También apoyó la concertación del PAT con las Mesas Municipales de Participación.",
    icon: Briefcase,
  },
  {
    year: "2015 (Jun - Dic)",
    title: "Consultora PAT y Proyectos MGA (OIM)",
    description:
      "Asesoró a la Alcaldía de Florencia en la formulación y seguimiento de proyectos del PAT, asegurando la correcta formulación de acuerdo a la Guía. Apoyó la coordinación para ajustar proyectos específicos a la metodología MGA.",
    icon: Building,
  },
  {
    year: "2015 (Ene - Jul)",
    title: "Asesora Banco de Proyectos de Inversión Municipal (Alcaldía de Florencia)",
    description:
      "Prestó servicios para la formulación, gestión contractual y seguimiento de proyectos de inversión para la Secretaría de Salud municipal. Asesoró a funcionarios en la formulación de proyectos bajo la Metodología General Ajustada (MGA).",
    icon: Briefcase,
  },
  {
    year: "2011 - 2020 (Feb 2011 - Ago 2020)",
    title: "Coordinadora de Proyectos (Corporación Masa Wai)",
    description:
      "Coordinó proyectos productivos y ambientales con población étnica (indígenas, afros) y mujeres en el Caquetá. Impulsó procesos de gestión pública, desarrollo territorial y participación ciudadana en las comunidades étnicas.",
    icon: Users,
  },
  {
    year: "2007 - 2014 (Varios períodos)",
    title: "Instructora y Formadora (SENA)",
    description:
      "Impartió formación profesional integral en áreas agrícola, agropecuaria, ambiental y agroecológica, especialmente en el programa Jóvenes Rurales Emprendedores. Lideró la creación y fortalecimiento de unidades productivas rurales sostenibles.",
    icon: GraduationCap,
  },
  {
    year: "2007 (Ago - Ene 2008)",
    title: "Gestora Comunidades Indígenas (CORPOAMAZONIA)",
    description:
      "Realizó actividades relacionadas con la recuperación y transmisión de prácticas culturales y apoyó la formulación de proyectos para comunidades indígenas del Caquetá.",
    icon: Award,
  },
];

  return (
    <section id="trayectoria" className="py-14 xl:py-20 bg-background">
      <div className="container mx-auto px-4 xl:px-12">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="block text-gradient text-lg xl:text-4xl mt-1">
            Mi trayectoria Profesional
          </span>

          <h2 className="text-3xl xl:text-2xl font-bold">
            15+ años de experiencia
          </h2>
        </div>

        {/* ===== MOBILE / TABLET TIMELINE (LEFT) ===== */}
        <div className="relative xl:hidden">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-primary/40" />

          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-10">
                {/* Icono */}
                <div className="absolute left-1 top-2">
                  <div className="w-7 h-7 bg-gradient-primary rounded-full flex items-center justify-center
                                shadow-md">
                    <item.icon className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                </div>

                {/* Card con efecto flotante para móvil */}
                <div className="bg-card p-3 rounded-lg border border-border/40
                              shadow-lg hover:shadow-xl
                              transform transition-all duration-300 ease-in-out
                              hover:-translate-y-1">
                  <span className="inline-block text-xs text-primary mb-1">
                    {item.year}
                  </span>
                  <h3 className="text-sm font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== DESKTOP TIMELINE (CENTERED & COMPACT) ===== */}
        <div className="hidden xl:block relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/40 -translate-x-1/2" />

          <div className="space-y-1">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } xl:-mt-6`}
              >
                {/* Card con efecto flotante */}
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div className="bg-card p-4 rounded-lg border border-border/40
                                  shadow-lg hover:shadow-2xl
                                  transform transition-all duration-300 ease-in-out
                                  hover:-translate-y-2 hover:scale-[1.02]
                                  relative">
                    
                    {/* Efecto de brillo sutil en hover */}
                    <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100
                                    bg-gradient-to-r from-primary/5 via-transparent to-primary/5
                                    transition-opacity duration-300" />
                    
                    <span className="inline-block text-xs text-primary mb-1 relative z-10">
                      {item.year}
                    </span>
                    <h3 className="text-sm font-semibold mb-1 relative z-10">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground relative z-10">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Icono central con efecto flotante */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10
                              transform transition-all duration-300 ease-in-out
                              hover:scale-110">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center 
                                border-2 border-background shadow-lg">
                    <item.icon className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                </div>

                {/* Línea horizontal conectando icono → card SOLO EN XL */}
                <div
                  className={`hidden xl:block absolute top-1/2 h-px bg-primary/40
                    ${index % 2 === 0 ? "right-1/2 w-24 mr-4" : "left-1/2 w-24 ml-4"}`}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrajectorySection;