var React = require('react');

// var About = React.createClass({
// 	render: function () {
// 		return (
// 			<h3>
// 				About Component
// 			</h3>
// 		)	
// 	}
// });

var About = (props) => {
	return (
			<div>
				<h3 className="text-center page-title">
					About Wine Search
				</h3>
				<p>Based with <a href="https://api.wine.com/">api.wine.com</a> and React.js</p> 
			</div>
		)	
};

module.exports = About;