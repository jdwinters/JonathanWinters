import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import M from "materialize-css";
import '../../css/Carousel.css';

class Carousel extends Component {
	componentDidMount(){
		// document.addEventListener('DOMContentLoaded', function() {
	    //    var elems = document.querySelectorAll('.carousel');
		//    var options = {
		// 	   indicators: true
		//    };
	    //    var instances = M.Carousel.init(elems, options);
  		// });
		M.AutoInit();
	}
	render(){
		return(
				<div className="carousel">
					<a className="carousel-item" href="#one!"><img src="https://images.pexels.com/photos/355296/pexels-photo-355296.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"/></a>
					<a className="carousel-item" href="#two!"><img src="https://images.pexels.com/photos/1579413/pexels-photo-1579413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/></a>
					<a className="carousel-item" href="#three!"><img src="https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/></a>
					<a className="carousel-item" href="#four!"><img src="https://images.pexels.com/photos/1158961/pexels-photo-1158961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/></a>
					<a className="carousel-item" href="#five!"><img src="https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500"/></a>
				</div>
		);
	}
}


export default Carousel;
