import React, { Component } from 'react';
import '../css/About.css';

//Basically an About Me Page
class About extends Component {
	render(){
		return(
			<div id="about-block">
				<div id="aboutComponent" className="row">
					<div className="col s8 offset-s2 m10 offset-m1">
						<p className="center-align" style={{color: 'white'}}>Jon Winters is a recent graduate with a degree in computer science: game design.
							He is a digital illustrator, developer, and technical artist. Professionally, he is a web developer who is looking for clients 
							who want not only a website, but also UX best practices implemented into the development process.
						</p>
					</div>			
				</div>
				<div className="row container" style={{marginBottom: 0}}>
					<a className="waves-effect waves-teal btn-flat white-text col s4 m2 offset-m3 center">HTML</a>
					<a className="waves-effect waves-teal btn-flat white-text col s4 m2 center">CSS</a>
					<a className="waves-effect waves-teal btn-flat white-text col s4 m2 center flow-text">javascript</a>
				</div>
				<div className="row container" style={{marginBottom: 0}}>
					<a className="waves-effect waves-teal btn-flat white-text col s4 m2 offset-m3 center">React</a>
					<a className="waves-effect waves-teal btn-flat white-text col s4 m2 center">.NET</a>
					<a className="waves-effect waves-teal btn-flat white-text col s4 m2 center flow-text">WebGL</a>
				</div>
				<div className="row container" style={{marginBottom: 0}}>
					<a className="waves-effect waves-teal btn-flat white-text col s4 m2 offset-m3 center">C#</a>
					<a className="waves-effect waves-teal btn-flat white-text col s4 m2 center">C++</a>
					<a className="waves-effect waves-teal btn-flat white-text col s4 m2 center flow-text">C</a>
				</div>
				<div className="row container">
					<a className="waves-effect waves-teal btn-flat white-text col s4 m2 offset-m3 center">Unreal</a>
					<a className="waves-effect waves-teal btn-flat white-text col s4 m2 center">Unity</a>
					<a className="waves-effect waves-teal btn-flat white-text col s4 m2 center flow-text">VR/AR</a>
				</div>
			</div>

			
		);
	}
};

export default About;