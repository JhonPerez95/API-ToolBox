const express = require('express');
const app = express();

app.use(require('./helloWorld'));
// Add more routes

module.exports = app;
