// Check if there is a token and header
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    // Get token from header
    const token = req.header('x-auth-token');

    // if token not found
    if (!token) {
        return res.status(401).json({ status: 'error', message: 'Not authorized. Please try again.' });
    }

    try {
        // Else if found, verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET, {});
        console.log(decoded);
        // req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ status: 'error', message: 'Invalid token' });
    }
};
