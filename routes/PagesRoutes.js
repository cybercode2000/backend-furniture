const express = require('express');
const pagesController = require('../controllers/PagesController');

const router = express.Router();

// Respond to /
router.get('/', pagesController);

module.exports = router;