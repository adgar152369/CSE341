const express = require('express');
const app = express();

const jobRoutes = require('./routes/jobs');
const authRoutes = require('./routes/auth');

app.use('/jobs', jobRoutes);
app.use('/user', authRoutes);

module.exports = app;