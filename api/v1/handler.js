'use strict'

let Parser = require('rss-parser');
let parser = new Parser();


const Handler = {
	RssToJson: {
	  handler: async (request, h) => {

		const rss_count = request.query.count

		const rss_url = request.query.rss_url
		
		async function getFeed(){
			let feed = await parser.parseURL(rss_url);

			let feed2 = feed.items.slice(0, rss_count);

			return feed2
		}

	
		let myFeed = await getFeed();

		console.log(myFeed)


		return h.response(myFeed)
	  }
	}
}

module.exports = Handler