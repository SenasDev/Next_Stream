require('dotenv').config();
const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

router.get('/search', async (req, res) => {
  const query = req.query.q;
  const type = req.query.type;

  try {
    const response = await axios.get(`${BASE_URL}/search/multi`, {
      params: {
        api_key: API_KEY,
        query: query,
        include_adult: false,
        language: 'es-ES'
      }
    });

    let results = response.data.results;
    if (type) {
      const validTypes = ['movie', 'tv', 'person'];
      if (validTypes.includes(type)) {
        results = results.filter(result => result.media_type === type);
      } else {
        return res.status(400).json({ error: 'Tipo de contenido inválido' });
      }
    }

    res.json(results);
    console.log('OK: Petición a la API de TMDb exitosa');

  } catch (error) {
    console.error('Error al buscar:', error.response?.data || error.message);
    res.status(500).json({ error: 'Error al buscar' });
  }
});

router.get('/media/:id', async (req, res) => {
  const mediaId = req.params.id;
  const mediaType = req.query.type; 

  try {
    let endpoint = '';
    if (mediaType === 'movie') {
      endpoint = `${BASE_URL}/movie/${mediaId}`;
    } else if (mediaType === 'tv') {
      endpoint = `${BASE_URL}/tv/${mediaId}`;
    } else {
      endpoint = `${BASE_URL}/movie/${mediaId}`; 
    }

    const response = await axios.get(endpoint, {
      params: {
        api_key: API_KEY,
        language: 'es-ES',
        append_to_response: 'watch/providers' // Incluir la información de los proveedores
      }
    });

    res.json(response.data);
    console.log('OK: Detalles del media obtenidos');

  } catch (error) {
    console.error('Error al obtener los detalles del media:', error.response?.data || error.message);
    res.status(500).json({ error: 'Error al obtener los detalles del media' });
  }
});

module.exports = router;