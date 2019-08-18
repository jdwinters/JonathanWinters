import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css";
import '../css/Poems.css';

//Link to Linked In
//Make Resume Downloadable
class Poems extends Component {
	componentDidMount(){
		document.addEventListener('DOMContentLoaded', function() {
	       var elems = document.querySelectorAll('.collapsible');
		   var options = {
		   };
	       var instances = M.Collapsible.init(elems, options);
  		});
	}
	render(){
		return(
			<ul className="collapsible no-shadows">
			    <li>
			      <div className="collapsible-header"><i className="material-icons">filter_drama</i>The UI of Flung Springs</div>
			      <div className="collapsible-body"><span className="black-text">Anticipation itself is waiting <br/>
													The feeling of elation is propagating <br/>
													The air<br/>
													The lungs<br/>
													The spring entitles one to feel flung<br/>
													Up on a cloud of doubtless happiness<br/>
													Yet a cloud does dissipate<br/>
													A fountain is made from the sky<br/>
													Watering those who have less<br/>
													Found hydration does satiate<br/>
													Only when she comes West</span></div>
			    </li>
			    <li>
			      <div className="collapsible-header"><i className="material-icons">place</i>Second Poem</div>
			      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
			    </li>
			    <li>
			      <div className="collapsible-header"><i className="material-icons">whatshot</i>Third Poem</div>
			      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
			    </li>
		  </ul>
		);
	}
};

export default Poems;
