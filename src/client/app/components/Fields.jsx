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

			console.log(this.props);

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
					<div className="large-4 columns">	
						
						 <label>
						 <h3 className="text-center page-title">Wine Name</h3>
						<input ref={(input) => (this.name = input)} type="text" defaultValue={wineName} placeholder="Name" />
						 </label>
					</div>
					<div className="large-4 columns">		
						<h3 className="text-center page-title">Wine Region</h3>
						<input ref={(input) => (this.region = input)} type="text" defaultValue={wineRegion} placeholder="Region"/>
					</div>

					<div className="large-4 columns">
						<h3 className="text-center page-title">Wine Year</h3>
						<input ref={(input) => (this.year = input)} type="text" defaultValue={wineYear} placeholder="Year"/>
					</div>
				</div>

				<div className="row">
					<div className="large-3 columns">
						<h3 className="text-center page-title">Wine Raiting</h3>
						<input ref={(input) => (this.raiting = input)} type="text" defaultValue={wineRaiting} placeholder="Raiting"/>
					</div>
					<div className="large-3 columns">
						<h3 className="text-center page-title">Wine Varietal</h3>
						<input ref={(input) => (this.varietal = input)} type="text" defaultValue={wineVarietal} placeholder="Varietal"/>
					</div>
					<div className="large-3 columns">	
						<h3 className="text-center page-title">Wine Type</h3>
						<select ref={(input) => (this.type = input)}>
					         <option value={wineType}>{wineType}</option>
					         {selectOptionsList}
					    </select>
					</div>
					<div className="large-3 columns">
						<h3 className="text-center page-title">Wine Vineyard</h3>
						<input ref={(input) => (this.vineyard = input)} type="text" defaultValue={wineVineyard} placeholder="Vineyard"/>
					</div>
				</div>
				<div className="row">
					<div className="large-12 columns">
						<h3 className="text-center page-title">Personal Notes</h3>
						<textarea ref={(input) => (this.notes = input)} placeholder="write your personal notes"></textarea>
					</div>
				</div>
				<div className="row">
					<div className="large-12 columns">
						<h3 className="text-center page-title">Bio</h3>
					
						<input
			            ref={(input) => (this.organic = input)} 
			            type="checkbox"
						defaultChecked={wineBio}
					
			            />
        			
					</div>
				</div>
					<button onClick={this.onClick.bind(this)} type="submit" className="button">Add Wine</button>
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

