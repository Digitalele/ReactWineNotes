import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class WineMessage extends Component {


	createList (wine) {
		const output = [];     
        for(var i = 0; i < wine.length; i++){
        	output.push(	
        	<li className="list-group-item" key={i}>
              <Link to={{pathname:`/winefields/${wine[i].Id}`}}>{wine[i].Name}</Link>
              <ul className="inline-list no-bullet">
				  <li><a href="#">{wine[i].Varietal.WineType.Name}</a></li>
				  <li><a href="#">{wine[i].Varietal.Name}</a></li>
				  <li><a href="#">{wine[i].Vintage}</a></li>
				</ul>
        	</li>
        	
        	)
        }
        return output;
    }

	render () {
		var {wine, location} = this.props;
			
			if (wine.length <= 3) {
				var addNew;
	  			 addNew = <li className="list-group-item active"><Link to={{pathname:`/Winefields/`}}>Add New</Link></li>;
			} else {
	  			 addNew = "";
			}

		return (
			<div className="small-6 small-centered ">		
				<ul className="list-group">
				<CSSTransitionGroup
	                          	transitionName="fade"                                                                
	         					transitionEnterTimeout={300}
	         					transitionLeaveTimeout={300}
	         					transitionAppearTimeout={1000}
	                         	transitionAppear={true}>

	                {this.createList(this.props.wine)}
					{addNew}
			                    
			    </CSSTransitionGroup>  
					
				</ul>
			</div>
		)	
	}

} 

export default WineMessage;








