import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
	return(
		<nav style={{background: 'transparent'}}>
			<div className="nav-wrapper">
				<a href="/" className="center brand-logo">
					Winters
				</a>
				<ul className="right">
					<li>
						<a href="/about">
							About
						</a>
					</li>
					<li>
						<a href="/artgallery">
							Art Gallery
						</a>
					</li>
					<li>
						<Link to="/devgallery">
							Developer Gallery
						</Link>
					</li>
					<li>
						<a href="/poems">
							Poems
						</a>
					</li>
					<li>
						<Link to="/contact">
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
