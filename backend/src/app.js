// src/app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

// Load environment variables
dotenv.config();

// Initialize MongoDB connection
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // For parsing JSON requests

// // Import your routes here
const userRoutes = require('./routes/userRoutes');
// // Add more routes as needed

// // Use routes
app.use('/api/users', userRoutes);
// Add more routes as needed

module.exports = app;
