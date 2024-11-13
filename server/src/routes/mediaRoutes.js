const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController');

// Endpoint para obtener detalles del media
router.get('/:id', mediaController.getMediaDetails);

module.exports = router;
