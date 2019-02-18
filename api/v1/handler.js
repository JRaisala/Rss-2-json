'use strict'

let Parser = require('rss-parser');
let parser = new Parser();


const Handler = {
	RssToJson: {
	  handler: async (request, h) => {

		const rss_url = request.query.rss_url

		console.log(rss_url)
		
		let feed = await parser.parseURL(rss_url);

		return h.response(feed)
	  },
	  tags: ['api', 'RSS TO JSON']
	}
}

module.exports = Handler