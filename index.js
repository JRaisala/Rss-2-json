'use strict';

const Hapi = require('hapi');
const Path = require('path')
const Dotenv = require('dotenv')

// create new server instance and connection information
const server = Hapi.server({
	port: process.env.PORT || 3000,
	host: 'localhost',
	routes: {
		cors: true
	  }
});


// register plugins, configure views and start the server instance
async function start () {
	// register plugins to server instance
	await server.register([
		{ 
			plugin: require('./api/v1/')
		}
	])

	// start your server
	try {
		await server.start()
		console.log("Server started at " + server.info.uri);
	} catch (err) {
		console.log("Error starting server!!!", err);
		process.exit(1)
	}
}

start()