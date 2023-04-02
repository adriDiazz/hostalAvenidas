import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useFormLocalStorage = (data) => {
  const [form, setForm] = useState(data);

  const navigateOnSubmit = useNavigate();

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e, navigate, navigation) => {
    e.preventDefault();
    localStorage.setItem("form", JSON.stringify(form));
    if (navigateOnSubmit) navigateOnSubmit(navigation);
  };

  return [form, handleFormChange, handleFormSubmit];
};

export default useFormLocalStorage;
