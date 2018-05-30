import React, {Component} from 'react'

class Footer extends Component {

  constructor () {
      super()

    }

  render () {
     return (
    <div>
      <div className="small-12 small-centered text-center">
          <footer className="footer" style={mainFooter}>Crafted with <i className="fa fa-heart"></i> by Gabriele Dolfi</footer>
      </div>
    </div>
    );
  }
}

const mainFooter = {
  padding: '13px',
  background: '#ff4343',
  color:'white'
};

export default Footer;

