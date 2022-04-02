const express = require('express');
const app = express();
// see details of incoming requests
const morgan = require('morgan');

const jobRoutes = require('./routes/jobs');
const authRoutes = require('./routes/auth');

app.use(morgan('dev'));

// forward requests to these routes
app.use('/jobs', jobRoutes);
app.use('/user', authRoutes);

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
