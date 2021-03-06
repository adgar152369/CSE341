require('dotenv').config();
const express = require('express');
const app = express();
// see details of incoming requests
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const jobRoutes = require('./routes/jobs');
const adminRoutes = require('./routes/admin');

// connect to database using mongoose
mongoose.connect(process.env.MONGO_ATLAS_CONNECTION, () => {
    console.log('connected to database');
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS
app.use((res, req, next) => {
  // only 'adjust' header
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// forward requests to these routes
app.use('/jobs', jobRoutes);
app.use('/user', adminRoutes);

// execute when request doesn't reach routes
app.use((req, res, next) => {
  const error = new Error('Not found');
  // could not find route error
  error.status = 404;
  // forward the request but w/ error
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
