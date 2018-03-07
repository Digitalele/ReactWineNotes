import React, {Component} from 'react'
//var {Link} = require('react-router');
import LocalStorage from 'LocalStorage'
import WineEdit from 'WineEdit'
import firebase, { auth, provider, ref } from 'Firebase';

class WineFields extends Component {

	constructor(props) {    /* Note, is possible passed pros into the constructor in order to be used constructor(props)super(props)*/ 
        super(props)
        var {params} = this.props;
        this.login = this.login.bind(this); 
  		this.logout = this.logout.bind(this); 
  		 this.theWine = ref.child('wines');

        this.state = {
	      currentItem: '',
	      username: '',
	      items: [],
	      user: null 
		}

		var wineKey = this.theWine
			.child(params.id)
			.once('value')
			.then(function(snapshot) {
          		var upgradeData = snapshot.val();
          		console.log(upgradeData, 'data');
        });
    }

	handleChange() {
	  
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
			
			<div>

			</div>

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
								Edit your Wine			
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

