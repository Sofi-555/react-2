import React from "react";
// https://www.npmjs.com/package/react-material-ui-carousel
import Carousel from 'react-material-ui-carousel';
import './style.css';

function MainCarousel () {
 const colors = ['Green', 'DarkRed', 'MediumSpringGreen','Navy','Indigo','LightCoral'];
 return (
  <div className="carousel-issue">
   <Carousel height={"450px"}>
    {
     colors.map(color => <div
      style={{ backgroundColor: color }}
      className="carousel-part-issues"></div>)
    }
   </Carousel>
  </div>
 );
}

export default MainCarousel;