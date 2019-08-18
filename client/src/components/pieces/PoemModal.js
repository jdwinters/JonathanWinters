import React, { Component } from 'react';
import M from "materialize-css";

class PoemModal extends Component {
    constructor(props, state){
        super(props);
        this.state = {
        };
    }
	componentDidMount(){
		document.addEventListener('DOMContentLoaded', function() {
	       var elems = document.querySelectorAll("[id^='poemModal1']");
		   var options = {
			   fullWidth: true
		   };
	       var poemModalInstances = M.Modal.init(elems, options);
  		});
	}
	render(){
		//client/src/art/cultbarn.png
		return(
			<div className="modal center" id="poemModal1" style={{backgroundColor: "#121716"}}>
                <div className="modal-content center" style={{padding: 0}}>
                    <img src={this.props.modalPoemImg} style={{maxHeight: 450, maxWidth: 300}}/>
                </div>

            </div>
				
		);
	}
}


export default PoemModal;