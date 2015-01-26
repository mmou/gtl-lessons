var utils = {};

utils.sendSuccessResponse = function(res, data) {
  res.status(200).json({
    success: true,
    data: data
  }).end();
};

utils.sendErrorResponse = function(res, code, err) {
  res.status(code).json({
    success: false,
    err: err
  }).end();
};

module.exports = utils;
