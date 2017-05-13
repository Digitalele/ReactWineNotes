var React = require('react');
var WineForm = require('WineForm');
var WineMessage = require('WineMessage');
var ErrorModal = require('ErrorModal');
var wineapi = require('wineapi');

var Weather = React.createClass({
	getInitialState: function () {
		return {
			isLoading: false
		}
	},

	handleSearch: function (location) {
		var that = this; //create this before to call scope above 
		//loading
		//mantain state for error message
		 
		this.setState({
			isLoading: true,
			//clear data message for new search
			errorMessage: undefined,
			location: undefined,
			name: undefined
		});

		wineapi.getTemp(location).then(function (name){
			that.setState({
				location: location,
				name: name,
				isLoading: false
			});
			console.log(name);
debugger;
			// debugger;
//e parameter because is javascript e.message
		}, function (e) {
			that.setState({
				isLoading: false,
				errorMessage: e.message //string
			});
		});
	},
	//run search when component get started
	componentDidMount: function() {
	//pull out location could be .location
	var location = this.props.location.query.location;

		//start search if there is location and not empty
		if(location && location.length > 0) {
			this.handleSearch(location);
			//url root
			window.location.hash = '#/';
		}
	},

	  //call avery times component is updated for update child props
  	componentWillReceiveProps: function(newProps) {
      //pull out location could be .location
	var location = newProps.location.query.location;

		//start search if there is location and not empty
		if(location && location.length > 0) {
			this.handleSearch(location);
			//url root
			window.location.hash = '#/';
		}
  	},

	render: function () {

		var {isLoading, name, location, errorMessage} = this.state; //pull the 2 states
		//props
		
		//render function inside component
		function renderMessage() {
			if (isLoading) {
				return <h3>Loading...</h3>
			} else if (name && location) {
				return <WineMessage name={name} location={location}/>
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
				<h3 className="page-title text-center">Wine Searcher</h3>
				<WineForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		)	
	}
});

module.exports = Weather;
//&appid=9c2d730a1611a13dadc314b1e57eca68
//axios library npm request