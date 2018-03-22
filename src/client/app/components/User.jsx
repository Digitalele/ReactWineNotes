import React, {Component} from 'react'
import {Link} from 'react-router'
import firebase, { auth } from 'Firebase';

class User extends Component {

	constructor() {  
        super()
           
        this.state = {
            dataList: [],
            user: null,
            username: '',
            email: '',
            pic: ''
        };
    }

    componentDidMount = () =>  {

        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ 
                    user,
                    username: user.displayName,
                    email: user.email,
                    pic: user.photoURL

                });
            } 
        });  
    } 

	render () {
		var {pic, username, email} = this.state;
		return (
			<div className="small-6 small-centered">
				
				<h3 className="text-center page-title">My profile</h3>

				<div className="callout secondary large">
				<div className="small-4 small-centered">
					<img style={img} src={pic} alt=""/>
				</div>
					<ul>
						<li>
							User: <strong>{username}</strong> 
						</li>
						<li>
							Email: <strong>{email}</strong> 
						</li>	
					</ul>
				</div>
			</div>
		)	
	}
}

const img = {
  width: '200px',
  borderRadius:100,
  marginBottom: '50px',
};

export default User;


{/*<Link to='/?location=Montalcino'>
								Montalcino
							</Link>*/}