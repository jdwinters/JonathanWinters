import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './pieces/Header';
import Home from './Home';
import ArtGallery from './ArtGallery';
import DevGallery from './DevGallery';
import Contact from './Contact';
import Poems from './Poems';
import About from './About';

class App extends Component {

	render(){
		return(
			<BrowserRouter>
				<body>
					<Header />
					<main>
						<Route exact path="/" component={Home} />
						<Route exact path="/artgallery" component={ArtGallery} />
						<Route exact path="/devgallery" component={DevGallery} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/poems" component={Poems} />
						<Route exact path="/about" component={About} />
					</main>
				</body>
			</BrowserRouter>
		);
	}
};

export default App;
