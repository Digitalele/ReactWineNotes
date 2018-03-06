import React, {Component} from 'react'
import {ref} from 'Firebase'
import {Link, IndexLink} from 'react-router'


class Upgrade extends Component {

	constructor(props) {    /* Note, is possible passed pros into the constructor in order to be used constructor(props)super(props)*/ 
        super(props)
        // Bind custom methods
        console.log(props);
        this.upgradeWine = this.upgradeWine.bind(this);
        this.theWine = ref.child('wines');

    }

    upgradeWine(e){
        
       e.preventDefault()
       var key = this.refs.id.value;
       var wineKey = this.theWine.child(key).once('value').then(function(snapshot) {
          var upgradeData = snapshot.val();

          console.log(upgradeData, 'data');
        });

       console.log('key', wineKey);
      }


    render() {
    	
    	var {id} = this.props;
        
        return (
            
            <td>
            	<form onClick={(e) => this.upgradeWine(e)}>
	            	<button type="submit" className="button-circle" ref="id" value={id}>
                 <Link to={{pathname:`/winefields/${id}`}}>
                    <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                  </Link>
	            	</button>
	            </form>
           	</td> 
                            
        );
    }
}

export default Upgrade;


                