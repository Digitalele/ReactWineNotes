import React, {Component} from 'react';

var marginTop = {
  marginTop: "20px"
};

class About extends Component {
    render() {
        return (
        	<div>
	            <div style={marginTop} className="small-6 small-centered">
	            	<div className="callout alert text-center">
					  	<h3 className="text-center page-title">
							About Wine Search
						</h3>
						<p>Based with <a href="https://api.wine.com/">api.wine.com</a>, React.js, Firebase and some other stuff..</p> 
					</div>
					
				</div>
			</div>
        );
    }

}

export default About;













// var About = React.createClass({
// 	render: function () {
// 		return (
// 			<h3>
// 				About Component
// 			</h3>
// 		)	
// 	}
// });

// var About = (props) => {
// 	return (
// 			<div>
// 				<h3 className="text-center page-title">
// 					About Wine Search
// 				</h3>
// 				<p>Based with <a href="https://api.wine.com/">api.wine.com</a> and React.js</p> 
// 			</div>
// 		)	
// };

// module.exports = About;


