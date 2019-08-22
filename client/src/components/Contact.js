import React, { Component } from 'react';
import axios from 'axios';

//Link to Linked In
//Make Resume Downloadable
class Contact extends Component {
	resetForm(){
        document.getElementById('contact-form').reset();
    }
	handleSubmit(e){
		const that = this;
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
		const message = document.getElementById('message').value;
		if(process.env.NODE_ENV === 'production'){
			process.env.baseURL + "/send";
		}else{
			//in dev
			currentENV = "http://localhost:5000/send";
		}
        axios({
            method: "POST", 
            url:currentENV, 
            data: {
                name: name,   
                email: email,  
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                that.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.");
            }else if(response.data.msg === 'sending'){
				alert("Message is sending.");
				that.resetForm();
			}
        })
	}
	
	render(){
		return(
			<div className="container" style={{marginTop: 5}}>
				<div className="row">
					<form id="contact-form" className="col s12" onSubmit={this.handleSubmit.bind(this)} method="POST" action="send">
						<div className="row">
							<div className="col s6 m6">
								<div className="input-field">
									<input id="name" type="text" className="validate white-text" />
									<label htmlFor="name">Name</label>
								</div>
							</div>
							<div className="col s6 m6">
								<div className="input-field">
									<input id="email" type="text" className="validate white-text" />
									<label htmlFor="email">Email</label>
								</div>
							</div>	
							
						</div>		
						<div className="row">
							<div className="input-field col s12 m12">
								<textarea id="message" className="materialize-textarea white-text"></textarea>
								<label htmlFor="message">Message</label>
							</div>					
						</div>		
						<button className="right btn waves-effect waves-light" type="submit" name="action">Send
							<i className="material-icons right">send</i>
						</button>								
					</form>			
				</div>			
			</div>
			
		);
	}
};

export default Contact;
