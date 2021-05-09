/**
 * Prepare a function to connect to databse
 */

const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(`Mongodb server connection successful: ${conn.connection.host}`);

        // Seed some data
    } catch (err) {
        console.log(`Server connection error: ${err.message}`);

        // Exit the connection
        process.exit(1);
    }
};

module.exports = connectDB;
