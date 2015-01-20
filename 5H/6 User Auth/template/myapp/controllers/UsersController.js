var utils = require('../utils/utils');
var passport = require('passport');
var utils = require('../utils/utils')

var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'myapp'
});



var UsersController = {


  login: function(req, res, next) {

  	// TO DO

  },

  signup: function(req, res, next) {

    var username = connection.escape(req.body.username);
    var password = connection.escape(req.body.password);

    // TO DO

  },

  logout: function(req, res) {
    req.logout();
    return utils.sendSuccessResponse(res);    
  }

}

module.exports = UsersController;
