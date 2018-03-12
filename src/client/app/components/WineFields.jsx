import React, {Component} from 'react'
//var {Link} = require('react-router');
import LocalStorage from 'LocalStorage'
import Fields from 'Fields'
import firebase, { auth, provider } from 'Firebase';



class WineFields extends Component {

	constructor(props) {  
        super(props)

        this.login = this.login.bind(this); 
  		this.logout = this.logout.bind(this); 

        this.state = {
	      username: '',
	      user: null 
		}
    }

	handleChange(e) {
	  /* ... */
	}

	logout() {
		auth.signOut()
	    .then(() => {
	      this.setState({
	        user: null
	      });
	    });
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

	//
		componentDidMount() {
	  	auth.onAuthStateChanged((user) => {
	    	if (user) {
	     	this.setState({ user });
	    	} 
	  	});
	  }

	render () {

		var {params} = this.props;
		function renderForm() {

			if(params.id){
			if(params.id.startsWith("-")){
				var fireWine = LocalStorage.getFireWines();
				console.log(fireWine, 'firewine');
				var values = fireWine.filter(function (el){
					console.log(el.id, params.id);
        		if(el.id == params.id){
        			return true
        		} else {
        			console.log('error in bind name')
        			return false 
        			
        		}

    		});

				var wineInfo = {
				    // 'wineName': values[0].Appellation.Name,
				    'wineName': values[0].name.replace(/\./g,''),
				    'wineRegion': values[0].region,
				    'wineYear': values[0].year,
				    'wineRaiting': values[0].rating,
				    'wineVarietal': values[0].varietal,
				    'wineType': values[0].type,
				    'wineVineyard': values[0].vineyard,
				    'wineBio': values[0].organic
				};
				 
				return (

	    			<Fields 

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

			} else {

			var wine = LocalStorage.getWines();
			var values = wine.filter(function (el){
        		if(el._id == params.id){
        			return true

        		} else {
        			console.log('error in bind name')
        			return false 
        			
        		}

    		});

    		var wineInfo = {
				    'wineName': values[0].name.replace(/\./g,''),
				    'wineRegion': values[0].region,
				    'wineYear': values[0].year,
				    'wineRaiting': values[0].raiting,
				    'wineVarietal': values[0].varietal,
				    'wineType': values[0].type,
				    'wineVineyard': values[0].vineyard,
				    'wineBio': values[0].organic
				};
	    		return (

	    			<Fields 

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

    	}  else {return (<Fields/>)}

	} 
		

		return (

		<div className="row">

			<div className="wrapper small-8 large-centered columns">

			{this.state.user ?	
				  	<div>
				  		<div className="wrapper small-10 large-centered columns">
					  		<button onClick={this.logout}>{/*Log Out*/}</button>
					  		<div className="">
								<h1 className="text-center main-title">
									Write down your wine			
								</h1>					
								{renderForm()}	 
							</div>	
						</div>    	
				  	</div>              
				:

				   <div className="">
					   	<h1 className="page-title text-center main-title">You must login for save wines!</h1>

					   	<div className="small-8 large-centered columns">
					   		<button className="button social-btn" onClick={this.login}>Google Sign In</button>              
					   		<button className="button social-btn" >Facebook Sign In</button>
					   	</div>

					                 
				   </div>
				  }

			</div>	

		</div>

		);	
	}
};


export default WineFields;


 

