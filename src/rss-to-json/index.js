'use strict'

function register (server, options) {
var Feed = require('rss-to-json');

  Feed.load('https://www.iltalehti.fi/rss/uutiset.xml', function(err, rss){
    console.log(rss);
});
}

exports.plugin = {
  name: 'rss-to-json',
  version: '1.0.0',
  register
}
