import React, {Component} from 'react'
import WineList from 'WineList'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


class DataList extends Component {
  
    render() {
    	var {dataList} = this.props;
    	var renderList = () => {
    		return dataList.map((wine) => {
    			return (      
              <WineList key={wine.id} {...wine}/>
					);
    		});
    	};
		
        return (  

        <CSSTransitionGroup
		    transitionName="fade"                                                                
		    transitionEnterTimeout={300}
		    transitionLeaveTimeout={300}
		    transitionAppearTimeout={1000}
		    transitionAppear={true}> 
	        	<table className="hover">
	                 <thead>
		                  <tr>
		                    <th width="150">Name</th>
		                    <th width="150">Year</th>
		                    <th width="150">Varietal</th>
		                    <th width="150">Type</th>
		                    <th width="50">Organic</th>
		                    <th width="50">Upgrade</th>
		                    <th width="50">Delete</th>
		                  </tr>
	                 </thead>
	                 <tbody>	
	                  	 	{renderList()}   			                    
	            	</tbody>
	            </table>
        </CSSTransitionGroup> 

        );
    }
}

export default DataList;

