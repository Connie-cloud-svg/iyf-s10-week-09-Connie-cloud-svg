import { useState } from 'react';

// Task 18.1 — useForm Hook
// Manages form values, errors, and touched fields in one place
function useForm(initialValues, validate) {
  const [values, setValues]   = useState(initialValues);
  const [errors, setErrors]   = useState({});
  const [touched, setTouched] = useState({});

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };


  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    if (validate) setErrors(validate(values));
  };


  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };


  const validateAll = () => {
    if (!validate) return true;
    const validationErrors = validate(values);
    setErrors(validationErrors);

    const allTouched = Object.keys(initialValues).reduce(
      (acc, key) => ({ ...acc, [key]: true }), {}
    );
    setTouched(allTouched);
    return Object.keys(validationErrors).length === 0;
  };

  return { values, errors, touched, handleChange, handleBlur, reset, validateAll, setValues };
}

export default useForm;