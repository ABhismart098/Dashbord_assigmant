// server.js
const express = require('express');
const connectDB = require('./config/dataconection'); // Correct file path for MongoDB config
const cloudinary = require('./config/cloudinaryconnection'); // Correct file path for Cloudinary config

require('dotenv').config(); // Load environment variables
const indexRoutes = require('./route/index.route'); // Main router for the app

// Initialize Express App
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB(); // Ensure your `dataconection.js` exports a `connectDB` function

// Cloudinary Initialization
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



// Main API Routes
app.use('/api', indexRoutes);

// Default Route for Testing
app.get('/', (req, res) => {
  res.send('Hi, Server is running!');
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
