import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css";
import '../css/Home.css';

//Basically an About Me Page
class Home extends Component{
	componentDidMount(){
		document.addEventListener('DOMContentLoaded', function() {
	    var elems = document.querySelectorAll('.parallax');
		var options = {};
	    var instances = M.Parallax.init(elems, options);
  	});
	}
	render(){
		return(
			<div>
				<div class="parallax-container">
					<p class="white-text right-align header">
						some fucking words
					</p>
					<div class="valign-wrapper h100">
						<h1 class=" white-text overlay center-align">
							Another set of fucking words
						</h1>
			    		<div class="parallax">
							<img src="https://pbs.twimg.com/media/B2XTRwtCAAEnqlP.jpg:large" />
						</div>
					</div>
			    </div>
			      <div class="row container">
			        <h2 class="white-text header">Parallax</h2>
			        <p class="white-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
			      </div>
			    <div class="parallax-container">
			      <div class="parallax"><img src="https://pbs.twimg.com/media/B2XTRwtCAAEnqlP.jpg:large"/></div>
			    </div>
			</div>

		);
	}
};

export default Home;
