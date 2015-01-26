var utils = require('../utils/utils')
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'myapp'
});

var ItemsController = {

  getItems: function(req, res) {
    var query = ""; // TODO write query to get all items
    connection.query(query, function(err, rows, fields) {
      return utils.sendSuccessResponse(res, rows)
    })
  },

  addItem: function(req, res) {
    var item = req.body.item;
    var query = ""; // TODO write query to insert item. remember to "connection.escape(item)"
    connection.query(query, function(err, rows, fields) {
      return utils.sendSuccessResponse(res, rows);
    })    
  },

  removeItem: function(req, res) {
    var id = req.params.resource_id;
    var query = ""; // TODO write query to insert item. remember to "connection.escape(id)"
    connection.query(query, function(err, rows, fields) {
      return utils.sendSuccessResponse(res, rows);
    })    
  }  

}

module.exports = ItemsController;
