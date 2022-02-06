const User = require('../models/user');

exports.getLogin = (req, res, next) => {
   // const isLoggedIn = req.get('Cookie').split(';')[0].trim().split('=')[1];

   res.render('auth/login', {
      path: '/login',
      pageTitle: 'Login',
      isAuthenticated: false
   });
};

exports.postLogin = (req, res, next) => {
   
   User.findById('61fa9bdd3b9a09bc06589a70')
    .then(user => {
      req.session.user = user;
      req.session.isLoggedIn = true;
      res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
   req.session.destroy(() => {
      res.redirect('/');
   });
};

