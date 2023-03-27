import Header from "../components/HomePage/Header";
import NavBar from "../components/ui/NavBar";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Slider } from "../components/HomePage/Slider";
import Mapa from "../components/HomePage/Mapa";
import Footer from "../components/ui/Footer";

const HomePage = () => {
  return (
    <>
      <main>
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
        {/* <div className="w-screen h-screen"> */}
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
        <section className="min-h-screen">
          <section>
            <div className="w-screen min-h-screen mt-14">
              {/* sm:flex w-full p-0 flex-wrap gap-7 justify-evenly md:flex-nowrap pl-7 pt-12 */}
              <div className="sm:w-full md:flex pl-7 pt-12 gap-20">
                <img
                  src="room2.svg"
                  alt=""
                  className="sm:w-full p-4 md:w-2/5 "
                />
                <div className="flex flex-col w-full p-4 gap-4 md:gap-14">
                  <h3 className="text-3xl">
                    Beneficios de usar nuestros servicios
                  </h3>
                  <div className="w-full flex flex-col gap-14">
                    <div className="flex items-start w-full gap-4">
                      <img src="01.svg" alt="" className="" />
                      <div className="">
                        <h4 className="text-2xl">Wifi gratis</h4>
                        <p className="w-3/4">
                          Encontrara conexion wifi gratuita en todo el hostal
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start w-full gap-4">
                      <img src="02.svg" alt="" />
                      <div className="">
                        <h4 className="text-2xl">Desayuno incluido</h4>
                        <p className="w-3/4">
                          Hostal Avenidas incluye en todas las habitaciones un
                          buffet de desayuno con gran variedad de alimentos.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start w-full gap-4">
                      <img src="03.svg" alt="" />
                      <div className="">
                        <h4 className="text-2xl">Ofertas parque warner</h4>
                        <p className="w-3/4">
                          Disponemos de descuentos en tus entradas reservando
                          con nosotros. Además no esperes colas con nuestras
                          entradas directas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section>
          <div className="h-screen w-screen mt-14 md:h-full">
            <div className="flex flex-col p-4 gap-10 md:flex-row-reverse justify-evenly items-start">
              <Mapa />
              <div className="flex flex-col justify-center items-start gap-2">
                <img src="ubi.svg" alt="" />
                <h4 className="">¿DONDE ESTAMOS?</h4>
                <span>C/Alcade Enrique Galvez, 10 28330 Madrid(España)</span>
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <img src="clock.svg" alt="" />
                <h4 className="flex items-end">DISPONIBLE 24/7</h4>
                <span>91 894 60 30</span>
                <span>info@hostalavenidas.com</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
