import React, {Component} from 'react'
import Upgrade from 'Upgrade'
import Delete from 'Delete'

class WineList extends Component {

    constructor() {    /* Note, is possible passed pros into the constructor in order to be used constructor(props)super(props)*/ 
        super()
        // Bind custom methods
        // this.handleUpgrade = this.handleUpgrade.bind(this)
        // this.handleDelete = this.handleDelete.bind(this)
        

    }

    // handleDelete(){
        
    //     console.log('delete');
    // }

    // handleUpgrade(){
        
    //     console.log('upgrade');
    
    // }

    render() {
    	var {name, year, varietal, type, id} = this.props;
        console.log(this.props);
        return (
              <tr>
                    <td>{name}</td>
                    <td>{year}</td>
                    <td>{varietal}</td>
                    <td>{type}</td>
                    <Upgrade  id={id}/>
                    <Delete  id={id}/>
              </tr>
        );
    }
}

export default WineList;

