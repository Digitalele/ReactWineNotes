module.exports = {

	getWineFirebase: function (location) {
		
		const path = ref.child('wines');
		path.orderByChild('name')			//ORDERBY
		.startAt(location)
		.endAt(location + '\uf8ff')			//LIKE %%
		.limitToFirst(10) 					//LIMIT
		.on('value', (snap) => {		
			console.log(snap.val() + 'snap.val');
			// var name = snap.val();
			// console.log(name);
		    var wineFirebase = snap.forEach((data) => {
		  			
		    	 var fireWine = snap.val();

		    	//console.log(data + 'foreach');
		      	console.log(fireWine);
		    });
		})

	}
}