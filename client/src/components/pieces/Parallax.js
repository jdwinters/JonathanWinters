import React, { Component } from 'react';
import M from "materialize-css";
import '../../css/Parallax.css';

class Parallax extends Component{
	componentDidMount(){
		document.addEventListener('DOMContentLoaded', function() {
	    var elems = document.querySelectorAll('.parallax');
		var options = {};
	    var instances = M.Parallax.init(elems, options);
  		});
	}

    render(){
        return(
            <div className="parallax-container">
                <div className="valign-wrapper h100">
                    <h1 className="overlay center-align" style={{color: 'white'}}>
                        <a className="center-align" href="#" ><img src={this.props.logoInstance} width={200} height={100} style={{marginTop: 10, marginBottom: 0}}/></a>
                        <p>{this.props.scrollTitle}</p>
                    </h1>        
                </div>
                <div className="parallax" id="standard-background">
                    <img src="https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80" />
                </div>
            </div>
        );
    }

}

export default Parallax;