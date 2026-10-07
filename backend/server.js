const express = require('express');

const app = express();
const port = process.env.API_PORT || 5000;

app.use(express.json());

app.post('/api/personal-data', (request, response) => {
  const fields = [
    'nombre',
    'apellido',
    'dni',
    'email',
    'telefono',
    'ciudad',
    'carrera',
    'comentario',
  ];

  // Mapeamos cada campo, para ver si nos dieron una string desde el frontend
  const personalData = Object.fromEntries(
    fields.map((field) => [
      field,
      typeof request.body?.[field] === 'string' ? request.body[field].trim() : '',
    ])
  );

  // Fields obligatorios
  const requiredFields = ['nombre', 'apellido', 'email', 'telefono'];

  // En caso de que se incumpla algun campo de los obligatorios, devolvemos un error
  if (requiredFields.some((field) => !personalData[field])) {
    return response.status(400).json({
      status: 'error',
      message: 'Completá tu nombre, apellido, correo y teléfono.',
    });
  }

  console.log('Datos personales recibidos:', personalData);

  // Devolvemos un status 200 de exito
  return response.status(200).json({
    status: 'success',
    message: 'Sus datos fueron enviados exitosamente.',
  });
});

app.listen(port, () => {
  console.log(`API lista en http://localhost:${port}`);
});
