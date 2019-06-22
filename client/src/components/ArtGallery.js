import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from './pieces/Carousel';

class ArtGallery extends Component {
	render(){
		return(
			<Carousel className="center"/>
		);
	}
};

export default ArtGallery;
