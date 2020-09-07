const express = require('express');
const cors = require('cors');

// Initializations
const app = express();

// Public Directory
app.use(express.static('public'));

// Config
app.use(express.json());
app.use(cors());

// Routes
app.use(require('./router/rootRoutes'));

module.exports = app;
