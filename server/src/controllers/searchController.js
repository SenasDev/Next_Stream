// controllers/searchController.js
const axios = require('axios');
const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

/**
 * Controlador para buscar películas, series y personas.
 */
exports.searchMovies = async (req, res) => {
  const query = req.query.q;
  const type = req.query.type;

  try {
    const response = await axios.get(`${BASE_URL}/search/multi`, {
      params: {
        api_key: API_KEY,
        query,
        include_adult: false,
        language: 'es-ES'
      }
    });

    let results = response.data.results;
    if (type) {
      const validTypes = ['movie', 'tv', 'person'];
      results = results.filter(result => result.media_type === type);
    }

    res.json(results);
    console.log('OK: Petición a la API de TMDb exitosa');
  } catch (error) {
    console.error('Error al buscar:', error.response?.data || error.message);
    res.status(500).json({ error: 'Error al buscar' });
  }
};

