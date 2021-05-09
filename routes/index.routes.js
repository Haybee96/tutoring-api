const express = require('express');
const IndexController = require('../controllers/index.controllers');

// Initialize express router
const router = express.Router();

router.get('/', new IndexController().getIndex);

module.exports = router;
