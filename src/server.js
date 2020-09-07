const express = require('express');

// Initializations
const app = express();

// Public Directory
// app.use(express.static('public'));

// Config
app.use(express.json());

// Routes
app.use(require('./router/rootRoutes'));

module.exports = app;
