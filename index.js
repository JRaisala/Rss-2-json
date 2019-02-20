'use strict';

const Inert = require('inert');
const Vision = require('vision');
const Hapi = require('hapi');
const HapiSwagger = require('hapi-swagger');
const Pkg = require('./package.json')


// create new server instance and connection information
const server = Hapi.server({
	port: 3000,
	host: 'localhost',
	routes: {
		cors: true
	  }
});


// register plugins, configure views and start the server instance
async function start () {

	const swaggerOptions = {
		info: {
		  title: 'RSS-2-JSON API Documentation',
		  version: Pkg.version,
		  description:
			'API for turning RSS into JSON'
		},
		grouping: 'tags',
		tags: [
		{
			name: 'RSS2JSON',
			description: 'Turns RSS to JSON'
		}
		]
	}
	
	// register plugins to server instance
	await server.register([
		{
			plugin: Inert,
		},
		{
			plugin: Vision,
		},
		{
			plugin: HapiSwagger,
			options: swaggerOptions
		},
		{ 
			plugin: require('./api/v1/')
		},
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