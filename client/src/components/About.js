import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Basically an About Me Page
const About = () => {
	return(
		<div className="center">
			<h2  style={{color: 'white'}}>Hi There</h2>
			<img style={{ height: '600px' }}src="https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/miguel-hero-168193507.jpg?itok=o-EKrRkB" />
		</div>
	);
};

export default About;
