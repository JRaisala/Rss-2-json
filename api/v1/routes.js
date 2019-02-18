'use strict'

const Handler = require('./handler')

const Routes = [
  {
    method: 'GET',
    path: '/rss-to-json',
	config: Handler.RssToJson
  }
]

module.exports = Routes