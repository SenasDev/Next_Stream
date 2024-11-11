require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet'); // Para mejorar la seguridad
const app = express();
const searchRoutes = require('./routes/searchRoutes');

const PORT = process.env.PORT || 5001;

// Habilitar CORS para permitir solicitudes desde el frontend
app.use(cors());

// Mejorar la seguridad con helmet
app.use(helmet());

app.use(express.json());

// Ruta para la API de películas
app.use('/api', searchRoutes);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});