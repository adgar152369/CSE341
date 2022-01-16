
// Step 1: import express, use express as function, and create server at localhost:3000
const express = require('express');

//import body parser
const bodyParser = require('body-parser');

// step 1
const app = express();

// step 4
const users = [];

// Step 3: create templating engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

// Step 2: create routes and redirection
app.get('/', (req, res, next) => {
  res.render('index', { pageTitle: 'Add User' });
});

app.get('/users', (req, res, next) => {
  res.render('users', { pageTitle: 'User', users: users });
});

app.post('/add-user', (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect('/users');
});


// Step 1
app.listen(3000);
