import React, {Component} from 'react'
//var {Link} = require('react-router');
import LocalStorage from 'LocalStorage'
import Fields from 'Fields'
import firebase, { auth, provider } from 'Firebase';



class WineFields extends Component {

	constructor(props) {    /* Note, is possible passed pros into the constructor in order to be used constructor(props)super(props)*/ 
        super(props)

        this.login = this.login.bind(this); 
  		this.logout = this.logout.bind(this); 

        this.state = {
	      currentItem: '',
	      username: '',
	      items: [],
	      user: null 
		}
    }

	handleChange(e) {
	  /* ... */
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

			if(params.id){
			//es6 substring()
			if(params.id.startsWith("-")){
				var fireWine = LocalStorage.getFireWines();
				var values = fireWine.filter(function (el){
        		if(el.id == params.id){
        			return true
        		} else {
        			return false 
        			console.log('error in bind name')
        		}

    		});

				//string.replace( /\[\d+\]/g, '[newvalue]');

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
        			return false 
        			console.log('error in bind name')
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

			<div className="wrapper small-6 large-centered columns">

				{/*<h1 className="text-center subheader">Wine Searcher Auth</h1>*/}

				{/*{this.state.user ?	*/}  	
				  	<div>
				  		<button onClick={this.logout}>{/*Log Out*/}</button>
				  		<div className="">
							<h1 className="text-center main-title">
								Write down your wine			
							</h1>					
							{renderForm()}	 
						</div>	    	
				  	</div>              
				  {/* :*/}
				   <div className="small-9 columns social">
				   	<button className="button social-btn" onClick={this.login}>Google Sign In</button>              
				   	<button className="button social-btn" >Facebook Sign In</button>              
				   </div>
				  {/*}*/}

			</div>	

		</div>

		);	
	}
};

// var btn-fb = {
// 	color:'white',
// 	backgroundColor:'blue',
// 	style={}
// };



export default WineFields;





