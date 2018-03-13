import React, {Component} from 'react';

class WineForm extends Component {

	  constructor () {
	    super()
	    this.onFormSubmit = this.onFormSubmit.bind(this)
	  }

	onFormSubmit (e) {
		e.preventDefault();//prevent reload page
		
		var location = this.refs.location.value;
		
		if (location.length > 0) {
			//search if value length > 0
			this.props.onSearch(location);
		} 
			//else clear output
		else if (location.length == 0) {
				this.props.onSearch(location);
			}
	}

	render () {
		return (
			
			<div className="small-6 small-centered">
				<form onChange={this.onFormSubmit}>
					<div className="container-input">
						<i className="fa fa-search icon fa-sm"></i>
						<input type="text" id="search" ref="location" placeholder="Search your wines.." autoComplete="off" />
					</div>
				</form>	
			</div>
			
		);
	}
}

export default WineForm;



