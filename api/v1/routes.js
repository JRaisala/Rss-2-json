'use strict'

const Handler = require('./handler')

const Routes = [
  {
    method: 'GET',
    path: '/',
	config: Handler.RssToJson
  }
]

module.exports = Routes