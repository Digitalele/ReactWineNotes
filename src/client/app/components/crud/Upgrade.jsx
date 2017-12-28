import React, {Component} from 'react'


class Upgrade extends Component {

	constructor(props) {    /* Note, is possible passed pros into the constructor in order to be used constructor(props)super(props)*/ 
        super(props)
        // Bind custom methods
        console.log(props);
        this.upgradeWine = this.upgradeWine.bind(this);

    }

    upgradeWine(e){
        
       e.preventDefault()
       var key = this.refs.id.value;
       //this.theWine.child(key).
       console.log('upgrade');
       console.log(this.props);
    }


    render() {
    	
    	var {id} = this.props;
        
        return (
            
            <td>
            	<form onClick={(e) => this.upgradeWine(e)}>
	            	<button type="submit" className="button secondary" ref="id" value={id}>
	            		<i className="fa fa-cloud-upload" aria-hidden="true"></i>
	            	</button>
	            </form>
           	</td> 
                            
        );
    }
}

export default Upgrade;


                