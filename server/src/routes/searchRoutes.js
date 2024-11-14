const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

// Endpoint de búsqueda
router.get('/', searchController.searchMedia);

module.exports = router;
