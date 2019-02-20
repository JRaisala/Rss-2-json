'use strict'

let Parser = require('rss-parser');
let parser = new Parser();


const Handler = {
	RssToJson: {
	  handler: async (request, h) => {

		const rss_count = request.query.count

		const rss_url = request.query.rss_url
		
		async function getFeed(){
			//Use parser to turn RSS to JSON
			let feed = await parser.parseURL(rss_url);
			//Slice out the number of items needed
			let slicedFeed = feed.items.slice(0, rss_count);

			return slicedFeed
		}

		let myFeed = await getFeed();

		console.log(myFeed)


		return h.response(myFeed)
	  },
	  tags: ['api', 'RSS2JSON'] 
	}
}

module.exports = Handler