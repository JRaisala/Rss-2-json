'use strict'

const Handler = require('./handler')

const Routes = [
  {
    method: 'GET',
	path: '/RSS2JSON/',
	config: Handler.RssToJson
  }
]

module.exports = Routes