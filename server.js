// server.js
const express = require('express');
const connectDB = require('./config/dataconection'); // Correct file path for MongoDB config
const cloudinary = require('./config/cloudinaryconnection'); // Correct file path for Cloudinary config
const signupRoutes = require('./route/sigup'); // Ensure file paths are correct
const loginRoutes = require('./route/login'); // Ensure file paths are correct
require('dotenv').config(); // Load environment variables

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB(); // Call the connectDB function

// Cloudinary initialization
cloudinary; // Cloudinary is already initialized in its config file

// Routes
app.use('/api/signup', signupRoutes);
app.use('/api/login', loginRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
