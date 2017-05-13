var axios = require('axios');

//name uppercase es6 const
const OPEN_WEATHER_MAP_URL = 'http://services.wine.com/api/beta2/service.svc/JSON/catalog?';
const KEY = 'ad558a9d73740f9daeca1fb167fda513';

//http://services.wine.com/api/beta2/service.svc/JSON/catalog?search=vermentino&apikey=ad558a9d73740f9daeca1fb167fda513

module.exports = {

	getTemp: function (location) {
		//encoded for the browser
		var encodedLocation = encodeURIComponent(location);
		//template strings es6, backtick
		var requestUrl = `${OPEN_WEATHER_MAP_URL}search=${encodedLocation}&apikey=${KEY}`;
		console.log(requestUrl);
		//fetch and bring back result
		//return for promise pattern
		return axios.get(requestUrl).then(function(res){
			//error checking
			if(res.data.cod && res.data.message){
				console.log(res.data.cod);
				console.log(res.data.message);

				throw new Error(res.data.message);
				console.log(res.data.message);
			} else {
					  

			  console.log(res.data.Products.List);
				var name = [];
			for (var i = 0, len = res.data.Products.List.length; i < len; ++i) {
				//return res.data.Products.List[i].Name;//pull one data
				console.log(i);
			
          	//var name = res.data.Products.List[i].Name; //pull all data
			name.push(res.data.Products.List[i].Name);
          	console.log(name);
			
				} 
			debugger;
			return name;
			console.log(name);
			}
		}, function (res) {
			throw new Error(res.data.message); //pull api error
			console.log(res.data.message);
		});
	}
}


