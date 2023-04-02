import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFormLocalStorage from "../../hooks/useFormLocalStorage";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { handleFormValidation } from "../../utils/errors";

const Form = () => {
  const [form, handleFormChange, handleFormSubmit] = useFormLocalStorage({
    name: "",
    checkIn: "",
    checkOut: "",
    people: "",
  });

  return (
    <>
      <div className="backdrop-blur-xl bg-white/20 rounded-md xl:w-3/4 pb-10   sm:w-fit h-fit">
        <form
          className="w-full  p-6 rounded-md flex flex-col justify-start gap-5 text-white"
          onSubmit={(e) => handleFormSubmit(e, true, "/reservation")}
        >
          <label htmlFor="name" className="flex flex-col">
            Nombre
            <Input
              type="text"
              placeholder='"Nombre"'
              name="name"
              id="name"
              onChange={handleFormChange}
              className="text-gray-400"
              required
              error={handleFormValidation(form).name}
            />
          </label>
          <div className="flex justify-between items-center">
            <label htmlFor="checkIn" className="flex flex-col w-1/2">
              Fecha de llegada
              <Input
                id="checkIn"
                type="date"
                name="checkIn"
                className="w-3/4 text-gray-400"
                placeholder="Check in"
                onChange={handleFormChange}
                required
                error={handleFormValidation(form).checkIn}
              />
            </label>

            <label htmlFor="checkOut" className="flex flex-col w-1/2">
              Fecha de salida
              <Input
                id="checkOut"
                type="date"
                name="checkOut"
                className="w-3/4 text-gray-400"
                placeholder="Check out"
                onChange={handleFormChange}
                required
                error={handleFormValidation(form).checkOut}
              />
            </label>
          </div>
          <label htmlFor="people" className="flex flex-col">
            Numero de personas
            <Input
              type="number"
              min="1"
              name="people"
              placeholder="Cuantas personas sois?"
              id="people"
              onChange={handleFormChange}
              className="text-gray-400"
              required
              error={handleFormValidation(form).people}
            />
          </label>
          <Button
            className="py-4 hover:bg"
            disabled={
              handleFormValidation(form).name ||
              handleFormValidation(form).checkIn ||
              handleFormValidation(form).checkOut ||
              handleFormValidation(form).people
            }
          >
            Reservar
          </Button>
        </form>
      </div>
    </>
  );
};

export default Form;
