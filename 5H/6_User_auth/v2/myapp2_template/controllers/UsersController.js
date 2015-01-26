var utils = require('../utils/utils');
var passport = require('passport');
var utils = require('../utils/utils')

var bcrypt = require('bcryptjs');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'myapp'
});


var UsersController = {

  signup: function(req, res, next) {

    var username = req.body.username;
    var password = req.body.password;

    // TODO: your code here
    /* instructions:
      first check if username already taken
        if taken: 
          return utils.sendErrorResponse(res, 500, "username already taken")
        if not taken: 
          use bcrypt to generate a salt and hash, 
          and store the new user (with hashed password) in database
            if insertion error:
              return utils.sendErrorResponse(res, 500, err.code)
            if no error (success):
              login
    */

    /* when you use the form variables (username, password) in a SQL query, remember to do connection.escape(username_var) */

  }
  
}

module.exports = UsersController;
