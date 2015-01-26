var express = require('express');
var router = express.Router();
var UsersController = require('../controllers/UsersController')
var passport = require('passport');

router.get('/', function(req, res) {
  var user = req.user
  return res.render('index',  { 
  	user: user
  });
});

router.post('/users/signup', function(req, res) {
	return UsersController.signup(req, res);
});

router.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/' }));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;