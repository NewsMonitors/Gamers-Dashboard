'use strict';

var request = require('request');
var configJson = require('../config/config.json');

var validationError = function(res, err) {
  return res.json(422, err);
};

/**
 * Get list of games
 * restriction: 'all'
 */
exports.games = function(req, res) {
  var searchKey = encodeURIComponent(req.body.keyword);
  var url = 'https://xboxapi.com/v2/search/' + searchKey;
  var options = {
    url: url,
    headers: {
      'X-AUTH': configJson.xbox.key
    }
  };
  request(options, function(error, response, body){
    if (!error && response.statusCode == 200) {
      var info = {};
      info.success = true;
      info.data = JSON.parse(body);
      res.json(info);   
    } else {
      var info = {};
      info.success = false;
      info.data = null; 
      res.json(info);   
    }
  });
};

