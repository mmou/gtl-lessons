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


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'myapp'
});

// var query = "CREATE DATABASE myapp";
// var query = "CREATE TABLE users (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, username VARCHAR(30) NOT NULL, password VARCHAR(1000) NOT NULL)"
// var query = "INSERT INTO users (username, password) VALUES ('testusername', 'testpassword')"
// var query = "SELECT * FROM users"
// var query = "DROP table users"

/* 

connection.query(query, function(err, rows, fields) {

})

*/



// set up passport strategy

var bcrypt = require('bcryptjs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  function(username, password, done) {
    var findUsernameQuery = "SELECT * FROM users WHERE username=" + connection.escape(username);
    connection.query(findUsernameQuery, function(err, rows, fields) {
      if (err) { 
        return done(err); 
      }
      if (rows.length <= 0) {
        return done(null, false, {message: "Invalid username."});
      }
      var user = rows[0];      
      if (bcrypt.compareSync(password, user.password)) {
        return done(null, false, {message: "Invalid password."});
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

