import React, {Component} from 'react'
import {ref} from 'Firebase'



class Fields extends Component {

	constructor (props) {
	    super(props)
	    let key = props.userKey;
	    this.state = {
      		
    	}

		this.dbWine = ref.child('/users/'+key);
	    this.editWine = this.editWine.bind(this);

	  }

	  	onClick(e){
    		setTimeout(function(){ window.location.hash = '#/appcrud'; }, 2000);	
  		}

		editWine (event) {
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
		    
			
			if (wineInfo.name.length !== 0) {
				var { wineId } = this.props;
				console.log(this.dbWine, 'id update');
      			//this.dbWine.push(wineInfo);
      			var updates = {};
      			var newPostKey = this.dbWine.push().key;
      			this.dbWine.child(wineId)
        			.update(wineInfo);
        		updates[wineId] = wineInfo;

        		return this.dbWine.update(updates);

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
			selectOptions.push("White Wine","Rosè Wine", "Red Wine");
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

			<form onSubmit={(e) => this.editWine(e)}>
	
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

				<button onClick={this.onClick.bind(this)} type="submit" className="button-circle button-add"><i className="fa fa-check"></i></button>
			</form>
			 
		</div>

		)	
	}
}



export default Fields;



