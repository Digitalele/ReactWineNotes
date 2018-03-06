import React, {Component} from 'react'
import {ref} from 'Firebase'


class Delete extends Component {

	constructor(props) {    /* Note, is possible passed pros into the constructor in order to be used constructor(props)super(props)*/ 
        super(props)
        // Bind custom methods
        console.log(props);

        this.deleteWine = this.deleteWine.bind(this);
        this.theWine = ref.child('wines');

    }

    deleteWine(e){
       e.preventDefault()
       var key = this.refs.id.value;
       this.theWine.child(key).remove();
    }

    render() {
        var {id} = this.props;
    	console.log(id);
     
        return (
            
            <td>
            	<form onClick={(e) => this.deleteWine(e)}>
	            	<button type="submit" className="button-circle button-delete" ref="id" value={id}>
	            		<i className="fa fa-trash-o" aria-hidden="true"></i>
	            	</button>
                </form>
            
            </td>                      
           
        );
    }
}

export default Delete;


                

