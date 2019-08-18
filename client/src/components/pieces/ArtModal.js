import React, { Component } from 'react';
import M from "materialize-css";

class ArtModal extends Component {
    constructor(props, state){
        super(props);
        this.state = {
        };
    }
	componentDidMount(){
		document.addEventListener('DOMContentLoaded', function() {
	       var elems = document.querySelectorAll("[id^='artModal1']");
		   var options = {
			   fullWidth: true
		   };
	       var artModalInstances = M.Modal.init(elems, options);
  		});
	}
	render(){
		//client/src/art/cultbarn.png
		return(
			<div className="modal center" id="artModal1" style={{backgroundColor: "#121716"}}>
                <div className="modal-content center" style={{padding: 0}}>
                    <img src={this.props.modalArtImg} style={{maxHeight: 600, maxWidth: 450}}/>
                </div>

            </div>
				
		);
	}
}


export default ArtModal;