require('dotenv').config();
const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

router.get('/search', async (req, res) => {
  const query = req.query.q;

  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
      }
    });

    res.json(response.data.results);
    console.log('OK: Petición a la API de TMDb exitosa');

  } catch (error) {
    console.error('Error al buscar películas:', error.response.data); 
    res.status(500).json({ error: 'Error al buscar películas' });
  }
});

module.exports = router;