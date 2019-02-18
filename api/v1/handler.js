'use strict'

let Parser = require('rss-parser');
let parser = new Parser();


const Handler = {
	RssToJson: {
	  handler: async (request, h) => {
		
		let feed = await parser.parseURL('https://www.iltalehti.fi/rss/uutiset.xml');

		return h.response(feed)
	  },
	  tags: ['api', 'RSS TO JSON']
	}
}

module.exports = Handler