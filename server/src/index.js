require('dotenv').config();
console.log("Variables de entorno:", process.env); // Cargar las variables de entorno desde .env
const express = require('express');
const app = express();
const movieRoutes = require('./routes/movieRoutes'); // Importamos el router

const PORT = process.env.PORT || 5001; // Puerto para el servidor

// Middleware para parsear el cuerpo de las peticiones
app.use(express.json()); 

// Ruta para la API de películas
app.use('/api/movies', movieRoutes);  

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});