import React, {Component} from 'react'
import PropTypes from 'prop-types';

class ModalError extends Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div>
          <div className="callout error">
            <p>You need to write the name of the wine!</p>
          </div>
      </div>
    )
  }
}


export default ModalError;