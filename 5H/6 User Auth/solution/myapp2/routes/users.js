var express = require('express');
var router = express.Router();
var UsersController = require('../controllers/UsersController')
var passport = require('passport');
var utils = require('../utils/utils')

router.get('/', function(req, res) {
    return UsersController.getUsers(req, res);
});

router.post('/signup', function(req, res) {
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