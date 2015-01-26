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
          var returnedUser = {'username': user.username};
          return utils.sendSuccessResponse(res, returnedUser);
        }
      });
    })(req, res, next);

  },

  signup: function(req, res, next) {

    var username = req.body.username;
    var password = req.body.password;

    var findUsernameQuery = "SELECT * FROM users WHERE username=" + connection.escape(username);
    connection.query(findUsernameQuery, function(err, rows, fields) {
      if (rows.length > 0) {
        return utils.sendErrorResponse(res, 500, "username already taken")
      } else {

        // generate a salt
        bcrypt.genSalt(10, function(err, salt) {
          if (err) return next(err);

          // hash the password using salt
          bcrypt.hash(password, salt, function(err, hash) {
            if (err) return next(err);

            // save username and hash
            var createUserQuery = "INSERT INTO users (username, password) VALUES (" + connection.escape(username) + ", '" + hash + "');";
            connection.query(createUserQuery, function(err, rows, fields) {
              if (err) {
                return utils.sendErrorResponse(res, 500, err.code)
              } else {
                return UsersController.login(req, res, next);
              }
            })
          });
        });
      }
    });

  },

  logout: function(req, res) {
    req.logout();
    return utils.sendSuccessResponse(res);    
  }

}

module.exports = UsersController;
