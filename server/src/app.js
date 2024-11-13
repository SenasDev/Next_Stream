const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const searchRoutes = require('./routes/searchRoutes');
const mediaRoutes = require('./routes/mediaRoutes');

const app = express();

// Habilitar CORS para permitir solicitudes desde el frontend
app.use(cors());

// Mejorar la seguridad con helmet
app.use(helmet());

// Middleware para parsear JSON
app.use(express.json());

// Rutas para la API
app.use('/api/search', searchRoutes); // Ruta para búsqueda
app.use('/api/media', mediaRoutes);   // Ruta para media detalles

module.exports = app;
