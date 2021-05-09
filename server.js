/**
 * Set up express server and listen to incoming requests
 */

const express = require('express');
const connectDB = require('./config/db');
const IndexRoutes = require('./routes/index.routes');
require('dotenv').config();

// Connect Database
connectDB();

// Initalize express
const app = express();

// Main routes
app.use('/api/v1/', IndexRoutes);

// Initialize express middleware
app.use(express.json({ limit: '10kb' }));

// Get PORT
const port = process.env.PORT || 5050;

// Listen to incoming requests
app.listen(port, () => console.log(`Server running on port ${port}`));
