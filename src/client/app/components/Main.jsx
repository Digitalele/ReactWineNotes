import React, {Component} from 'react'
import Nav from 'Nav'
import Footer from 'Footer'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

var Main = (props) => {
		return (
			<div>
				<Nav/>
					<div className="wineForm">
						<div className="row">
							<div className="columns medium-12 large-12 ">
								<CSSTransitionGroup
							    transitionName="fade"                                                                
							    transitionEnterTimeout={300}
							    transitionLeaveTimeout={300}
							    transitionAppearTimeout={1000}
							    transitionAppear={true}> 
									{props.children}
								</CSSTransitionGroup> 
							</div>
						</div>
					</div>
				<Footer/>	
			</div>
		);
}

export default Main;







// var Main = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 				<Nav/>
// 				<h2>Main Component</h2>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// });
