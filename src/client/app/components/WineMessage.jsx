var React = require('react');

var WineMessage = React.createClass({
	render: function () {
		var {name, location} =	this.props;
		console.log(this.props);
		return (
			<div>
				
				<ul>{this.createItems(this.props.name)}</ul>
			</div>
		)	
	},
	 createItems: function(name){
        var output = [];
        for(var i = 0; i < name.length; i++) output.push(<li key={i}>{name[i]}</li>)
        return output;
    }
});  

module.exports = WineMessage;

