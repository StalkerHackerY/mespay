const express = require('express');
const paymentRoutes = require('./routes/paymentRoutes');
const path = require('path');

const app = express();

app.use(express.json());

// frontend
app.use(express.static(path.join(__dirname, 'public')));

// routes API
app.use('/api', paymentRoutes);

module.exports = app;