const express = require('express');
const indexController = require('../controllers/indexController');

// Initialize express router
const router = express.Router();

router.get('/', indexController.getIndex);

module.exports = router;
