import React, {Component} from 'react';

var marginTop = {
  marginTop: "20px"
};

class About extends Component {
    render() {
        return (
        	

			<div className="small-6 small-centered">
				
				<h3 className="text-center page-title">About WineNoteApp</h3>

				<div className="callout secondary large">
				<div className="small-4 small-centered">
				
				</div>
					<div style={marginTop} className="small-centered">
		       	    	<div>
						  	
						<p className="text-center">WineNoteApp is a full-stack application made by <a href="https://digitalele.github.io/">Gabriele Dolfi</a> with a <strong>sip of organic wine and love.</strong></p>

						<ul>
							<li>
								Front-end: <strong>React.js, Firebase, Foundation.</strong> 
							</li>
							<li>
								Back-end: <strong>Node.js, Express.js, Mongodb.</strong> 
							</li>
							<li>
								Powered by: <strong>Debian 8 Jessie 64-bit.</strong> 
							</li>
							<li>
								Served by: <strong>Nginx reverse proxy.</strong> 
							</li>
							<li>
								Source code: <strong><a href="https://github.com/Digitalele/ReactWineNotes">Front-end</a> - <a href="https://github.com/Digitalele/WineNotesApi">Back-end</a>.</strong> 
							</li>
						</ul>

						<div className="text-center">
							<i style={icon} className="devicon-html5-plain"></i>
							<i style={icon} className="devicon-css3-plain"></i>
							<i style={icon} className="devicon-foundation-plain-wordmark"></i>
							<i style={icon} className="devicon-react-original-wordmark"></i>
							<i style={icon} className="devicon-nodejs-plain-wordmark"></i>			
							<i style={icon} className="devicon-mongodb-plain-wordmark"></i>
							<i style={icon} className="devicon-nginx-original"></i>
							<i style={icon} className="devicon-debian-plain"></i>
									
						</div>

					</div>
						
					</div>
				</div>
			</div>
        );
    }

}

const icon = {
  fontSize: '42px',
  color: '#ff4343',
  margin: '20px 25px 0 0'
};

export default About;





  

