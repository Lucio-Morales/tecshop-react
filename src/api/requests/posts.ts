import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const registerUser = async (formData: any) => {
  return new Promise((resolve, reject) => {
    // Simula latencia de 3 seg
    setTimeout(() => {
      // Simula una validación: si el email es 'error@test.com', falla el registro
      if (formData.email === 'error@test.com') {
        // Simula una respuesta de error del back
        const error = {
          response: {
            data: { message: 'El correo electronico ya esta en uso. Por favor, intenta con otro.' },
          },
        };
        reject(error);
      } else {
        // Simula una respuesta exitosa del back
        const responseData = {
          message: 'Cuenta creada con exito.',
          user: {
            id: 'fake-id-123',
            fullName: formData.fullName,
            email: formData.email,
          },
          token: 'fake-token-xyz',
        };
        resolve({ data: responseData });
      }
    }, 3000);
  });
};
