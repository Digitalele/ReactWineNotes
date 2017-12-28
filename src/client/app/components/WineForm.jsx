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
						<input type="search" ref="location" placeholder="Search"/>
					</form>	
				</div>
			
		);
	}
}

export default WineForm;

// value={this.state.value}
//         onChange={this.handleChange} onSubmit
//<button className="button expanded hollow">Get Wine</button>
//this.refs.location.value = ''; // clear value

