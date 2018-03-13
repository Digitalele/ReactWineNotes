import React, {Component} from 'react'
//var {Link} = require('react-router');
import LocalStorage from 'LocalStorage'
import WineEdit from 'WineEdit'
import firebase, { auth, provider, ref } from 'Firebase';

class WineFields extends Component {

	constructor(props) {    /* Note, is possible passed pros into the constructor in order to be used constructor(props)super(props)*/ 
        super(props)
     	
        this.login = this.login.bind(this); 
  		this.logout = this.logout.bind(this); 
  		this.theWine = ref.child('wines');

        this.state = {
			currentItem: '',
			username: '',
			wine: [],
			user: null 
		}
     	
     }

	logout() {
	  // we will add the code for this in a moment, but need to add the method now or the bind will throw an error
	}

	login() {
	  auth.signInWithPopup(provider) 
	    .then((result) => {
	      const user = result.user;
	      this.setState({
	        user
	      });
	    });
	}

	render () {
		var {params} = this.props;
		function renderForm() {
			
			if(params.id.startsWith("-")){
				var fireWine = LocalStorage.getFireWines();
				
				var values = fireWine.filter(function (el){
				
					if(el.id == params.id){
	        			return true;
        			} else {
						return false;
					}

    			});

    			var wineInfo = {
    				'wineId': values[0].id,
    				'userKey': params.userKey,
				    'wineName': values[0].name.replace(/\./g,''),
				    'wineRegion': values[0].region,
				    'wineYear': values[0].year,
				    'wineRaiting': values[0].rating,
				    'wineVarietal': values[0].varietal,
				    'wineType': values[0].type,
				    'wineVineyard': values[0].vineyard,
				    'wineBio': values[0].organic
				    
				};
			}
		
				return (

	    			<WineEdit
	    				wineId={wineInfo.wineId} 
	    				userKey={wineInfo.userKey} 
	    				wineName={wineInfo.wineName}
		    			wineRegion={wineInfo.wineRegion}
		    			wineYear={wineInfo.wineYear}
		    			wineRaiting={wineInfo.wineRaiting}	
		    			wineVarietal={wineInfo.wineVarietal}				
		    			wineType={wineInfo.wineType}				
		    			wineVineyard={wineInfo.wineVineyard}
		    			wineBio={wineInfo.wineBio}			
	    			/>
	    		)
		

	} 
		

		return (

		<div className="row">

			<div className="wrapper small-6 large-centered columns">
				  	<div>			  	
				  		<div className="">
							<h1 className="text-center main-title">
								Edit your Wine			
							</h1>					
							{renderForm()}	 
						</div>	    	
				  	</div>              

			</div>	

		</div>

		);	
	}
};




export default WineFields;

