import React from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Form = () => {
  return (
    <>
      <div className="backdrop-blur-xl bg-white/20 rounded-md xl:w-3/4 pb-10   sm:w-fit h-fit">
        <form className="w-full  p-6 rounded-md flex flex-col justify-start gap-5 text-white">
          <label htmlFor="nombre" className="flex flex-col">
            Nombre
            <Input type="text" placeholder='"Luis"' name="nombre" />
          </label>
          <div className="flex justify-between items-center">
            <label htmlFor="fecha" className="flex flex-col w-1/2">
              Fecha de llegada
              <Input
                type="date"
                name="fecha"
                className="w-3/4 text-gray-400"
                placeholder="Check in"
              />
            </label>

            <label htmlFor="fecha" className="flex flex-col w-1/2">
              Fecha de salida
              <Input
                type="date"
                name="fecha"
                className="w-3/4 text-gray-400"
                placeholder="Check out"
              />
            </label>
          </div>
          <label htmlFor="habitaciones" className="flex flex-col">
            Numero de personas
            <Input
              type="number"
              name="habitaciones"
              placeholder="Cuantas personas sois?"
            />
          </label>
          <Button className="py-4">Reservar</Button>
        </form>
      </div>
    </>
  );
};

export default Form;
