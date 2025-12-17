import { GraduationCap, Stethoscope, Tractor, Building, Leaf, Users } from "lucide-react"; 
import flag from "@/assets/flag.png"; // Asegúrate de que la ruta sea correcta

const Proposals = () => {
  return (
    <section
      id="propuestas"
      className="py-10 md:py-14 relative overflow-hidden" // Altura reducida
      style={{ background: "linear-gradient(to right, #f37f3e, #c72d28)" }} // Degradado naranja-rojo
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center">
        {/* Bandera a la izquierda con borde negro sin redondear */}
        <div className="flex-shrink-0 mr-8">
          <img
            src={flag}
            alt="Bandera"
            className="w-36 md:w-44 border-2 border-black"
          />
        </div>

        {/* Texto central */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            La palabra se respalda con 
            <span className=" block mt-2"> hechos</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Proposals;
