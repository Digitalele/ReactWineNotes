var React = require('react');
//var PropTypes = require('prop-types');
var ReactDom = require('react-dom');
var ReactDomServer = require('react-dom/server');



var ErrorModal = React.createClass({
	//pass error in modal component
	//similar to get inital state
	//filter validation for var

	getDefaultProps: function() {
		return {
			title: 'Error'

		};
	},
	propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},
	//open modal after react call render function
	componentDidMount: function() {
		var {title, message} = this.props;
		var modalMarkup = (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{message}</p>
				<p>
					<button className="button hollow" data-close="">
						Okay
					</button>
				</p>
			</div>
		);
		//Render a React element to its initial HTML. This should only be used on the server. React will return an HTML string. You can use this method to generate HTML on the server and send the markup down on the initial request for faster page loads
		var $modal = $(ReactDomServer.renderToString(modalMarkup));

		$(ReactDom.findDOMNode(this)).html($modal);

		var modal = new Foundation.Reveal($('#error-modal'));
		//foundation make some changes with .open we have to fix it
		modal.open(); 	
	},

	render: function () {


		return (
				<div>
				</div>
			);
	}
});

module.exports = ErrorModal;