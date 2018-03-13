import React, {Component} from 'react'
import Upgrade from 'Upgrade'
import Delete from 'Delete'

class WineList extends Component {

    constructor() {    /* Note, is possible passed pros into the constructor in order to be used constructor(props)super(props)*/ 
        super()

    }

    render() {
    	var {name, year, varietal, type, organic, id, userKey} = this.props;
        if(organic){
                var bio = <img style={img} src="http://www.einsteinjournal.it/wp-content/uploads/2017/02/BIO-agricoltura-biologica-logo-europeo.jpg" alt="bio"/>;
            } else {bio = 'none';}
        return (
              <tr>
                    <td>{name}</td>
                    <td>{year}</td>
                    <td>{varietal}</td>
                    <td>{type}</td>
                    <td>{bio}</td>
                    <Upgrade id={id} userKey={userKey}/>
                    <Delete id={id} userKey={userKey}/>
              </tr>
        );
    }
}

const img = {
  width: '80px',
   borderRadius:100,
};

export default WineList;




