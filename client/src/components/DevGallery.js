import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Link to github: https://github.com/jdwinters
//Link to WindowPane: https://windowpanegame.com/
//Include Youtube Videos:
//Project Descriptions
class DevGallery extends Component {
	render(){
		return(
			<div>
				<div className="row">
					<div className="card medium col s4">
					    <div className="card-image waves-effect waves-block waves-light">
					      <img className="activator" src="https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
					    </div>
					    <div className="card-content">
					      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
					      <p><a href="#">This is a link</a></p>
					    </div>
					    <div className="card-reveal">
					      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
					      <p>Here is some more information about this product that is only revealed once clicked on.</p>
					    </div>
				  </div>
				  <div className="card medium col s4">
					  <div className="card-image waves-effect waves-block waves-light">
						<img className="activator" src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
					  </div>
					  <div className="card-content">
						<span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
						<p><a href="#">This is a link</a></p>
					  </div>
					  <div className="card-reveal">
						<span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
						<p>Here is some more information about this product that is only revealed once clicked on.</p>
					  </div>
				</div>
				<div className="card medium col s4">
					<div className="card-image waves-effect waves-block waves-light">
					  <img className="activator" src="https://images.pexels.com/photos/132472/pexels-photo-132472.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
					</div>
					<div className="card-content">
					  <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
					  <p><a href="#">This is a link</a></p>
					</div>
					<div className="card-reveal">
					  <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
					  <p>Here is some more information about this product that is only revealed once clicked on.</p>
					</div>
			  	</div>
			  </div>
			  <div className="row">
				  <div className="card medium col s4">
					  <div className="card-image waves-effect waves-block waves-light">
						<img className="activator" src="https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
					  </div>
					  <div className="card-content">
						<span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
						<p><a href="#">This is a link</a></p>
					  </div>
					  <div className="card-reveal">
						<span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
						<p>Here is some more information about this product that is only revealed once clicked on.</p>
					  </div>
				</div>
				<div className="card medium col s4">
					<div className="card-image waves-effect waves-block waves-light">
					  <img className="activator" src="https://images.pexels.com/photos/673857/pexels-photo-673857.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
					</div>
					<div className="card-content">
					  <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
					  <p><a href="#">This is a link</a></p>
					</div>
					<div className="card-reveal">
					  <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
					  <p>Here is some more information about this product that is only revealed once clicked on.</p>
					</div>
			  </div>
			  <div className="card medium col s4">
				  <div className="card-image waves-effect waves-block waves-light">
					<img className="activator" src="https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
				  </div>
				  <div className="card-content">
					<span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
					<p><a href="#">This is a link</a></p>
				  </div>
				  <div className="card-reveal">
					<span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
					<p>Here is some more information about this product that is only revealed once clicked on.</p>
				  </div>
			  </div>
			</div>
		</div>
		);
	}
};

export default DevGallery;
