import { useState } from "react";

const useForm = (values) => {
  const [form, setForm] = useState(values);
  const onChangeHandler = (e) => {
    setForm((prevFormValues) => ({
      ...prevFormValues,
      [e.target.name]: e.target.value,
    }));
  };

  const resetField = (e) => {
    setForm("")
  }

  return {
    form,
    onChangeHandler,
    resetField,
  };
};

export default useForm;