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

module.exports = router;