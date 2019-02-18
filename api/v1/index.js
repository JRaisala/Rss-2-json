'use strict'

const Routes = require('./routes')

function register (server, options) {  
  server.route(Routes)
  server.log('info', 'Plugin registered: API RSS TO JSON')
}

exports.plugin = {  
  name: 'api-rss-to-json',
  version: '1.0.0',
  register
}