/* index.js */

var express = require('express');
var app = express();

/*
var session = require('express-session');

app.use(session({ secret: 'keyboard cat' }));
*/

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

/*

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


//var query = "CREATE TABLE items (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, item VARCHAR(30) NOT NULL)"
//var query = "INSERT INTO items (item) VALUES ('bottle')"

connection.query(query, function(err, rows, fields) {
})
*/

// load routes

var index = require('./routes/index');
var items = require('./routes/items');
app.use('/', index);
app.use('/items', items);




var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

