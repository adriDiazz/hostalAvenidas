export const handleFormValidation = (form) => {
  const errors = {};

  if (form.name.length < 3 && form.name.length > 0)
    errors.name = "El nombre debe tener al menos 3 caracteres";
  if (form.name.length > 20)
    errors.name = "El nombre debe tener menos de 20 caracteres";

  if (form.checkIn > form.checkOut && form.checkOut !== "")
    errors.checkIn = "La fecha de salida debe ser mayor a la de entrada";

  if (form.people === "") errors.people = "";
  if (Number(form.people) > 10)
    errors.people =
      "El numero de personas es incorrecto, este debe ser mayor a 0 y menor a 10";

  return errors;
};
