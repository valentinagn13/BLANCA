import { useState } from "react";
import targetonImage from "@/assets/targeton.jpeg";
import flag2 from "@/assets/flag2.png";
import flag from "@/assets/flag.png";
import flag3 from "@/assets/voto.jpeg";

const ProposalsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const votingSteps = [
    {
      step: "01",
      title: "Solicita la Tarjeta electoral CITREP 5",
      description:
        "En tu puesto de votación, solicita la Tarjeta electoral para circunscripciones transitorias especiales de Paz CITREP 5 - CAQUETÁ.",
    },
    {
      step: "02",
      title: "Encuentra a ASTORRES - Corazón Campesino",
      description:
        "En la casilla de ASTORRES (Corazón Campesino), verás el número 502.",
    },
    {
      step: "03",
      title: "Marca la X sobre el número 502",
      description:
        "Marca la X sobre el número 502 dentro de la casilla ASTORRES. NO marques más de una casilla ni más de un número.",
    },
    {
      step: "04",
      title: "Verifica y entrega tu voto",
      description:
        "Antes de entregar, confirma que solo marcaste la X sobre el 502 dentro de ASTORRES - Corazón Campesino.",
    },
  ];

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Sección principal */}
      <section id="votar" className="bg-white relative">
        {/* Modal para imagen ampliada */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-5xl max-h-[90vh]">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white text-3xl hover:text-orange-400 transition-colors"
              >
                ✕
              </button>
              <img
                src={targetonImage}
                alt="Tarjetón electoral ampliado"
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 text-sm opacity-80">
                Haz click fuera de la imagen para cerrar
              </p>
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-16 md:pt-24">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              ¿Cómo votar por Blanca Nubia Cunacue?
            </h2>
            
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary rounded-full blur-3xl" />
            </div>
            
            <div className="w-full flex justify-center px-4 mb-6">
              <span className="inline-block px-6 py-2 bg-orange-50 text-orange-600 font-bold text-xs sm:text-sm uppercase tracking-[0.15em] rounded-full border border-orange-100 text-center shadow-sm">
                CITREP 5: Cámara de Representantes por las Víctimas
              </span>
            </div>

            <div className="relative z-10 flex items-center justify-center">
              <div className="flex justify-center w-full">
                <img
                  src={flag3}
                  alt="Bandera"
                  className="w-full max-w-4xl border-1 border-black"
                />
              </div>
            </div>
          </div>

          {/* Main Content - Imagen y Pasos */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center pb-16 md:pb-20">
            {/* Imagen del Tarjetón */}
            <div className="order-2 lg:order-1">
              <div className="relative bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 md:p-8 shadow-xl border border-orange-100">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
                  TARJETÓN
                </div>
                
                <div className="mt-8 cursor-pointer group" onClick={openModal}>
                  <div className="relative overflow-hidden rounded-xl border-8 border-white shadow-2xl transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-3xl">
                    <img
                      src={targetonImage}
                      alt="Tarjetón electoral Cámara de Representantes Caquetá con número 502 tachado"
                      className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay para indicar que es clickeable */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-80 p-3 rounded-full">
                        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-gray-600 text-sm mt-4">
                    <span className="inline-flex items-center gap-1 text-orange-600 font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                      </svg>
                      Haz click para ampliar la imagen
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Pasos para votar */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6 md:space-y-8">
                {votingSteps.map((step, index) => (
                  <div
                    key={step.step}
                    className="group flex gap-4 md:gap-6 p-5 md:p-6 bg-gradient-to-r from-white to-orange-50 hover:from-orange-50 hover:to-red-50 rounded-xl transition-all duration-300 hover:shadow-lg border border-orange-100 hover:border-orange-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {/* Número del paso */}
                    <div className="flex-shrink-0">
                      <div className="
                        w-12 h-12 md:w-14 md:h-14 
                        bg-gradient-to-br from-orange-500 to-red-600 
                        text-white 
                        rounded-full 
                        flex items-center justify-center
                        font-bold text-lg md:text-xl
                        shadow-md shadow-orange-200
                        group-hover:scale-110 
                        group-hover:shadow-lg
                        transition-all duration-300
                      ">
                        {step.step}
                      </div>
                    </div>

                    {/* Contenido del paso */}
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-700 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Destacar información clave en pasos específicos */}
                      {step.step === "02" && (
                        <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                          <span className="text-orange-600">📍</span>
                          ASTORRES - CORAZÓN CAMPESINO • Número 502
                        </div>
                      )}
                      
                      {step.step === "03" && (
                        <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                          <span className="text-red-600">✗</span>
                          Solo marca la X sobre el número 502
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección naranja - SIN padding bottom del contenedor */}
      <section 
        id="propuestas"
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(to right, #e86f2e, #b22824)" }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 flex items-center py-10 md:py-14">
          {/* Bandera a la izquierda con borde negro sin redondear */}
          <div className="flex-shrink-0 ml-6 md:ml-12">
            <img
              src={flag2}
              alt="Bandera"
              className="w-44 md:w-52 border-2 border-black"
            />
          </div>

          {/* Texto central */}
          <div className="flex-1 text-center md:text-left px-6 md:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              ¡Tu voto construye el futuro de Caquetá!
             
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProposalsSection;