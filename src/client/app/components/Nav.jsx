import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'
import firebase, { auth, provider } from 'Firebase';

class Nav extends Component {

  constructor () {
      super()

      // this.onSearch = this.onSearch.bind(this);
      this.login = this.login.bind(this); 
      this.logout = this.logout.bind(this); 

        this.state = {
        username: '',
        user: null 
      }
    }

    componentDidMount() {
      auth.onAuthStateChanged((user) => {
        if (user) {
        this.setState({ user });
        } 
      });
    }

    login() {
    auth.signInWithPopup(provider) 
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

    logout() {
    setTimeout(function(){ window.location.hash = '#/'; }, 500);
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  render () {
     return (
     <div className="top-bar-trasp">
        <div className="top-bar-left">
          <ul className="menu">  
           <li ><img style={logo} src="public/imgs/grapes.png"/></li>  
          </ul>    
        </div>
        <div className="top-bar-right">
         
              <ul className="menu">

                  <li>  
                    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Wine</IndexLink>              
                  </li>

                  <li>
                    <Link to="/appcrud" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Wines</Link>
                  </li>

                  <li>
                    <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                  </li>       

                  {this.state.user ? 

                  <span>
                    <li>
                      <Link to="/user" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>User</Link>
                    </li> 

                    <li>
                      <button className="button" onClick={this.logout}>Log Out</button>
                    </li>
                  </span>

                   :
                   <li>
                    <button className="button" onClick={this.login}>Google Sign In</button>  
                  </li> 
                  }             
              </ul>

        </div>
     </div>
    );
  }
}

const logo = {
  width: '60px',
  padding: '8px',
  border:'2px solid #FF7B7B',
  borderRadius:'50%',
  margin:'0 0 0 15px',
};

export default Nav;

