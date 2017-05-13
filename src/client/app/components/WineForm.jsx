var React = require('react');

var WineForm = React.createClass({
	onFormSubmit: function (e) {
		e.preventDefault();//prevent reload page

		var location = this.refs.location.value;

		if (location.length > 0) {
			this.refs.location.value = ''; // clear value
			this.props.onSearch(location);
		}
	},
	render: function () {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="search" ref="location" placeholder="Search"/>
					<button className="button expanded hollow">Get Wine</button>
				</form>	
			</div>
		);
	}
});

module.exports = WineForm;