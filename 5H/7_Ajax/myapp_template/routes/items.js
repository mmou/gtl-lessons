var express = require('express');
var router = express.Router();
var ItemsController = require('../controllers/ItemsController')
var utils = require('../utils/utils')

router.get('/', function(req, res) {
  return ItemsController.getItems(req, res);
});

router.post('/', function(req, res) {
  return ItemsController.addItem(req, res);
});

router.delete('/:resource_id', function(req, res) {
  return ItemsController.removeItem(req, res);
});

module.exports = router;