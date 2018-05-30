import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class WineMessage extends Component {

	createList (wine) {
		const output = [];     
        for(var i = 0; i < wine.length; i++){
        	if(wine[i].organic){
        		var bio = <img src="public/imgs/bio.jpg" width="30" alt="bio"/>;
        	}
        	output.push(	
        	<li className="list-group-item" key={i}>
              <Link to={{pathname:`/winefields/${wine[i]._id}`}}>{wine[i].name} {bio}</Link>
              <ul className="inline-list no-bullet">
				  <li><a href="#">{wine[i].name}</a></li>
				  <li><a href="#">{wine[i].varietal}</a></li>
				  <li><a href="#">{wine[i].year}</a></li>
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
			<div className="small-8 medium-8 large-6 small-centered">		
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








