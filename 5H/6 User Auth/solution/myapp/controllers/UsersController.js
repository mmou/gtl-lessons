var utils = require('../utils/utils');
var passport = require('passport');
var utils = require('../utils/utils')

var bcrypt = require('bcryptjs');
var SALT_WORK_FACTOR = 10;


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
        return utils.sendErrResponse(res, 401, info.message);
      };
      req.login(user, function(err) {
        if (err) {
          return next(err)
        } else {
          var returnedUser = {'_id': user._id,
                              'username': user.username};
          return utils.sendSuccessResponse(res, returnedUser);
        }
      });
    })(req, res, next);

  },

  signup: function(req, res, next) {

    var username = connection.escape(req.body.username);
    var password = connection.escape(req.body.password);

    var findUsernameQuery = "SELECT * FROM users WHERE username=" + username;
    connection.query(findUsernameQuery, function(err, rows, fields) {
      if (rows.length > 0) {
        return utils.sendErrorResponse(res, 500, "username already taken")
      } else {

        // generate a salt
        bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
          if (err) return next(err);

          // hash the password using salt
          bcrypt.hash(password, salt, function(err, hash) {
            if (err) return next(err);
            // save username and hash
            console.log("hash: " + hash);
            var createUserQuery = "INSERT INTO users (username, password) VALUES (" + username + ", '" + hash + "');";
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
