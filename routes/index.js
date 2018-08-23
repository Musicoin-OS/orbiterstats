var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/json', function(req, res, next) {
  var queryType = req.query.q;
  if (queryType && queryType.toLowerCase() == "totalcoins") {
    // or use https://music.xxmine.net/api/totalCoins
    request('https://explorer.musicoin.org/api/totalCoins', function(error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      return res.send(JSON.stringify(body));
    });
  } else {
    res.send(JSON.stringify(404));
  }
});

module.exports = router;
