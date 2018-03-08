import React, {Component} from 'react'
import {ref} from 'Firebase'
import {Link, IndexLink} from 'react-router'
import LocalStorage from 'LocalStorage'


class Upgrade extends Component {

	constructor(props) {    /* Note, is possible passed pros into the constructor in order to be used constructor(props)super(props)*/ 
        super(props)
        // Bind custom methods
        console.log(props);
        this.upgradeWine = this.upgradeWine.bind(this);
        this.theWine = ref.child('wines');

    }

    upgradeWine(e){
        e.preventDefault();
    
        var key = this.refs.id.value;
      }


    render() {
    	
    	var {id} = this.props;
        
        return (
            
            <td>
            	<form onClick={(e) => this.upgradeWine(e)}>
	            	
                 <Link to={{pathname:`/winefieldsedit/${id}`}}>
                    <button type="submit" className="button-circle" ref="id" value={id}>
                      <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                    </button>
                  </Link>
	            
	            </form>
           	</td> 
                            
        );
    }
}

export default Upgrade;


                