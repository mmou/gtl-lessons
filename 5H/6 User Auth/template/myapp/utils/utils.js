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


/*
  Middleware that checks whether user is logged in.
*/
utils.auth = function(req, res, next) {
  if (req.user) {
    return next();
  } else {
    return utils.sendErrResponse(res, 401);
  }
};


module.exports = utils;
