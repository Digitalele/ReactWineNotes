import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Modal extends Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div>
          <div className="callout success">
            <p>Your Wine was added!</p>
          </div>
      </div>
    )
  }
}


export default Modal;