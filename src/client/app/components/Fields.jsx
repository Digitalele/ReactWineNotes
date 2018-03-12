import React, {Component} from 'react'
import Modal from 'Modal'
import {ref} from 'Firebase'



class Fields extends Component {

	constructor () {
	    super()

	    this.state = {
      		showReply: false
    	}

		this.dbWine = ref.child('wines');
	    this.createWine = this.createWine.bind(this);

	  }

	  	onClick(e){
    		this.setState({showReply: !this.state.showReply});
    		setTimeout(function(){ window.location.hash = '#/appcrud'; }, 1000);	
  		}

		createWine (event) {
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
		      organic: this.organic.value
		    }
		    
		    console.log(wineInfo);
			
			if (wineInfo.name.length !== 0) {
      			this.dbWine.push(wineInfo);

			} else {
				console.log("name cant be empty")
			}
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

			console.log(wineBio, 'checkbox');

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
							defaultChecked={wineBio}
							value={wineBio}
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

				<button onClick={this.onClick.bind(this)} type="submit" className="button-circle button-add"><i className="fa fa-plus"></i></button>
				{this.state.showReply && < Modal / >}
			</form>
			 
		</div>

		)	
	}
}



export default Fields;








// <div className="large-3 columns">
					// 	<h3 className="text-center page-title">Wine type</h3>
					// 	<input ref={(input) => (this.type = input)} type="text" defaultValue={wineType} placeholder="Type"/>
					// </div>

// var array = ['A', 'B', 'C']; // Test
			// var search_term = 'B';

			// for (var i=array.length-1; i>=0; i--) {
			//     if (array[i] === search_term) {
			//         array.splice(i, 1);
			//         // break;       //<-- Uncomment  if only the first term has to be removed
			//     }
			// }

//push with key firebase, set without
// if (wineInfo.name.length !== 0) {
//       			this.dbWine.child(wineInfo.name).push({
// 					wineInfo
//      			 });

