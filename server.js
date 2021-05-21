/**
 * Set up express server and listen to incoming requests
 */

const express = require('express');

const connectDB = require('./config/db');
const indexRoute = require('./routes/indexRoute');
const userRoute = require('./routes/userRoute');
require('dotenv').config();

// Connect Database
connectDB();

// Initalize express
const app = express();

// Initialize express middleware
app.use(express.json({ extended: false }));

// Main routes
app.use('/api/v1/', indexRoute);
app.use('/api/v1/auth', userRoute);


// Get PORT
const port = process.env.PORT || 5050;

// Listen to incoming requests
app.listen(port, () => console.log(`Server running on port ${port}`));
