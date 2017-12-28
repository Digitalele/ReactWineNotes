import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'

// var Nav = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <h2>Nav Component</h2>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Wine</IndexLink>
//         <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//         <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//       </div>
//     );
//   }
// });

class Nav extends Component {

  constructor () {
      super()
      this.onSearch = this.onSearch.bind(this)
    }

  onSearch (e) {
    e.preventDefault();
    //navigation search get value
    var location = this.refs.search.value;
    //encoding for trim spaces
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.search.value = '';
      //url root
      window.location.hash = '#/?location=' + encodedLocation;
    }

  }

  render () {
     return (
     <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">  
           <li className="menu-text">Wine Note App</li> 
            <li>  
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Wine</IndexLink>              
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
            <li>
              <Link to="/appcrud" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Crud</Link>
            </li>
          </ul>    
        </div>
        <div className="top-bar-right">
           <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input type="search" placeholder="Search wine" ref="search"/>
                </li> 
                <li>
                  <input type="submit" className="button" value="Get Wine"/>
                </li>   
              </ul>
           </form> 
        </div>
     </div>
    );
  }
}

export default Nav;

