/* index.js */

var express = require('express');
var app = express();

var session = require('express-session');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'keyboard cat' }));

var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));



// set up passport strategy

var bcrypt = require('bcryptjs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize());
app.use(passport.session());

// configure passport authentication strategy 
passport.use(new LocalStrategy(
  function(username, password, done) {
    
    // TODO: this line is a mongodb query. replace with a mysql query.
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }

      // TODO: the mysql query callback does not have a user object. 
      // replace with what works with our mysql module. 
      // if it helps, define user variable for yourself
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      // TODO: we do not have a validPassword function. Instead, we use bcrypt.compare function. 
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);

    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  var findUsernameQuery = "SELECT * FROM users WHERE id=" + connection.escape(id);
  connection.query(findUsernameQuery, function(err, rows, fields) {
    done(err, rows[0]);
  })
});



// load routes

var index = require('./routes/index');
app.use('/', index);



var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

