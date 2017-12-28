var axios = require('axios');

//name uppercase es6 const
const WINE_API = 'http://services.wine.com/api/beta2/service.svc/JSON/catalog?';
const KEY = '23986de5dd4c2846908b4613ba9d5a6b';

//http://services.wine.com/api/beta2/service.svc/JSON/catalog?search=vermentino&apikey=ad558a9d73740f9daeca1fb167fda513

module.exports = {

	getWine: function (location) {
		//encoded for the browser
		var encodedLocation = encodeURIComponent(location);
		//template strings es6, backtick
		var requestUrl = `${WINE_API}search=${encodedLocation}&apikey=${KEY}`;
		console.log(requestUrl);
		//fetch and bring back result
		//return for promise pattern
		return axios.get(requestUrl).then(function(res){
			//error checking
			if(res.data.ReturnCode == 300){
				console.log(res.data.ReturnCode);
				console.log(res.data.Message);

				throw new Error(res.data.Message);
				//console.log(res.data.Message);
			} else {
					  
			//console.log(res.data.Products.List);
			
			const wine = [];
			
			for (var i = 0, len = res.data.Products.List.length; i < len; ++i) {
				//return res.data.Products.List[i].Name;//pull one data
				//console.log(i);
			
          	//var name = res.data.Products.List[i].Name; //pull all data
			wine.push(res.data.Products.List[i]);
          	//console.log(wine);
			
				} 
			//debugger;
			return wine;
			//console.log(wine);
			} 
		}, function (res) {
			throw new Error(res.data.Message); //pull api error
			console.log(res.data.Message);
		});
	}
}

// var name = [];
// 			for (var i = 0, len = res.data.Products.List.length; i < len; ++i) {
// 				//return res.data.Products.List[i].Name;//pull one data
// 				console.log(i);
			
//           	//var name = res.data.Products.List[i].Name; //pull all data
// 			name.push(res.data.Products.List[i].Name);
//           	console.log(name);

//map all json into array => follow instructions

