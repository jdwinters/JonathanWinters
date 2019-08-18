import React, { Component } from 'react';
import M from "materialize-css";
import '../../css/PoemCarousel.css';
import PoemModal from "./PoemModal";

class PoemCarousel extends Component {
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
           var elems = document.querySelectorAll("[id^='poemCarousel']");
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
           
	       var poemInstances = M.Carousel.init(elems, options);
          });
    }
    
	render(){
		return(
            <div style={{height: 257}}>
                <div className="carousel" id="poemCarousel">
                    <a href="#poemModal1" className="carousel-item modal-trigger"><img src="https://i.imgur.com/fnObNv8.png" /></a>
                    <a href="#poemModal1" className="carousel-item modal-trigger"><img src="https://i.imgur.com/wORoZQp.png" /></a>
                    <a href="#poemModal1" className="carousel-item modal-trigger"><img src="https://i.imgur.com/lxzhNEc.png" /></a>
                    <a href="#poemModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/84JLzqS.png" /></a>
                    <a href="#poemModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/nbIH7eb.png" /></a>
                    <a href="#poemModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/JPha5Og.png" /></a>
                    <a href="#poemModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/nmRe0Wn.png" /></a>
                    <a href="#poemModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/uzlv87f.png" /></a>
                    <a href="#poemModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/jE1eyde.png" /></a>
                    <a href="#poemModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/DQVj0eJ.png" /></a>
                    <a href="#poemModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/XeX2fG9.png" /></a>
                    <a href="#poemModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/eRC6TV2.png" /></a>
                    <a href="#poemModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/ushfCdt.png" /></a>
                    <a href="#poemModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/YoZn88b.png" /></a>
                    <a href="#poemModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/5ERB8Vs.png" /></a>
                    <a href="#poemModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/o1HfXts.png" /></a>
                    <a href="#poemModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/MeD31F7.png" /></a>
                    <a href="#poemModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/yIoHZD4.png" /></a>
                    <a href="#poemModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/HZXIlkW.png" /></a>
                    <a href="#poemModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/lJ5KVR8.png" /></a>
                    <a href="#poemModal1" className="carousel-item modal-trigger" ><img src="https://i.imgur.com/RIV8wvi.png" /></a>
                </div>
                <PoemModal modalPoemImg={this.state.holdImg}/>
            </div>
            
				
		);
	}
}


export default PoemCarousel;