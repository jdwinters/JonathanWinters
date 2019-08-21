import React, { Component } from 'react';
import '../css/About.css';

//Basically an About Me Page
class About extends Component {
	render(){
		return(
			
			<div id="aboutComponent" className="row">
				<div className="col s8 offset-s2 m10 offset-m1">
					<p className="center-align" style={{color: 'white'}}>Jon Winters is a recent graduate from the University of California, Santa Cruz with a degree in computer science: game design.
						He is an amateur digital illustrator, developer, and technical artist. Professionally, he is a web developer who is still building
						his personal portfolio and is looking for clients who want not only web development, but also UX best practices implemented into
						the development process.
					</p>
				</div>			
			</div>
		);
	}
};

export default About;