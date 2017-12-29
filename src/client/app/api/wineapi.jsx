var axios = require('axios');

const WINE_API = 'http://services.wine.com/api/beta2/service.svc/JSON/catalog?';
const KEY = '23986de5dd4c2846908b4613ba9d5a6b';

module.exports = {

	getWine: function (location) {
		//encoded for the browser
		var encodedLocation = encodeURIComponent(location);

		var requestUrl = `${WINE_API}search=${encodedLocation}&apikey=${KEY}`;
		console.log(requestUrl);
		return axios.get(requestUrl).then(function(res){
			if(res.data.ReturnCode == 300){
				throw new Error(res.data.Message);
			} else {
			
			const wine = [];
			
			for (var i = 0, len = res.data.Products.List.length; i < len; ++i) {

			wine.push(res.data.Products.List[i]);
			
				} 
			return wine;
			} 
		}, function (res) {
			throw new Error(res.data.Message); //pull api error
			console.log(res.data.Message);
		});
	}
}


