import React, { Component } from "react";
import { Link } from "react-router-dom";
import ArtCarousel from "./pieces/ArtCarousel";

class ArtGallery extends Component {

  render() {
    return(
        <ArtCarousel className="center" />
    ); 
  }
}

export default ArtGallery;
