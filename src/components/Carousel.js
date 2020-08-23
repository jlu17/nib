import React from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";

import photo1 from '../img/members/carousel/photo1.jpg';
import photo2 from '../img/members/carousel/photo2.jpg';
import photo3 from '../img/members/carousel/photo3.jpg';
import photo4 from '../img/members/carousel/photo4.jpg';
import photo5 from '../img/members/carousel/photo5.jpg';

const flickityOptions = {
  initialIndex: 2,
    wrapAround: true,
    fade: true
}

function Carousel(props) {
  return (
      <Flickity
        options={flickityOptions}
      
      >
        <img src={photo1} />
        <img src={photo2} />
        <img src={photo3} />
        <img src={photo4} />
        <img src={photo5} />
      </Flickity>

  )
    
}

export default Carousel;