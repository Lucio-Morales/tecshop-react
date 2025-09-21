import { useState } from 'react';

interface FormData {
  full_name: string;
  email: string;
  password: string;
}

const Form = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
  });
};

export default Form;
