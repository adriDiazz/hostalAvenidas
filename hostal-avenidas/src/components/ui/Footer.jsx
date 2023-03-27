const Footer = () => {
  return (
    <>
      <div className="w-screen h-full bg-[#FEE0AE]">
        <div className="flex justify-evenly items-start p-5 font-thin">
          <div className="">
            <h4 className="text-2xl">Enlaces de interés</h4>
            <ul className="p-1">
              <li className="flex items-center gap-1">
                <div className="rounded-full bg-[#5D0607] w-2 h-2"></div>
                <a
                  href="https://hostalavenidas.es/hoteles-cercanos-a-parque-warner-bros-en-madrid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hoteles cercanos a Parque Warner Bros en Madrid.
                </a>
              </li>
              <li className="flex items-center gap-1">
                <div className="rounded-full bg-[#5D0607] w-2 h-2"></div>

                <a
                  href="https://hostalavenidas.es/hoteles-en-san-martin-de-la-vega"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hoteles en San Martín de la Vega.
                </a>
              </li>
              <li className="flex items-center gap-1">
                <div className="rounded-full bg-[#5D0607] w-2 h-2"></div>

                <a
                  href="https://hostalavenidas.es/entrada-mas-hotel-parque-warner-ofertas-irresistibles"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Entrada más hotel Parque Warner ofertas irresistibles.
                </a>
              </li>
              <li className="flex items-center gap-1">
                <div className="rounded-full bg-[#5D0607] w-2 h-2"></div>

                <a
                  href="https://hostalavenidas.es/hoteles-en-pinto-madrid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hoteles en pinto madrid
                </a>
              </li>
              <li className="flex items-center gap-1">
                <div className="rounded-full bg-[#5D0607] w-2 h-2"></div>

                <a
                  href="https://hostalavenidas.es/hoteles-y-otros-alojamientos-cerca-de-warner-bros-park"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hoteles y otros alojamientos cerca de Warner Bros Park
                </a>
              </li>
              <li className="flex items-center gap-1">
                <div className="rounded-full bg-[#5D0607] w-2 h-2"></div>

                <a
                  href="https://hostalavenidas.es/hotel-mas-entradas-al-nuevo-espectaculo-unico-en-el-mundo-aquaman-nighttime-spectacular"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aquaman Nighttime Spectacular
                </a>
              </li>
              <li className="flex items-center gap-1">
                <div className="rounded-full bg-[#5D0607] w-2 h-2"></div>

                <a
                  href="https://hostalavenidas.es/informacion-turistica-del-parque-warner-en-madrid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Parque Warner
                </a>
              </li>
              <li className="flex items-center gap-1">
                <div className="rounded-full bg-[#5D0607] w-2 h-2"></div>

                <a
                  href="https://hostalavenidas.es/informacion-turistica-del-parque-warner-en-madrid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hotel cerca warner
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <h4 className="text-2xl">Contacto</h4>
            <ul className="flex justify-start items-center gap-2">
              <li>
                {" "}
                <img src="facebook.svg" alt="" />
              </li>
              <li>
                <img src="insta.svg" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="w-screen h-10 bg-[#F6CA7E]">
          <span className="font-thin mt-2">Copyright 2022 | Adrian Diaz</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
