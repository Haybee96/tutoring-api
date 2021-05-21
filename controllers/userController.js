const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../models/UserModel');

/**
 * @route POST api/auth/login
 * @desc Authenticate the user (student, admin, tutor) and send token
 * @access public
 */

exports.login = async (req, res) => {
    // Validate and show error from the request
    const errors = validationResult(req);

    // Return errors if there are any
    if (!errors.isEmpty()) return res.status(400).json({ status: 'fail', errors: errors.array() });

    // If no errors, collect email and password
    const { email, password } = req.body;

    try {
        // Fetch user from the database based on email
        const user = await User.findOne({ email });

        // if user not found
        if (!user) return res.status(400).json({ status: 'error', message: 'Invalid email addresss' });

        // if user found, confirm password
        const isMatch = await bcrypt.compare(password, user.password);

        // if password not match
        if (!isMatch) return res.status(400).json({ status: 'error', message: 'Invalid password' });

        // else if password match, sign a token to the user
        const token = jwt.sign(user._id, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

        res.status(200).json({ status: 'success', message: 'Logged in successfully', user, token });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};

/**
 * @route GET api/auth/
 * @desc Get current user
 * @access public
 */
exports.getLoggedInUser = async (req, res) => {
    try {
        // find user from the db
        const user = await User.findById(req.user._id).select('-password');

        // return user
        res.status(200).json({ status: 'success', message: 'User fetched successfully', user });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ status: 'error', message: 'server error' });
    }
};
