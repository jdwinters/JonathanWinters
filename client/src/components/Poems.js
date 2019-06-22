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
			<ul class="collapsible">
			    <li>
			      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First Poem</div>
			      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
			    </li>
			    <li>
			      <div class="collapsible-header"><i class="material-icons">place</i>Second Poem</div>
			      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
			    </li>
			    <li>
			      <div class="collapsible-header"><i class="material-icons">whatshot</i>Third Poem</div>
			      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
			    </li>
		  </ul>
		);
	}
};

export default Poems;
