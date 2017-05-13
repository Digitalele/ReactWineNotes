var React = require('react');
var {Link} = require('react-router');


var Examples = React.createClass({
	render: function () {
		return (
		<div>
			<h3 className="text-center page-title">
				Wines	</h3>
				<p>
				Name:</p>
				<ol>
					<li>
						<Link to='/?location=Montalcino'>
							Montalcino
						</Link>
					</li>
					<li>
						<Link to='/?location=Vermentino'>
							Vermentino
						</Link>
					</li>
					
				</ol>
			</div>
		)	
	}
});

module.exports = Examples;