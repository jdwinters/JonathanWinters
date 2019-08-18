import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll"
import M from "materialize-css";
import '../../css/Header.css';

class Header extends Component {
	componentDidMount(){
		document.addEventListener('DOMContentLoaded', function() {
		   var elems = document.querySelectorAll('.sidenav');
		   var options = {
			edge: 'right'
		   }
	       var instances = M.Sidenav.init(elems, options);
  		});
	}
	render(){
		const scrollToTop = () => { scroll.scrollToTop(); };
		return(
			<div>
				
				<div className="navbar-fixed">
				
					<nav className="no-shadows nav-center" style={{backgroundColor: '#476650', marginBottom: 5 }}>
							
						<div className="nav-wrapper">
							<div className="left brand-logo hide-on-med-and-down">
									<img src="https://i.imgur.com/nJaGPaF.png" width={90} height={45} style={{marginTop: 10, marginLeft: 18}}/>
							</div>
							<a onClick={scrollToTop} className="center brand-logo sidenav-trigger" data-target="mobile-demo" style={{ margin: 0, marginTop: 10}}>
								<img src="https://i.imgur.com/nJaGPaF.png" width={75} height={37.5}/>
							</a>
							<ul className="center-align hide-on-med-and-down">
								<li>
									<Link name="about" offset={-64} to="about" smooth={true} duration= {500}>
										About
									</Link>
								</li>
								<li>
									<Link to="devgallery" offset={-64} smooth={true} duration= {500}>
										Developer Gallery
									</Link>
								</li>
								<li>
									<Link to="artgallery" offset={-64} smooth={true} duration= {500}>
										Art Gallery
									</Link>
								</li>
								<li>
									<Link to="poems" offset={-64} smooth={true} duration= {500}>
										Poems
									</Link>
								</li>
								<li>
									<Link to="contact" offset={-64} smooth={true} duration= {500}>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				
				<ul className="sidenav grey darken-4 darken-4" id="mobile-demo">
					<li><Link className="white-text" to="about" offset={-64} smooth={true} duration= {500}>About</Link></li>
					<li><Link className="white-text" to="about" to="devgallery" offset={-64} smooth={true} duration= {500}>Development Gallery</Link></li>
					<li><Link className="white-text" to="about" to="artgallery" smooth={true} duration= {500}>Art Gallery</Link></li>
					<li><Link className="white-text" to="about" to="poems" offset={-64} smooth={true} duration= {500}>Poems</Link></li>
					<li><Link className="white-text" to="about" to="contact" offset={-64} smooth={true} duration= {500}>Contact</Link></li>
				</ul>
			</div>
			
		);
	}
};

export default Header;
