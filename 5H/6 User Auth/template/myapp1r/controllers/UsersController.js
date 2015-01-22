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


  login: function(req, res, next) {

    /* custom authentication callback that uses the 'local'
    authentication strategy defined in myapp/index.js */
    passport.authenticate('local', function(err, user, info) {
      if (err) { 
        return next(err);
      };
      if (!user) {
        return utils.sendErrorResponse(res, 401, info.message);
      };
      req.login(user, function(err) {
        if (err) {
          return next(err)
        } else {
          // TODO: if err, then login was successful. so create a user object with a username property
          // (returnedUser) to send back to the client 
          return utils.sendSuccessResponse(res, returnedUser); // returnedUser is currently undefined. you should create an returnedUser object
        }
      });
    })(req, res, next);

  },

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
              return UsersController.login(req, res, next);
    */

    /* when you use the form variables (username, password) in a SQL query, remember to do connection.escape(username_var) */

  },

  logout: function(req, res) {
    req.logout();
    return utils.sendSuccessResponse(res);    
  }

}

module.exports = UsersController;
