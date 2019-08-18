import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Link to Linked In
//Make Resume Downloadable
class Contact extends Component {
	render(){
		return(
			<div className="container">
				<div className="row">
					<form className="col s12">
						<div className="row">
							<div className="col s6 m6">
								<div className="input-field">
									<input id="name" type="text" className="validate" />
									<label htmlFor="name">Name</label>
								</div>
							</div>
							<div className="col s6 m6">
								<div className="input-field">
									<input id="email" type="text" className="validate" />
									<label htmlFor="email">Email</label>
								</div>
							</div>	
							
						</div>		
						<div className="row">
							<div className="input-field col s12 m12">
								<textarea id="email_message" className="materialize-textarea"></textarea>
								<label htmlFor="email_message">Message</label>
							</div>					
						</div>		
						<div className="row">
							<div className="col s12 m12">
							<button className="right btn waves-effect waves-light" type="submit" name="action">Send
								<i className="material-icons right">send</i>
							</button>
							</div>
						</div>								
					</form>			
				</div>			
			</div>
			
		);
	}
};

export default Contact;
