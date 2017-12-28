import React, {Component} from 'react'
import {Link} from 'react-router'

class Examples extends Component {
	render () {
		return (
		<div className="small-6 small-centered">
			<h3 className="text-center page-title">
				Wines	</h3>
				<p>
				Name:</p>
				<ol>
					<li>
						<Link to='/?location=Montalcino'>
							Montalcino
						</Link>
					</li>
					<li>
						<Link to='/?location=Vermentino'>
							Vermentino
						</Link>
					</li>
					
				</ol>
			</div>
		)	
	}
}

export default Examples;
