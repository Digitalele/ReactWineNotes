var axios = require('axios');
//http://services.wine.com/api/beta2/service.svc/JSON/catalogsearch=${encodedLocation}&apikey=${KEY}? 
const WINE_API = 'http://localhost:3000/api/serve/winename/';
//const KEY = '23986de5dd4c2846908b4613ba9d5a6b';

module.exports = {

	getWine: function (location) {
		//encoded for the browser
		var encodedLocation = encodeURIComponent(location);

		var requestUrl = `${WINE_API}${encodedLocation}`;
		console.log(requestUrl);
		return axios.get(requestUrl).then(function(res){
			if(res.data.ReturnCode == 300){
				throw new Error(res.data.Message);
			} else {
			
			const wine = [];
			console.log('res data', res.data);
			for (var i = 0, len = res.data.length; i < len; ++i) {

			wine.push(res.data[i]);
			console.log('wine res data', wine);
				} 
			return wine;
			} 
		}, function (res) {
			throw new Error(res.data.Message); //pull api error
			console.log(res.data.Message);
		});
	}
}


