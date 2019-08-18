import React, { Component } from 'react';
import M from "materialize-css";
import '../../css/ArtCarousel.css';
import ArtModal from "./ArtModal";

class ArtCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0, holdImg: null};
        this.something = this.something.bind(this);
    }
    something(holdingImg){
        this.setState({holdImg: holdingImg });
    }
    
	componentDidMount(){  
        const that = this;
		document.addEventListener('DOMContentLoaded', function() {
           var elems = document.querySelectorAll("[id^='artCarousel']");
           var onCycleTo = function() {
               var activeIndicator = this.$indicators.find('.indicator-item.active')
               var i = activeIndicator.index();
               var holdImg = this.images[i].querySelector('img').getAttribute('src');
               that.something(holdImg);
               
           };
		   var options = {
               onCycleTo: onCycleTo,
               indicators: true
           };
           
	       var artInstances = M.Carousel.init(elems, options);
          });
    }
    
	render(){
		return(
            <div style={{height: 100}}>
                <div className="carousel" id="artCarousel">
                    <a href="#artModal1" className="carousel-item modal-trigger"><img src="https://i.imgur.com/lpFH0kC.png" /></a>
                    <a href="#artModal1" className="carousel-item modal-trigger"><img src="https://i.imgur.com/iucnj89.png" /></a>
                    <a href="#artModal1" className="carousel-item modal-trigger"><img src="https://i.imgur.com/JuGGA0P.png" /></a>
                    <a href="#artModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/hIqBV1b.png" /></a>
                    <a href="#artModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/2T6Qxqg.png" /></a>
                    <a href="#artModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/PklpyS2.png" /></a>
                    <a href="#artModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/lwHfN5Y.png" /></a>
                </div>
                <ArtModal modalArtImg={this.state.holdImg}/>
            </div>
            
				
		);
	}
}


export default ArtCarousel;
