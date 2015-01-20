var express = require('express');
var router = express.Router();
var UsersController = require('../controllers/UsersController')

router.get('/', function(req, res) {
  var user = req.user
  return res.render('index',  { 
  	user: user
  });
});

router.post('/users/signup', function(req, res) {
	return UsersController.signup(req, res);
});

router.post('/users/login', function(req, res) {
	return UsersController.login(req, res);
});

router.get('/users/logout', function(req, res) {
	return UsersController.logout(req, res);
});

module.exports = router;