const express = require('express');
const { check } = require('express-validator');
const auth = require('../middlewares/auth');

const userController = require('../controllers/userController');

// Initialize express router
const router = express.Router();

router.get('/', auth, userController.getLoggedInUser);

router.post('/login', [check('email', 'Please enter a valid email').isEmail(), check('password', 'Please input the correct password').exists()], userController.login);

module.exports = router;
