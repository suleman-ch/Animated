import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
class SlickSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img src="images/02.jpg"/>
        </div>
        <div>
        <img src="images/jj.jpg"/>
        </div>
        <div>
        <img src="images/un.jpg"/>
        </div>
        <div>
        <img src="images/ima.jpg"/>
        </div>
        <div>
        <img src="images/imag.jpg"/>
        </div>
      </Slider>
    );
  }
}

export default SlickSlider;