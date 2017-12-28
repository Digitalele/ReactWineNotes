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
		                    <th>Year</th>
		                    <th width="150">Varietal</th>
		                    <th width="150">Type</th>  
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


// var React = require('react');
// var Todo = require('Todo');

// var TodoList = React.createclassName({
// 	//for every todo in array we have to render something different
// 	render: function () {
// 		var {todos} = this.props;
// 		var renderTodos = () => {
// 			return todos.map((todo) => {
// 				return (
// 					<Todo key={todo.id} {...todo}/>
// 				);
// 			});
// 		};
// 		return (
// 			<div>
// 				{renderTodos()}
// 			</div>
// 		)
// 	}
// });

// module.exports = TodoList;

// //key prop for multiple instance components for keep track single items

// // {spread operator spred out to indivdual props}
// //container list