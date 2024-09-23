const mongoose = require('mongoose');
require('dotenv').config(); // Load .env file
// console.log(process.env);

// Get Mongo URI from environment variables
const mongoURI = process.env.MONGO_URI;

const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connection to MongoDB successful');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err.message); // Log error details
    });
};

module.exports = connectToMongo;
