import React, { Component } from 'react';
import M from "materialize-css";
import '../../css/DevCarousel.css';

class DevCarousel extends Component {
	componentDidMount(){
		document.addEventListener('DOMContentLoaded', function() {
	       var elems = document.querySelectorAll("[id^='devCarousel']");
		   var options = {
		   };
	       var devInstances = M.Carousel.init(elems, options);
  		});
	}

	render(){
		//client/src/art/cultbarn.png
		return(
            <div style={{height: 257}}>
			<div className="carousel" id="devCarousel">
                    <div className="carousel-item card medium col s4 no-shadows carousel-card">
                        <div className="card-image waves-effect waves-block waves-light" >
                            <img className="activator" src="https://i.imgur.com/6RJgTFD.png" />
                        </div>
                        <div className="card-content carousel-card-content">
                            <span className="card-title activator white-text text-darken-4">Window Pane<i className="material-icons right">more_vert</i></span>
                            <p><a href="https://windowpanegame.com/">Window Pane Website</a></p>
                        </div>
                        <div className="card-reveal" style={{backgroundColor: '#fee4a6', color: 'black'}}>
                            <span className="card-title white-text text-darken-4">Window Pane<i className="material-icons right">close</i></span>
                            <p>Window Pane is a psychological adventure where you play as a student who is offered free housing in return for doing some experiemnts. Explore your new apartment as you unveil the events that are taking place around you. Are you really in control? Find out by downloading the executable (Coming to the website soon!) 
                            Window Pane is based on the MK Ultra experiments conducted by the CIA in the late 50s and 60s.</p>
                        </div>
                    </div>
                    <div className="carousel-item card medium col s4 no-shadows carousel-card">
                        <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="https://i.imgur.com/6tXj5Kf.png"/>
                        </div>
                        <div className="card-content carousel-card-content">
                        <span className="card-title activator white-text text-darken-4">3D WebGL Shader<i className="material-icons right">more_vert</i></span>
                        <p><a href="/webglexample">WebGL Example</a></p>
                        </div>
                        <div className="card-reveal" style={{backgroundColor: '#f9c4aa', color: 'black'}}>
                        <span className="card-title white-text text-darken-4">3D WebGL Shader<i className="material-icons right">close</i></span>
                        <p>Using Three.Js I created two cubes, one using Three.Js' cube mesh and the other I created by instancing each face mesh seperately and placing them together.
                            One's entire color can be changed by clicking, and the other has its faces change individually using right clicks.
                        </p>
                        </div>
                </div>
                <div className="carousel-item card medium col s4 no-shadows carousel-card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="https://i.imgur.com/lJe0oF3.png"/>
                    </div>
                    <div className="card-content carousel-card-content">
                        <span className="card-title activator white-text text-darken-4">GifFit<i className="material-icons right">more_vert</i></span>
                        <p>Work in progress</p>
                    </div>
                    <div className="card-reveal" style={{backgroundColor: '#f7f4e3', color: 'black'}}>
                        <span className="card-title white-text text-darken-4">GifFit<i className="material-icons right">close</i></span>
                        <p>An app to explain workouts for specific muscle using the ease of gifs</p>
                    </div>
                </div>
                    <div className="carousel-item card medium col s4 no-shadows carousel-card">
                        <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="https://i.imgur.com/35jzBlh.jpg"/>
                        </div>
                        <div className="card-content carousel-card-content">
                        <span className="card-title activator white-text text-darken-4">GuidEnts<i className="material-icons right">more_vert</i></span>
                        <p><a href="https://github.com/jdwinters/GuidEnts">Work in Progress</a></p>
                        </div>
                        <div className="card-reveal" style={{backgroundColor: '#d2e1c8', color: 'black'}}>
                        <span className="card-title white-text text-darken-4">GuidEnts<i className="material-icons right">close</i></span>
                        <p>An app to be a compilation of academic paths people have taken during their time in college.</p>
                        </div>
                </div>
                <div className="carousel-item card medium col s4 no-shadows carousel-card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="https://i.ibb.co/nCLNbNb/cultbarn.png"/>
                    </div>
                    <div className="card-content carousel-card-content">
                        <span className="card-title activator white-text text-darken-4">Cult of Ludic Arts<i className="material-icons right">more_vert</i></span>
                        <p>Work in progress</p>
                    </div>
                    <div className="card-reveal" style={{backgroundColor: '#fee4a6', color: 'black'}}>
                        <span className="card-title white-text text-darken-4">COLA<i className="material-icons right">close</i></span>
                        <p>A future website for a collective of digital artists known as the Cult of Ludic Arts</p>
                    </div>
                </div>
                <div className="carousel-item card medium col s4 no-shadows carousel-card">
                    <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="https://images.unsplash.com/photo-1453974336165-b5c58464f1ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"/>
                    </div>
                    <div className="card-content carousel-card-content">
                    <span className="card-title activator white-text text-darken-4">Inform7: Toni<i className="material-icons right">more_vert</i></span>
                    <p><a href="https://github.com/jdwinters/Inform7-Projects/archive/master.zip">Download</a></p>
                    </div>
                    <div className="card-reveal" style={{backgroundColor: '#f9c4aa', color: 'black'}}>
                    <span className="card-title white-text text-darken-4">Toni<i className="material-icons right">close</i></span>
                    <p>The tragic story about a woman whos past shattered her future told in the form of the interactive story framework, Inform7.</p>
                    </div>
                </div>
			</div>
            </div>
		);
	}
}


export default DevCarousel;