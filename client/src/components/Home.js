import React, { Component } from 'react';
import ArtGallery from "./ArtGallery";
import DevGallery from "./DevGallery";
import Contact from "./Contact";
import PoemCarousel from "./pieces/PoemCarousel"
import ArtCarousel from "./pieces/ArtCarousel"
import About from "./About";
import Header from "./pieces/Header";
import Parallax from "./pieces/Parallax";
import '../css/Home.css';


//Basically an About Me Page
class Home extends Component{
	
	render(){
		return(
			<div>
				
				<Header />
				<div id="about">
					<Parallax scrollTitle={"About"} logoInstance={"https://i.imgur.com/4f4oiHj.png"}/>
				</div>
				<About />
				<div id="devgallery">
					<Parallax scrollTitle={"Development Gallery"} logoInstance={"https://i.imgur.com/iqqIWfC.png"} />
				</div>
				<DevGallery />
				<div id="artgallery">
					<Parallax scrollTitle={"Poems"} logoInstance={"https://i.imgur.com/iqqIWfC.png"} />
				</div>
				<ArtGallery />
				<div id="poems">
					<Parallax scrollTitle={"Poems"} logoInstance={"https://i.imgur.com/iqqIWfC.png"} />
				</div>
				<PoemCarousel />
				<div id="contact">
					<Parallax scrollTitle={"Contact"} logoInstance={"https://i.imgur.com/iqqIWfC.png"} />
				</div>
				<Contact />
			</div>
			
			

		);
	}
};

export default Home;
