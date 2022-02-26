const express = require('express');

const app = express();

const profileRoutes = require('./routes/profile');

app.use('/', profileRoutes)

app.listen(8080); 