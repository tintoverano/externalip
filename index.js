var superagent = require('superagent');

var getip = function (callback) {
  superagent
    .get('https://diagnostic.opendns.com/myip')
    .set('User-Agent', 'curl/7.37.1')
    .end(function (err, res) {
      if (err) {
        return callback(err);
      }
      var ip = res.text.match(/\d+\.\d+\.\d+\.\d+/)[0];
      callback(null, ip);
    });
};

module.exports = exports = getip;
