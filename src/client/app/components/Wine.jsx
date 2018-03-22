import React, {Component} from 'react';
import WineForm from 'WineForm'
import WineMessage from 'WineMessage'
import WineMessageFire from 'WineMessageFire'
import ErrorModal from 'ErrorModal'
import LocalStorage from 'LocalStorage'
import WineApi from 'WineApi'
import vow from 'vow'
import {ref} from 'Firebase'

class Wine extends Component {
	constructor() {    /* Note, is possible passed pros into the constructor in order to be used constructor(props)super(props)*/ 
        super()
        // Bind custom methods
		this.handleSearch = this.handleSearch.bind(this);
		this.apiSearch = this.apiSearch.bind(this);
		this.theWine = ref.child('wines');

        this.state = {
            isLoading: false,
            wine: [],
            fireWine: []
        };
    }

	debouncedChange (value, type) {
	    var dfd = vow.defer()
	    var timerId = this.timerId
	    let timer = this.props.debounceTime || 1000
	    if (timerId) {
	      clearTimeout(timerId)
	    }
	    timerId = setTimeout(((innerName) => () => dfd.resolve(innerName))(), timer)
	    this.timerId = timerId
	    return dfd.promise()
  	}

	handleSearch(location) {
		//conver first letter to uppercase for search wine in firebase case insensitive
		//add helper to perform this function
		var location = location.charAt(0).toUpperCase() + location.slice(1);
		var that = this; 
		this.setState({
			isLoading: true,
			//clear data message for new search
			errorMessage: undefined,
			location: undefined,
			wine: undefined,
			fireWine: undefined
		})


		const path = this.theWine;
		this.debouncedChange().then(() => 
		path.orderByChild('name')			//ORDERBY
		.startAt(location)
		.endAt(location + '\uf8ff')			//LIKE %%
		.limitToFirst(10) 					//LIMIT
		.on('value', (snap) => {		
			console.log(snap.val() + 'snap.val');
			var val = snap.val();
		      	console.log(val);
		      	//debugger;
		      	if(val == null){
				this.debouncedChange().then(() => 
		      		this.apiSearch(location)
		      	)} else {

				var dataVal = snap.val() || {};
			  	const fireWine = [];
				
				//creates an array of object enumetated
			    Object.keys(dataVal).forEach((data) => {
			    		//var data = data.val();
			    		console.log(dataVal, 'data');
			  		fireWine.push({
						id: data,
						...dataVal[data]		
			  		});
			  	
			    	 that.setState({
			    	 	location: location.toLowerCase(),
			    	 	fireWine: fireWine,
			    	 	isLoading: false
			    	 });
		
			      	console.log(fireWine);

			    	}); 
		   	}

		}, function (e) {
			that.setState({
				isLoading: false,
				errorMessage: e.message //string
			});
  			console.log("The read failed: " + e.code);
		})); 	
	}


	apiSearch(location) {
		if(location){
			var that = this; //create this before to call scope above 
		//loading
		//mantain state for error message
		
		this.setState({
			isLoading: true,
			//clear data message for new search
			errorMessage: undefined,
			location: undefined,
			wine: undefined,
			fireWine: undefined
		})
		
		WineApi.getWine(location).then(function (wine){
		that.setState({
			location: location,
			wine: wine,
			isLoading: false
		});
		console.log(wine);
				//javascript event.message
		}, function (e) {
			that.setState({
				isLoading: false,
				errorMessage: e.message //string
			});
			console.log("The read failed: " + e.code);
		}); 
	} else {
		this.setState({
			isLoading: false,
			//clear data message for new search
			location: undefined,
		});
	}
		
	}

	componentWillMount() {
		let getWinesStorage = LocalStorage.getWines();
		console.log(getWinesStorage + 'update');

		let getFireWinesStorage = LocalStorage.getFireWines();
		console.log(getFireWinesStorage + 'update');
		//debugger
	}

	componentDidUpdate() {
		let setWinesStorage = LocalStorage.setWines(this.state.wine);
		console.log(setWinesStorage + 'update set wine');

		let setFireWinesStorage = LocalStorage.setFireWines(this.state.fireWine);
		console.log(setFireWinesStorage + 'update set wineFire');
		//debugger
	}
	
	//run search when component get started
	componentDidMount() {
	//pull out location could be .location
	var location = this.props.location.query.location;
		//start search if there is location and not empty
		if(location && location.length > 0) {

			this.handleSearch(location);
			//url root
			window.location.hash = '#/';
		}
	}

	 //call avery times component is updated for update child props
  	componentWillReceiveProps(newProps) {
     //pull out location could be .location
	var location = newProps.location.query.location;

		//start search if there is location and not empty
		if(location && location.length > 0) {
			this.handleSearch(location);
			//url root
			window.location.hash = '#/';
		} 
  	}

  	componentWillUnmount() {
        this.theWine.off();
    }

	render() {
		var {isLoading, wine, fireWine, location, errorMessage} = this.state; //pull the states
		//props
		//render function inside component

		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center loading">
							<div id="wave">
								<span className="dot"></span>
								<span className="dot"></span>
								<span className="dot"></span>
							</div>
					   </h3>
			} else if (fireWine && location) {
				return <WineMessageFire fireWine={fireWine} location={location}/>
			} else if (wine && location) {
				return <WineMessage wine={wine} location={location}/>
			}

		}

	
		function renderError () {
			if (typeof errorMessage === 'string'){
				return (
					<ErrorModal message={errorMessage}/>
				)
			}
		}

		return (
			<div>
				<h2 className="page-title text-center main-title">Wine Searcher</h2>
				<WineForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		)	
	}
}

export default Wine;





