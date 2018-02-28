import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class WineMessageFire extends Component {
	
	createListFire (fireWine) {
		if(fireWine !== undefined){
		const outputfireWine = []; 
		    // organic
        for(var i = 0; i < fireWine.length; i++){
        	outputfireWine.push(	
        	<li className="list-group-item" key={i}>
              <Link to={{pathname:`/winefields/${fireWine[i].id}`}}>{fireWine[i].name}</Link>
              	<ul className="inline-list no-bullet">
				  <li><a href="#">{fireWine[i].type}</a></li>
				  <li><a href="#">{fireWine[i].varietal}</a></li>
				  <li><a href="#">{fireWine[i].year}</a></li>
				</ul>
        	</li>
        	)
        }
        return outputfireWine;
    	}
    }
    

	render () {
		var {fireWine, location} = this.props;
		if(fireWine !== undefined){	
			if (fireWine.length <= 3) {
				var addNew;
	  			 addNew = <li className="list-group-item active"><Link to={{pathname:`/Winefields/`}}>Add New</Link></li>;
			} else {
	  			 addNew = "";
			}
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
	                        	 
	              {this.createListFire(this.props.fireWine)}
								{addNew}
			                    
			        </CSSTransitionGroup>  	
					
				</ul>
			</div>
		)	
	}

} 

export default WineMessageFire;
