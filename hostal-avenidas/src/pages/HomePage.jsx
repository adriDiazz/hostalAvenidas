import Header from "../components/HomePage/Header";
import NavBar from "../components/ui/NavBar";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Slider } from "../components/HomePage/Slider";
const HomePage = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(fondo.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="bg-black bg-opacity-70 w-screen sm:min-h-screen xl:h-screen md:h-screen">
          <NavBar />
          <Header />
          <AiOutlineArrowDown className="hidden md:block text-white text-5xl animate-bounce absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10" />
        </div>
      </div>
      <div className="w-screen h-screen">
        <section className="h-full">
          <div className="w-screen min-h-1/2 p-7">
            <h2 className="text-3xl font-bold pb-6 mt-5">
              ¿Buscas un hostal cerca del parque Warner?
            </h2>
            <h4 className="text-2xl font-thin">
              Quizá has dado con el hostal ideal.
            </h4>
            <p className="w-3/4 py-2">
              En nuestro Hostal le ofrecemos disfrutar de una cálida atención y
              servicios personalizados en un ambiente acogedor y familiar con
              recepción las 24 horas. El Hostal Avenidas cuenta con 15
              confortables habitaciones, a tan solo 2.5 KM del Parque Warner
              Bros (5 minutos) y a tan solo 20 minutos de Madrid. El edificio es
              completamente nuevo y se inauguró en el 2004. Tiene todo tipo de
              comodidades, todas para hacer su estancia más agradable. El Hostal
              está situado en la zona centro de San Martín de la Vega (zona
              peatonal pasillo verde), un lugar tranquilo para pasear y próximo
              a zonas de restaurantes..
            </p>
            <img src="starts.svg" alt="" className="mt-5 mb-14" />
          </div>
          <Slider />
        </section>
      </div>
    </>
  );
};

export default HomePage;
