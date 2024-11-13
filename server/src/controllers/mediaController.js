const axios = require('axios');

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

exports.getMediaDetails = async (req, res) => {
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
        append_to_response: 'watch/providers,credits,recommendations' // Incluye proveedores, créditos y recomendaciones
      }
    });

    res.json(response.data);
    console.log('OK: Detalles del media obtenidos');

  } catch (error) {
    console.error('Error al obtener los detalles del media:', error.response?.data || error.message);
    res.status(500).json({ error: 'Error al obtener los detalles del media' });
  }
};
