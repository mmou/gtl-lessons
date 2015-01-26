var express = require('express');
var router = express.Router();
var utils = require('../utils/utils')

router.get('/', function(req, res) {
  return res.render('index', {'title': "my list of items"});
});

router.get('/foo', function (req, res) {
  var data = {
    content: "data from the server!"
  }
  return utils.sendSuccessResponse(res, data);
})

module.exports = router;