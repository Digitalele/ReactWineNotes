import React, {Component} from 'react'
import Modal from 'Modal'
import ModalError from 'ModalError'
import {ref, auth, provider} from 'Firebase'

class Fields extends Component {

	constructor (props) {
	    super(props)
	    this.state = {
      		showReply: false,
      		showReplyError: false,
      		isChecked: this.props.wineBio

    	}
		this.dbWine = ref.child('wines');
	    this.createWine = this.createWine.bind(this);

	    //checkbox
	    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);

	  }

	 componentDidMount() {
	  	auth.onAuthStateChanged((user) => {
	    	if (user) {
	     		this.setState({ user });
	     		//create instance for db wine users 
	     		this.dbWineUser = ref.child('users/'+this.state.user.uid);
	    	} 
	  	});
	  }

	 handleCheckboxChange(event) { 
	 	console.log("checkbox changed!", event, this.state.isChecked);
        this.setState({isChecked: event.target.checked});
        
    }

	createWine(event) {
		    event.preventDefault()
		    console.log('add new wine')
		    const wineInfo = {
		      name: this.name.value,
		      region: this.region.value,
		      year: this.year.value,
		      raiting: this.raiting.value,
		      type: this.type.value,
		      varietal: this.varietal.value,
		      notes: this.notes.value,
		      organic: this.organic.checked
		    }
		    
			
			if (wineInfo.name.length !== 0) {
				
				
				console.log(this.state.isChecked, 'final');

				console.log(this.state.user.uid, 'user in key');
				//push wine in user
				this.dbWineUser.push(wineInfo);

				//push wine in general db wine
      			this.dbWine.push(wineInfo);

      			this.setState({showReply: !this.state.showReply});
      			setTimeout(function(){ window.location.hash = '#/appcrud'; }, 1000);

			} else {
				this.setState({showReplyError: !this.state.showReplyError});
				console.log("name cant be empty")
			}
		}

		 //unomunt bind firebase
    componentWillUnmount() {
        this.dbWine.off();
    }

	render () {

		var {wineName, 
			wineRegion, 
			wineYear, 
			wineRaiting, 
			wineVarietal, 
			wineType, 
			wineVineyard,
			wineBio } = this.props;

			const selectOptions = this.props.wineType.split(', ');
			selectOptions.push("White Wines","Rosè Wines", "Red Wines");
			//if props.winetype exist in array delete it for show the other item
			for (var i=selectOptions.length-1; i>=0; i--) {
				if (selectOptions[i] === wineType) {
					selectOptions.splice(i, 1);
			   }
			}
		    // Generate list of options
		    const selectOptionsList = selectOptions.map((selectOption, index) => {
		      return <option key={index} value={selectOption}>{selectOption}</option>
		    });

		return (

		<div>

			<form onSubmit={(e) => this.createWine(e)}>
	
				<div className="row">
				  <div className="columns">
				   	<div className="accordion">
					  <input id="toggle1" type="radio" className="accordion-toggle" name="toggle" />
					  <label htmlFor="toggle1"><h3 className="acc-title">Wine Name</h3></label>
					  <section>
					    <input ref={(input) => (this.name = input)} type="text" defaultValue={wineName} placeholder="Name" />
					  </section>
					</div>

					<div className="accordion">
					  <input id="toggle2" type="radio" className="accordion-toggle" name="toggle" />
					  <label htmlFor="toggle2"><h3 className="acc-title">Wine Region</h3></label>
					  <section>
					    <input ref={(input) => (this.region = input)} type="text" defaultValue={wineRegion} placeholder="Region"/>
					  </section>
					</div>

					<div className="accordion">
					  <input id="toggle3" type="radio" className="accordion-toggle" name="toggle" />
					  <label htmlFor="toggle3"><h3 className="acc-title">Wine Year</h3></label>
					  <section>
					    <input ref={(input) => (this.year = input)} type="date" defaultValue={wineYear} placeholder="Year"/>
					  </section>
					</div>

					<div className="accordion">
					  <input id="toggle4" type="radio" className="accordion-toggle" name="toggle" />
					  <label htmlFor="toggle4"><h3 className="acc-title">Wine Raiting</h3></label>
					  <section>
					    <input ref={(input) => (this.raiting = input)} type="number" defaultValue={wineRaiting} placeholder="Raiting"/>
					  </section>
					</div>

					<div className="accordion">
					  <input id="toggle5" type="radio" className="accordion-toggle" name="toggle" />
					  <label htmlFor="toggle5"><h3 className="acc-title">Wine Varietal</h3></label>
					  <section>
					    <input ref={(input) => (this.varietal = input)} type="text" defaultValue={wineVarietal} placeholder="Varietal"/>
					  </section>
					</div>

					<div className="accordion">
					  <input id="toggle6" type="radio" className="accordion-toggle" name="toggle" />
					  <label htmlFor="toggle6"><h3 className="acc-title">Wine Type</h3></label>
					  <section>
					    <select ref={(input) => (this.type = input)}>
						         <option value={wineType}>{wineType}</option>
						         {selectOptionsList}
						</select>
					  </section>
					</div>

					<div className="accordion">
					  <input id="toggle7" type="radio" className="accordion-toggle" name="toggle" />
					  <label htmlFor="toggle7"><h3 className="acc-title">Wine Vineyard</h3></label>
					  <section>
					    <input ref={(input) => (this.vineyard = input)} type="text" defaultValue={wineVineyard} placeholder="Vineyard"/>
					  </section>
					</div>

					<div className="accordion">
					  <input id="toggle8" type="radio" className="accordion-toggle" name="toggle" />
					  <label htmlFor="toggle8"><h3 className="acc-title">Organic</h3></label>
					  <section>
					    <input
				            ref={(input) => (this.organic = input)} 
				            type="checkbox"
				            onChange={this.handleCheckboxChange}

							defaultChecked={this.state.isChecked}
							checked={this.state.isChecked}
						
				            />
					  </section>
					</div>

					<div className="accordion">
					  <input id="toggle9" type="radio" className="accordion-toggle" name="toggle" />
					  <label htmlFor="toggle9"><h3 className="acc-title">Personal Notes</h3></label>
					  <section>
					    <textarea ref={(input) => (this.notes = input)} placeholder="write your personal notes"></textarea>
					  </section>
					</div>

				  </div>
				</div>

				<button type="submit" className="button-circle button-add"><i className="fa fa-plus"></i></button>
				{this.state.showReply && < Modal / >}
				{this.state.showReplyError && < ModalError / >}
			</form>
			 
		</div>

		)	
	}
}



export default Fields;



