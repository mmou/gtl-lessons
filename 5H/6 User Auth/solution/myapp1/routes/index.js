var express = require('express');
var router = express.Router();
var UsersController = require('../controllers/UsersController')
var passport = require('passport');
var utils = require('../utils/utils')

router.get('/', function(req, res) {
  var user = req.user
  return res.render('index',  { 
  	user: user
  });
});

router.post('/users/signup', function(req, res) {
	return UsersController.signup(req, res);
});

/*
router.post('/users/login',
  passport.authenticate('local'),
  function(req, res) {
	var returnedUser = {'_id': req.user._id,
	                  'username': req.user.username};
	utils.sendSuccessResponse(res, returnedUser);
  });
*/

/*
router.post('/users/login',
  passport.authenticate('local', { successRedirect: '/x',
                                   failureRedirect: '/xx' }));
*/

router.post('/users/login', function(req, res, next) {
	return UsersController.login(req, res, next);
});


router.get('/users/logout', function(req, res) {
	return UsersController.logout(req, res);
});

module.exports = router;